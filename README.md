````markdown
# Nomad Solutions — Burning Man RV Rentals

[![ESLint](https://github.com/McCal-Codes/Nomad-Solutions/actions/workflows/eslint.yml/badge.svg)](https://github.com/McCal-Codes/Nomad-Solutions/actions/workflows/eslint.yml)
[![Tests](https://github.com/McCal-Codes/Nomad-Solutions/actions/workflows/tests.yml/badge.svg)](https://github.com/McCal-Codes/Nomad-Solutions/actions/workflows/tests.yml)
[![Lighthouse](https://github.com/McCal-Codes/Nomad-Solutions/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/McCal-Codes/Nomad-Solutions/actions/workflows/lighthouse.yml)
[![Bundle Size](https://github.com/McCal-Codes/Nomad-Solutions/actions/workflows/bundle-size.yml/badge.svg)](https://github.com/McCal-Codes/Nomad-Solutions/actions/workflows/bundle-size.yml)

Minimal, SEO‑first Next.js platform powering an RV rental service focused on Burning Man. Mobile‑first, desert‑inspired design with dark/light mode, embeddable widgets, and room to grow into real booking + availability APIs.

> API work roadmap: see `API.md` for planned booking & availability endpoints (currently mock data only). Test harness roadmap in `docs/TEST-HARNESS-PLAN.md`.

> ✨ New: Zero‑build HTML/JS widgets for Wix, Squarespace, WordPress, Webflow & any static site. Just copy & paste.

## Table of Contents
1. Overview
2. Tech Stack & Scripts
3. Directory Layout
4. Quick Start (App)
5. Widgets (Simple vs React)
6. Embedding Examples
7. Customization & API Hooks
8. Documentation Map
9. Contributing
10. License

---
## 1. Overview
Nomad Solutions is split into two layers:
1. A Next.js marketing + informational site (App Router) with fleet, pricing, booking placeholder, FAQ & contact.
2. A widget system offered in two forms:
	- Simple vanilla HTML/CSS/JS widgets (no build step, tiny footprint)
	- React bundle widgets (heavier, but more extensible)

## 2. Tech Stack & Scripts
| Purpose | Tech |
|---------|------|
| Framework | Next.js 14 (App Router) |
| UI | React 18, Tailwind CSS |
| Bundling (widgets) | Webpack 5 |
| Language | TypeScript |
| Styling | CSS Modules + Tailwind utilities |

Scripts:
```bash
npm install            # install dependencies
npm run dev            # start Next.js dev server
npm run build          # build Next.js app
npm run build:widgets  # build React widget bundles (webpack)
npm run start          # start production server
npm run lint           # run ESLint
```

## 3. Directory Layout
```
src/app/              # App Router routes & API endpoints
src/components/       # Reusable React components
src/lib/              # Data seeds & utility modules
src/widgets/          # React widget source (pre-bundle)
public/widgets/       # Distributed widget bundles (simple + built React)
public/landing-page.html  # Demo landing page with widgets
public/widget-examples.html # Widget embedding showcase
docs/                 # Guides, standards, SEO, widget embedding
```

## 4. Quick Start (App)
```bash
npm install
npm run dev
# visit http://localhost:3000
```

### Widget Previews
- Open `public/demos/index.html` for individual widget preview pages
- Open `public/widget-examples.html` for all widgets combined
- Open `public/landing-page.html` for full marketing layout demo

## 5. Widgets (Simple vs React)
| Variant | Location | Size (approx) | Build Needed | Best For |
|---------|----------|---------------|--------------|----------|
| availability-widget-simple.js | public/widgets | ~5KB | No | Instant embed |
| fleet-widget-simple.js        | public/widgets | ~8KB | No | Fleet showcase |
| availability-widget.js        | public/widgets | ~142KB | Yes (`build:widgets`) | Extensible React |
| pricing-widget.js             | public/widgets | ~142KB | Yes | Dynamic pricing |
| rv-card-widget.js             | public/widgets | ~142KB | Yes | Rich vehicle cards |

### When to choose Simple
Use simple widgets for speed, minimal footprint, and broad platform compatibility.

### When to choose React
Use React widgets when you need advanced stateful features, modular extension, or integration with a larger React application.

## 6. Embedding Examples (Simple Copy & Paste)
```html
<!-- Availability (simple) -->
<div id="nomad-availability-widget"></div>
<script src="https://yourdomain.com/widgets/availability-widget-simple.js"></script>

<!-- Fleet (simple) -->
<div id="nomad-fleet-widget"></div>
<script src="https://yourdomain.com/widgets/fleet-widget-simple.js"></script>
```
React bundle version (after `npm run build:widgets`):
```html
<div data-nomad-widget="availability"></div>
<script src="https://yourdomain.com/widgets/availability-widget.js"></script>
```

## 7. Customization & API Hooks
All widgets accept data attributes for configuration:
```html
<div data-nomad-widget="availability"
	  data-dark-mode="true"
	  data-api-url="https://api.yourdomain.com/availability"
></div>
```
Planned enhancements: booking endpoint integration, availability polling, SSR hydration for React variants.

## 8. Documentation Map
| Guide | Purpose |
|-------|---------|
| `SIMPLE-WIDGETS-GUIDE.md` | Vanilla widget embedding & customization |
| `WIDGET-QUICKSTART.md` | React widget build + embed workflow |
| `docs/widget-embedding-guide.md` | Full platform & troubleshooting reference |
| `docs/components-guide.md` | Component inventory for building pages |
| `docs/standards/README.md` | Development & performance standards |
| `docs/seo-checklist.md` | SEO implementation checklist |

## 9. Contributing
See `CONTRIBUTING.md` for branching, commit style, code review flow, and documentation rules.
Quick rules:
1. Keep widgets tiny & dependency‑free (simple versions).
2. Preserve accessibility (focus order, ARIA labels, color contrast).
3. Favor data attributes over inline scripts for configuration.
4. Update relevant guide when adding/removing a widget.

## 10. API & Testing Roadmap
See `API.md` for planned REST endpoints (`/api/availability`, `/api/booking/quote`, `/api/booking/confirm`). A lightweight widget initialization test harness is planned (Jest + DOM testing) — outline in `docs/TEST-HARNESS-PLAN.md`.

## 11. License
Licensed under the terms in `LICENSE`.

---
### At a Glance
✅ Zero‑config simple widgets • ✅ Responsive & dark‑mode ready • ✅ API extensible • ✅ Platform agnostic

For deeper embedding details jump to `SIMPLE-WIDGETS-GUIDE.md` or `docs/widget-embedding-guide.md`.

````
