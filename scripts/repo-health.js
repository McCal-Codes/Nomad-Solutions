#!/usr/bin/env node
'use strict';

/**
 * Repository Health Check
 * Runs comprehensive checks on repository health including:
 * - Git repository status
 * - Dependency vulnerabilities
 * - Outdated packages
 * - File structure validation
 * - Build artifacts check
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const checks = [];
const warnings = [];
const errors = [];

function exec(cmd, options = {}) {
  try {
    return execSync(cmd, { 
      encoding: 'utf8', 
      cwd: ROOT,
      stdio: 'pipe',
      ...options 
    }).trim();
  } catch (e) {
    return null;
  }
}

function check(name, fn) {
  try {
    const result = fn();
    checks.push({ name, status: result ? '✓' : '✗', ok: result });
    if (!result) errors.push(name);
    return result;
  } catch (e) {
    checks.push({ name, status: '✗', ok: false, error: e.message });
    errors.push(`${name} (${e.message})`);
    return false;
  }
}

function warn(name, cond, message) {
  if (!cond) {
    warnings.push({ name, message });
  }
}

function exists(p) {
  return fs.existsSync(path.join(ROOT, p));
}

const hr = () => console.log(''.padEnd(70, '-'));
const section = (title) => {
  console.log('');
  console.log(`\n${title} - repo-health.js:62`);
  console.log(''.padEnd(title.length, '='));
};

// Git Health
section('📦 Git Repository Health');
check('Git repository initialized', () => exists('.git'));
check('Remote configured', () => {
  const remote = exec('git remote -v');
  return remote && remote.length > 0;
});

const uncommitted = exec('git status --porcelain');
warn('Uncommitted changes', !uncommitted || uncommitted.length === 0, 
  `${uncommitted ? uncommitted.split('\n').length : 0} uncommitted files`);

const branch = exec('git branch --show-current');
console.log(`Current branch: ${branch || 'unknown'} - repo-health.js:79`);

// Dependency Health
section('📚 Dependencies');
check('package.json exists', () => exists('package.json'));
check('package-lock.json exists', () => exists('package-lock.json'));
check('node_modules installed', () => exists('node_modules'));

// Check for vulnerabilities (non-blocking)
console.log('\nChecking for vulnerabilities... - repo-health.js:88');
const auditOutput = exec('npm audit --json 2>/dev/null');
if (auditOutput) {
  try {
    const audit = JSON.parse(auditOutput);
    const { vulnerabilities } = audit;
    if (vulnerabilities) {
      const counts = {
        critical: vulnerabilities.critical || 0,
        high: vulnerabilities.high || 0,
        moderate: vulnerabilities.moderate || 0,
        low: vulnerabilities.low || 0
      };
      const total = Object.values(counts).reduce((a, b) => a + b, 0);
      if (total > 0) {
        console.log(`⚠️  Found ${total} vulnerabilities: - repo-health.js:103`);
        if (counts.critical) console.log(`Critical: ${counts.critical} - repo-health.js:104`);
        if (counts.high) console.log(`High: ${counts.high} - repo-health.js:105`);
        if (counts.moderate) console.log(`Moderate: ${counts.moderate} - repo-health.js:106`);
        if (counts.low) console.log(`Low: ${counts.low} - repo-health.js:107`);
        warn('Security vulnerabilities', false, `${total} vulnerabilities found`);
      } else {
        console.log('✓ No vulnerabilities found - repo-health.js:110');
      }
    }
  } catch (e) {
    console.log('⚠️  Could not parse audit results - repo-health.js:114');
  }
} else {
  console.log('⚠️  Could not run npm audit - repo-health.js:117');
}

// Build & Test Files
section('🔧 Build Configuration');
check('TypeScript config exists', () => exists('tsconfig.json'));
check('Next.js config exists', () => exists('next.config.js'));
check('Tailwind config exists', () => exists('tailwind.config.ts'));
check('Jest config exists', () => exists('jest.config.js'));
check('Webpack widget config exists', () => exists('widget.config.js'));

// Critical Directories
section('📁 Directory Structure');
check('src/ directory exists', () => exists('src'));
check('public/ directory exists', () => exists('public'));
check('docs/ directory exists', () => exists('docs'));
check('scripts/ directory exists', () => exists('scripts'));
check('__tests__/ directory exists', () => exists('__tests__'));

// Build Artifacts
section('🏗️  Build Artifacts');
const hasNextBuild = exists('.next');
const hasWidgets = exists('public/widgets');
console.log(`Next.js build: ${hasNextBuild ? '✓ Present' : '✗ Missing'} - repo-health.js:140`);
console.log(`Widget bundles: ${hasWidgets ? '✓ Present' : '✗ Missing'} - repo-health.js:141`);

if (hasWidgets) {
  const legacyWidgets = ['availability-widget-simple.js', 'fleet-widget-simple.js'];
  legacyWidgets.forEach(widget => {
    const exists = fs.existsSync(path.join(ROOT, 'public/widgets', widget));
    console.log(`${widget}: ${exists ? '✓' : '✗'} - repo-health.js:147`);
  });
}

// TypeScript Check
section('🔍 Type Safety');
console.log('Running TypeScript type check... - repo-health.js:153');
const tscResult = exec('npx tsc --noEmit 2>&1');
if (tscResult === '' || tscResult === null) {
  console.log('✓ No TypeScript errors - repo-health.js:156');
} else {
  const errorCount = (tscResult.match(/error TS/g) || []).length;
  if (errorCount > 0) {
    console.log(`⚠️  Found ${errorCount} TypeScript errors - repo-health.js:160`);
    warn('TypeScript errors', false, `${errorCount} type errors`);
  } else {
    console.log('✓ No TypeScript errors - repo-health.js:163');
  }
}

// Summary
section('📊 Health Summary');
const totalChecks = checks.length;
const passed = checks.filter(c => c.ok).length;
const failed = totalChecks - passed;

console.log(`\nChecks: ${passed}/${totalChecks} passed - repo-health.js:173`);
if (failed > 0) {
  console.log(`❌ Failed checks: ${failed} - repo-health.js:175`);
  errors.forEach(e => console.log(`${e} - repo-health.js:176`));
}

if (warnings.length > 0) {
  console.log(`\n⚠️  Warnings: ${warnings.length} - repo-health.js:180`);
  warnings.forEach(w => console.log(`${w.name}${w.message ? ': ' + w.message : ''} - repo-health.js:181`));
}

console.log('');
hr();

if (failed > 0) {
  console.log('❌ Repository health check FAILED - repo-health.js:188');
  process.exit(1);
} else if (warnings.length > 0) {
  console.log('⚠️  Repository health check PASSED with warnings - repo-health.js:191');
  process.exit(0);
} else {
  console.log('✅ Repository health check PASSED - repo-health.js:194');
  process.exit(0);
}
