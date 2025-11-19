# TODO

- [ ] TODO: Swap placeholder images with branded assets
- [ ] TODO: Connect availability widget to real booking API
- [ ] TODO: Add form handling + validation for booking and contact
- [ ] TODO: Generate production-ready OG images
- [x] DONE: Add sitemap + robots.txt routes for SEO
- [x] DONE: Create embeddable widgets for Squarespace/Wix/WordPress
- [x] DONE: Build webpack configuration for widget bundling
- [x] DONE: Add widget documentation and examples

## Widget Integration Completed ✅

All components are now available as standalone embeddable widgets:
- ✅ Availability Widget
- ✅ Pricing Table Widget
- ✅ RV Card Widget

See `WIDGET-QUICKSTART.md` for usage instructions.

## This Week (Nov 19–Nov 26, 2025)

### Minimal (15–30 min)
- [ ] Add `/api/health` GET route returning `{ status: "ok", version, uptime }`
- [ ] Add version dropdown UI on `public/demos/index.html` to support multiple widget versions
- [ ] Add npm script `preview:demos` to open `public/demos/index.html` in the default browser

### Medium (1–3 hrs)
- [ ] Implement `/api/vehicles` GET using `src/lib/vehicles.ts` with optional filters (`class`, `sleeps`, `ac`, `pickupLocation`)
- [ ] Add Jest tests for `pricing-widget` and `rv-card-widget` (init + dark mode + attribute parsing)
- [ ] Create versioned demos for Pricing and RV Card widgets: `public/demos/pricing-widget/v1.0.0.html` and `public/demos/rv-card-widget/v1.0.0.html` with accompanying README.md in each folder

### Large (0.5–2 days)
- [ ] Implement `/api/booking/quote` (mock) with pricing breakdown; document schema and examples in `API.md`
- [ ] Implement `/api/booking/confirm` (mock) with conflict handling and standardized error format; document in `API.md`
- [ ] Simple admin page for toggling vehicle availability (protected via env key) under `/admin` (Next.js App Router)
- [ ] Introduce a lightweight cache abstraction (in-memory with TTL, pluggable to Redis later) for availability and vehicles; include unit tests
