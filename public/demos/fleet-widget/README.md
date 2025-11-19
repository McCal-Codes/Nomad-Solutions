# Fleet Widget Versions

## Current Version: 1.0.0

### Version History

#### v1.0.0 (2025-11-19)
**Initial Release**

**Features:**
- Auto-initialization via `data-nomad-widget="fleet"` or `#nomad-fleet-widget`
- Dark mode support via `data-dark-mode="true"`
- Responsive grid layout (1-3 columns)
- Vehicle cards with specs (AC, Water, Dust-proofing, Pickup)
- Custom booking URL via `data-booking-url`
- Custom images via `data-images-base`
- Custom vehicle data via `data-vehicles` JSON
- Mutation observer for dynamic DOM injection
- Zero external dependencies

**Bundle Size:** ~8KB

**Preview:** [v1.0.0.html](./v1.0.0.html)

**Widget File:** `/public/widgets/fleet-widget-simple.js`

---

## Roadmap

### v1.1.0 (Planned)
- Vehicle filtering by specs
- Sort by price, capacity, availability
- Compare vehicles side-by-side
- Favorite/wishlist functionality

### v1.2.0 (Planned)
- Image gallery/carousel for each vehicle
- Video preview support
- 360° vehicle views
- Virtual tour integration

---

## Upgrade Guide

### From v1.0.0 to v1.1.0
No breaking changes planned. New features will be opt-in via data attributes.

---

## Deprecation Policy

- Features marked deprecated will be supported for at least 2 minor versions
- Breaking changes only occur in major version bumps
- All breaking changes will be documented with migration guides
