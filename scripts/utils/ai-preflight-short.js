#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

// Tiny sync helpers are fine for a short CLI like this
const exists = (p) => {
  try { return fs.existsSync(p); } catch { return false; }
};
const read = (p) => {
  try { return fs.readFileSync(p, 'utf8'); } catch { return ''; }
};
const json = (p) => {
  try { return JSON.parse(read(p)); } catch { return null; }
};

const root = process.cwd();
const rel = (...p) => path.join(root, ...p);

// Constants to avoid repeating literals
const VERSION = 'v1.0.0';
const paths = {
  docs: rel('docs/standards'),
  demos: rel('public/demos'),
  widgets: rel('public/widgets'),
  availability: rel('public/widgets/availability'),
  fleet: rel('public/widgets/fleet'),
  pricing: rel('public/widgets/pricing'),
  rvCard: rel('public/widgets/rv-card'),
};

const checks = [];
const errors = [];
const warnings = [];

function check(name, fn) {
  try {
    const ok = !!fn();
    checks.push({ name, ok });
    if (!ok) errors.push(name);
  } catch (e) {
    checks.push({ name, ok: false });
    errors.push(`${name} (${e && e.message ? e.message : 'error'})`);
  }
}
function warn(name, cond) {
  if (!cond) warnings.push(name);
}

const pkg = json(rel('package.json')) || {};
const scripts = (pkg && pkg.scripts) || {};

// Core files
check('docs: preflight-afterflight.md exists', () => exists(path.join(paths.docs, 'preflight-afterflight.md')));
check('docs: workspace-organization.md exists', () => exists(path.join(paths.docs, 'workspace-organization.md')));
check('jest config exists', () => exists(rel('jest.config.js')));
check('size-limit configured', () => Array.isArray(pkg['size-limit']) && pkg['size-limit'].length >= 2);

// Bundles
check('widgets: legacy bundles exist', () => (
  exists(path.join(paths.widgets, 'availability-widget-simple.js')) &&
  exists(path.join(paths.widgets, 'fleet-widget-simple.js'))
));
check('widgets: versioned bundles exist', () => (
  exists(path.join(paths.availability, VERSION, 'availability-widget-simple.js')) &&
  exists(path.join(paths.fleet, VERSION, 'fleet-widget-simple.js'))
));

// Demos
check('demos: index exists', () => exists(path.join(paths.demos, 'index.html')));
const contains = (file, needle) => read(file).includes(needle);
check('demos: availability ' + VERSION + ' points to versioned bundle', () => (
  contains(path.join(paths.demos, 'availability-widget', `${VERSION}.html`), `widgets/availability/${VERSION}/availability-widget-simple.js`)
));
check('demos: fleet ' + VERSION + ' points to versioned bundle', () => (
  contains(path.join(paths.demos, 'fleet-widget', `${VERSION}.html`), `widgets/fleet/${VERSION}/fleet-widget-simple.js`)
));
check('CI: tests workflow exists', () => exists(rel('.github/workflows/tests.yml')));

// Scripts (warnings only)
warn('npm script: preview:demos present', typeof scripts['preview:demos'] === 'string');
warn('npm script: ai:preflight:short present', typeof scripts['ai:preflight:short'] === 'string');

// Demos UX (warning only)
warn('demos: index has version selector', (() => {
  const s = read(path.join(paths.demos, 'index.html'));
  return s.includes('version-select') || s.includes('Version:') || s.includes('select id="version"');
})());

// Versions folders presence
check('widgets: availability versions html exists', () => exists(path.join(paths.availability, 'versions', `${VERSION}.html`)));
check('widgets: fleet versions html exists', () => exists(path.join(paths.fleet, 'versions', `${VERSION}.html`)));
check('widgets: pricing versions html exists', () => exists(path.join(paths.pricing, 'versions', `${VERSION}.html`)));
check('widgets: rv-card versions html exists', () => exists(path.join(paths.rvCard, 'versions', `${VERSION}.html`)));

// Output
const okCount = checks.filter(c => c.ok).length;
const errCount = errors.length;
const warnCount = warnings.length;

const line = (msg) => process.stdout.write(msg + '\n');
const hr = () => line(''.padEnd(60, '-'));

hr();
line('AI Preflight (short) — repository health check');
hr();
checks.forEach(c => line(`${c.ok ? '✓' : '✗'} ${c.name}`));
if (warnings.length) {
  hr();
  line('Warnings:');
  warnings.forEach(w => line(`• ${w}`));
}
hr();
line(`Summary: ${okCount} passed, ${warnCount} warnings, ${errCount} errors`);
hr();

process.exit(errCount > 0 ? 1 : 0);
