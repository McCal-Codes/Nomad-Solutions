# Documentation Hub

Central index for Nomad Solutions development, embedding, standards & SEO.

## Index
| Area | File / Folder | Purpose |
|------|---------------|---------|
| Overview (root) | `README.md` | Project overview, structure, widget summary |
| Components | `components-guide.md` | Inventory & usage of reusable React components |
| Widgets – Simple | `../SIMPLE-WIDGETS-GUIDE.md` | Vanilla copy‑paste widgets guide |
| Widgets – React | `../WIDGET-QUICKSTART.md` | Build + embed React widget bundles |
| Embedding Reference | `widget-embedding-guide.md` | Multi‑platform + troubleshooting |
| SEO Checklist | `seo-checklist.md` | Practical implementation tasks |
| Standards | `standards/` | Governance: performance, accessibility, versioning |
| TODOs | `todo.md` | Internal planning tasks |

## Getting Started (App Layer)
```bash
npm install
npm run dev
```
Visit http://localhost:3000 and explore routes (`/fleet`, `/booking`, `/faq`).

## Widgets Overview
Simple (no build) and React (build) variants live in `public/widgets/` after building. See root `README.md` for comparison matrix.

## Authoring New Widgets
1. Prototype with a simple vanilla version (keep file <10KB).
2. If advanced state or complex composition needed, add a React version under `src/widgets/` and run `npm run build:widgets`.
3. Document additions: update `SIMPLE-WIDGETS-GUIDE.md` or `WIDGET-QUICKSTART.md` and link from standards if pattern changes.

## Standards Entry Points
Start with:
- `standards/widget-reference.md` (checklist)
- `standards/performance-standards.md` (Lighthouse guidance)
- `standards/accessibility-patterns.md` (WCAG patterns)

## SEO Essentials
Use `seo-checklist.md` when optimizing pages (title tags, meta description, canonical, structured data for RV listings, image alt + compression).

## Contributing
See `../CONTRIBUTING.md` for branching, commit style, and review workflow.

## License
See root `LICENSE` file.

---
Keep docs atomic: small focused files, cross‑link instead of duplication.
