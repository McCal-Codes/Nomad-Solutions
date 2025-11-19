# Availability Widget Versions

## Current Version: 1.0.0

### Version History

#### v1.0.0 (2025-11-19)
**Initial Release**

**Features:**
- Auto-initialization via `data-nomad-widget="availability"` or `#nomad-availability-widget`
- Dark mode support via `data-dark-mode="true"`
- API integration with fallback to mock data
- Responsive design (mobile, tablet, desktop)
- Real-time status indicators (Available, Limited, Booked)
- Mutation observer for dynamic DOM injection
- Zero external dependencies

**Bundle Size:** ~5KB

**Preview:** [v1.0.0.html](./v1.0.0.html)

**Widget File:** `/public/widgets/availability-widget-simple.js`

---

## Roadmap

### v1.1.0 (Planned)
- Custom API polling intervals
- Webhook support for real-time updates
- Custom status labels
- Internationalization (i18n)

### v1.2.0 (Planned)
- Date range filtering
- Search/filter functionality
- Export availability data
- Calendar integration

---

## Upgrade Guide

### From v1.0.0 to v1.1.0
No breaking changes planned. New features will be opt-in via data attributes.

---

## Deprecation Policy

- Features marked deprecated will be supported for at least 2 minor versions
- Breaking changes only occur in major version bumps
- All breaking changes will be documented with migration guides
