# Changelog — 2025-11-26

## Landing page performance & SEO
- Added canonical and meta description, Open Graph and Twitter tags in `public/landing-page.html`.
- Preloaded stylesheet and enabled non-blocking CSS load.
- Marked below-the-fold service icons as `loading="lazy"` with explicit dimensions to reduce CLS.
- Moved inline widgets to external, deferred scripts for better performance.

## Widget versioning
- Created `public/widgets/availability/availability-widget-simple-v2.js`.
- Created `public/widgets/fleet/fleet-widget-simple-v2.js`.
- Updated `public/landing-page.html` to reference new widget versions with `defer`.
 - Added minified bundles: `availability-widget-simple-v2.min.js`, `fleet-widget-simple-v2.min.js`.
 - Switched landing page to use minified bundles for embed efficiency.

## Embedding docs
- Added `public/widgets/README.md` with Squarespace/Wix copy-paste snippets and CDN guidance.

