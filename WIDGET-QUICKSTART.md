# React Widget Quick Start 🚀

Build & embed the React (bundled) versions of Nomad Solutions widgets in under 5 minutes.

> Looking for zero‑build vanilla widgets? See `SIMPLE-WIDGETS-GUIDE.md` instead.

## 1. Build the React Bundles
```bash
npm install
npm run build:widgets
```
Outputs (in `public/widgets/`):
- `availability-widget.js`
- `pricing-widget.js`
- `rv-card-widget.js`

## 2. Deploy Bundles
Upload the generated files to a public path (same filenames):
```
https://yourdomain.com/widgets/availability-widget.js
https://yourdomain.com/widgets/pricing-widget.js
https://yourdomain.com/widgets/rv-card-widget.js
```

## 3. Embed (Data Attribute Pattern)
```html
<div data-nomad-widget="availability"></div>
<script src="https://yourdomain.com/widgets/availability-widget.js"></script>
```
Repeat for pricing & RV card:
```html
<div data-nomad-widget="pricing"></div>
<div data-nomad-widget="rv-card"></div>
<script src="https://yourdomain.com/widgets/pricing-widget.js"></script>
<script src="https://yourdomain.com/widgets/rv-card-widget.js"></script>
```

## 4. Platform Notes
| Platform | How | Notes |
|----------|-----|-------|
| Squarespace | Code Block | Scripts allowed; ensure HTTPS |
| Wix | Embed Custom Code | Prefer bottom of page or custom element |
| WordPress | Custom HTML block | Gutenberg block keeps markup intact |
| Webflow | Embed component | Paste HTML + script tags |

## 5. Customization Attributes
| Attribute | Applies To | Purpose | Example |
|-----------|-----------|---------|---------|
| `data-dark-mode` | all widgets | Force dark theme | `data-dark-mode="true"` |
| `data-api-url` | availability | Override availability endpoint | `data-api-url="https://api.example.com/availability"` |
| `data-booking-url` | rv-card/pricing | Deep link to booking flow | `data-booking-url="/booking"` |

Example combining attributes:
```html
<div data-nomad-widget="availability"
	data-dark-mode="true"
	data-api-url="https://api.yourdomain.com/availability"
></div>
<script src="https://yourdomain.com/widgets/availability-widget.js"></script>
```

## 6. Multiple Widgets Best Practice
Load each script once near the end of `<body>`:
```html
<div data-nomad-widget="availability"></div>
<div data-nomad-widget="pricing"></div>
<div data-nomad-widget="rv-card"></div>

<script src="https://yourdomain.com/widgets/availability-widget.js"></script>
<script src="https://yourdomain.com/widgets/pricing-widget.js"></script>
<script src="https://yourdomain.com/widgets/rv-card-widget.js"></script>
```

## 7. Local Testing
Open `public/widget-examples.html` for a sandbox page that demonstrates all variants.

## 8. Troubleshooting
| Issue | Check |
|-------|-------|
| Widget not rendering | Correct `data-nomad-widget` value? Console errors? Script loaded? |
| Dark mode ignored | Attribute spelled correctly? Conflicting site CSS? |
| API data missing | Network tab 200 response? CORS headers? Correct `data-api-url`? |

## 9. Advanced Integration
You can manually initialize (future enhancement) or hydrate server output. For now use data attribute auto‑init pattern.

## 10. Related Docs
- Vanilla widgets: `SIMPLE-WIDGETS-GUIDE.md`
- Full embedding & platform nuances: `docs/widget-embedding-guide.md`
- Standards & performance: `docs/standards/` (start at `widget-reference.md`)

---
Keep bundle size lean. When adding dependencies, prefer pushing functionality into the simple widget instead if feasible.
