# Components guide

- **`RvCard`** (`src/components/rv-card.tsx`): Displays vehicle photo, specs, pricing, and availability badge.
- **`PricingTable`** (`src/components/pricing-table.tsx`): Quick rate comparison with mileage and power notes.
- **`IncludesGrid`** (`src/components/includes-grid.tsx`): Bullet grid of what every rental includes.
- **`PhotoGallery`** (`src/components/photo-gallery.tsx`): Responsive gallery for interior/exterior shots using `next/image`.
- **`AvailabilityWidget`** (`src/components/availability-widget.tsx`): Client-side fetch from `/api/availability` ready to swap for real data.
- **`ThemeProvider` + `ThemeToggle`** (`src/components/theme-provider.tsx`, `src/components/theme-toggle.tsx`): Adds dark/light mode with localStorage persistence.

Use these components to assemble new pages; favor data-driven rendering so future API responses can hydrate UI without refactors.
