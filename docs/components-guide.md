# Components Guide

Inventory of reusable React components powering the marketing site & widget system.

| Component | File | Purpose | Notes |
|-----------|------|---------|-------|
| `RvCard` | `src/components/rv-card.tsx` | Vehicle photo + specs + pricing badge | Basis for fleet listing & card widget |
| `PricingTable` | `src/components/pricing-table.tsx` | Rate comparison with mileage/power notes | Extend to include seasonal pricing later |
| `IncludesGrid` | `src/components/includes-grid.tsx` | Shows what’s included in rental | Data source in `src/lib/vehicles.ts` |
| `PhotoGallery` | `src/components/photo-gallery.tsx` | Responsive interior/exterior gallery | Uses `next/image`; optimize alt text for SEO |
| `AvailabilityWidget` | `src/components/availability-widget.tsx` | Client fetch of `/api/availability` | Replace mock API with real booking feed |
| `ThemeProvider` / `ThemeToggle` | `src/components/theme-provider.tsx` / `src/components/theme-toggle.tsx` | Light/dark mode with persistence | Keep color tokens consistent with standards |

## Usage Pattern
Favor data‑driven rendering so future API responses can hydrate UI without refactors. Example:
```tsx
import RvCard from '@/components/rv-card';
import { fleet } from '@/lib/vehicles';

export default function FleetSection() {
	return (
		<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{fleet.map(v => <RvCard key={v.id} vehicle={v} />)}
		</div>
	);
}
```

## Extension Guidelines
1. Keep props minimal; prefer passing a single vehicle or data object.
2. Avoid hard‑coding copy—centralize lists & spec arrays in `src/lib/`.
3. Preserve accessibility: semantic headings, alt text, keyboard focus order.
4. Update this guide when adding a new public component.

## Roadmap Candidates
- Add loading skeleton variants.
- Integrate booking CTA state into `RvCard`.
- Gallery modal/lightbox (ensure performance + a11y patterns).

For style & performance rules see `docs/standards/performance-standards.md` & `docs/standards/accessibility-patterns.md`.
