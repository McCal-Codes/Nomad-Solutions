#!/usr/bin/env node
'use strict';

/**
 * Lighthouse Audit Runner
 * Runs Lighthouse performance audits on specified URLs
 * 
 * Usage:
 *   npm run lighthouse                    # Audit local dev server
 *   npm run lighthouse -- --url=https://example.com
 *   npm run lighthouse -- --url=http://localhost:3000/fleet
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, 'lighthouse-reports');

// Parse CLI arguments
const args = process.argv.slice(2);
const urlArg = args.find(arg => arg.startsWith('--url='));
const targetUrl = urlArg ? urlArg.split('=')[1] : 'http://localhost:3000';

const outputDir = REPORTS_DIR;
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function exec(cmd) {
  try {
    return execSync(cmd, { encoding: 'utf8', stdio: 'inherit' });
  } catch (e) {
    console.error(`Error executing: ${cmd}`);
    return null;
  }
}

function checkLighthouse() {
  try {
    execSync('npx lighthouse --version', { stdio: 'pipe' });
    return true;
  } catch (e) {
    return false;
  }
}

console.log('🔦 Lighthouse Audit Runner');
console.log(''.padEnd(60, '='));
console.log(`Target URL: ${targetUrl}`);
console.log(`Output directory: ${outputDir}`);
console.log('');

// Check if Lighthouse is available
if (!checkLighthouse()) {
  console.log('📦 Lighthouse not found. Installing...');
  console.log('');
  exec('npm install -D lighthouse');
  console.log('');
}

// URLs to audit
const urls = [
  { path: '', name: 'home' },
  { path: '/fleet', name: 'fleet' },
  { path: '/booking', name: 'booking' },
];

console.log('Running audits...\n');

const results = [];

for (const page of urls) {
  const url = targetUrl + page.path;
  const outputPath = path.join(outputDir, `${page.name}-${timestamp}.html`);
  const jsonPath = path.join(outputDir, `${page.name}-${timestamp}.json`);
  
  console.log(`\n🔍 Auditing: ${url}`);
  console.log('─'.repeat(60));
  
  const cmd = `npx lighthouse "${url}" \
    --output=html,json \
    --output-path="${path.join(outputDir, `${page.name}-${timestamp}`)}" \
    --chrome-flags="--headless --no-sandbox" \
    --only-categories=performance,accessibility,best-practices,seo \
    --quiet`;
  
  const result = exec(cmd);
  
  if (result !== null) {
    console.log(`✓ Report saved: ${outputPath}`);
    
    // Try to read and parse scores
    try {
      if (fs.existsSync(jsonPath)) {
        const report = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        const scores = {
          performance: Math.round(report.categories.performance.score * 100),
          accessibility: Math.round(report.categories.accessibility.score * 100),
          bestPractices: Math.round(report.categories['best-practices'].score * 100),
          seo: Math.round(report.categories.seo.score * 100),
        };
        
        console.log('\n📊 Scores:');
        console.log(`   Performance:    ${scores.performance}/100 ${getEmoji(scores.performance)}`);
        console.log(`   Accessibility:  ${scores.accessibility}/100 ${getEmoji(scores.accessibility)}`);
        console.log(`   Best Practices: ${scores.bestPractices}/100 ${getEmoji(scores.bestPractices)}`);
        console.log(`   SEO:            ${scores.seo}/100 ${getEmoji(scores.seo)}`);
        
        results.push({ page: page.name, url, ...scores });
      }
    } catch (e) {
      console.log('⚠️  Could not parse scores from report');
    }
  } else {
    console.log(`✗ Failed to audit ${url}`);
  }
}

// Summary
console.log('\n');
console.log(''.padEnd(60, '='));
console.log('📈 Audit Summary');
console.log(''.padEnd(60, '='));

if (results.length > 0) {
  console.log('\nAverage Scores:');
  const avgPerf = Math.round(results.reduce((sum, r) => sum + r.performance, 0) / results.length);
  const avgA11y = Math.round(results.reduce((sum, r) => sum + r.accessibility, 0) / results.length);
  const avgBP = Math.round(results.reduce((sum, r) => sum + r.bestPractices, 0) / results.length);
  const avgSEO = Math.round(results.reduce((sum, r) => sum + r.seo, 0) / results.length);
  
  console.log(`  Performance:    ${avgPerf}/100 ${getEmoji(avgPerf)}`);
  console.log(`  Accessibility:  ${avgA11y}/100 ${getEmoji(avgA11y)}`);
  console.log(`  Best Practices: ${avgBP}/100 ${getEmoji(avgBP)}`);
  console.log(`  SEO:            ${avgSEO}/100 ${getEmoji(avgSEO)}`);
}

console.log(`\n📁 Reports saved to: ${outputDir}`);
console.log('\n✅ Lighthouse audit complete\n');

function getEmoji(score) {
  if (score >= 90) return '🟢';
  if (score >= 50) return '🟡';
  return '🔴';
}
