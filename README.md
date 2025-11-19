````markdown
# Nomad Solutions — Burning Man RV Rentals

A minimal, SEO-first Next.js site for an RV rental service focused on Burning Man. The UI is mobile-first, desert-inspired, dark/light mode capable, and built to expand with real booking APIs.

**✨ NEW: Pure HTML/CSS/JS Widgets for Wix, Squarespace, WordPress & More!**

No build step required - just copy and paste!

## Structure
- `src/app`: App Router routes for home, fleet, booking, FAQ, about, contact, and API placeholders.
- `src/components`: Reusable UI elements (cards, pricing table, includes grid, gallery, theme controls, availability widget).
- `src/widgets`: React-based widget versions (requires build step).
- `public/widgets`: **Pure HTML/JS widgets** - ready to use immediately!
- `public/landing-page.html`: Complete landing page demo.
- `src/lib`: Data seeds for the fleet and availability API.
- `docs`: Project guide, TODOs, SEO checklist, component reference, and widget embedding guide.

## Getting started

### Development
```bash
npm install
npm run dev
```

### View Landing Page
Open `public/landing-page.html` in your browser to see the complete landing page with widgets.

## 🎯 Embeddable Widgets (No Build Required!)

### Simple Copy & Paste Method

Add this to **any** website (Wix, Squarespace, WordPress, etc.):

```html
<!-- Availability Widget -->
<div id="nomad-availability-widget"></div>
<script src="https://yourdomain.com/widgets/availability-widget-simple.js"></script>

<!-- Fleet Widget -->
<div id="nomad-fleet-widget"></div>
<script src="https://yourdomain.com/widgets/fleet-widget-simple.js"></script>
```

That's it! No configuration, no build step, no external dependencies.

### Available Widgets

**Pure HTML/CSS/JavaScript** (in `public/widgets/`):
- `availability-widget-simple.js` - Fleet availability status (~5KB)
- `fleet-widget-simple.js` - Full fleet showcase (~8KB)

**React-based** (requires `npm run build:widgets`):
- `availability-widget.js` - React version (~142KB)
- `pricing-widget.js` - React version (~142KB)
- `rv-card-widget.js` - React version (~142KB)

## 📖 Documentation

- **Quick Start**: `SIMPLE-WIDGETS-GUIDE.md` - For Wix, Squarespace, etc.
- **React Widgets**: `WIDGET-QUICKSTART.md` - If you prefer React
- **Full Guide**: `docs/widget-embedding-guide.md` - Complete reference
- **Landing Page**: Open `public/landing-page.html` to see it all in action

## 🚀 Deployment

### For Simple Widgets (Recommended)
1. Upload `public/widgets/*-simple.js` to your server
2. Update script URLs in your HTML
3. Embed anywhere!

### For React Widgets
1. Run `npm run build:widgets`
2. Upload `public/widgets/*.js` to your server
3. Embed using the widget guide

## 🎨 Features

- ✅ **Zero config** - Works immediately
- ✅ **Tiny file size** - 5-8KB per widget (simple version)
- ✅ **Responsive** - Mobile, tablet, desktop
- ✅ **Dark mode** - Built-in support
- ✅ **API ready** - Connect your booking system
- ✅ **Platform agnostic** - Works everywhere

## 🌐 Perfect For

- Wix websites
- Squarespace sites
- WordPress blogs
- Webflow projects
- Custom HTML sites
- Any platform that supports HTML/JavaScript

For more details, open `docs/README.md` or `SIMPLE-WIDGETS-GUIDE.md`.

````
