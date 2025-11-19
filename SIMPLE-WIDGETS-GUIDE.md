# Simple Widgets Guide (Vanilla) ✨

Pure HTML/CSS/JavaScript widgets – no build, no dependencies. Ideal for Wix, Squarespace, WordPress, Webflow, or any static environment.

> Need the React bundles instead? See `WIDGET-QUICKSTART.md`.

## 1. Files
Located in `public/widgets/`:
- `availability-widget-simple.js` — Fleet availability status
- `fleet-widget-simple.js` — Vehicle cards & booking links

## 2. Quick Embed
```html
<div id="nomad-availability-widget"></div>
<script src="https://yourdomain.com/widgets/availability-widget-simple.js"></script>
```
Fleet version:
```html
<div id="nomad-fleet-widget"></div>
<script src="https://yourdomain.com/widgets/fleet-widget-simple.js"></script>
```

## 3. Data Attribute Auto‑Init
```html
<div data-nomad-widget="availability"></div>
<script src="https://yourdomain.com/widgets/availability-widget-simple.js"></script>
```
Fleet:
```html
<div data-nomad-widget="fleet" data-booking-url="https://yourdomain.com/booking"></div>
<script src="https://yourdomain.com/widgets/fleet-widget-simple.js"></script>
```

## 4. Platform Instructions
| Platform | How to Add | Notes |
|----------|------------|-------|
| Wix | Embed HTML element | Use iframe/embed; set height |
| Squarespace | Code Block | Paste HTML + script; apply |
| WordPress | Custom HTML block | Works in Gutenberg |
| Webflow | Embed component | Publish after paste |

## 5. Customization Attributes
| Attribute | Widget | Description | Example |
|-----------|--------|-------------|---------|
| `data-dark-mode` | all | Force dark theme | `data-dark-mode="true"` |
| `data-api-url` | availability | External availability endpoint | `data-api-url="https://api.example.com/availability"` |
| `data-booking-url` | fleet | Booking CTA destination | `data-booking-url="/booking"` |

Combined example:
```html
<div data-nomad-widget="availability"
       data-dark-mode="true"
       data-api-url="https://api.yourdomain.com/availability"
></div>
<script src="https://yourdomain.com/widgets/availability-widget-simple.js"></script>
```

## 6. Multiple Widgets
```html
<div data-nomad-widget="availability"></div>
<div data-nomad-widget="fleet"></div>
<script src="https://yourdomain.com/widgets/availability-widget-simple.js"></script>
<script src="https://yourdomain.com/widgets/fleet-widget-simple.js"></script>
```

## 7. Responsive Behavior
Widgets are fluid by default: mobile → tablet → desktop. Avoid fixed widths; let parent container manage layout spacing.

## 8. Manual Initialization (Optional)
```html
<div id="my-widget"></div>
<script src="https://yourdomain.com/widgets/availability-widget-simple.js"></script>
<script>
   NomadAvailabilityWidget.render('my-widget', {
      darkMode: false,
      apiUrl: 'https://api.example.com/availability'
   });
   // API shape should match internal expectation (array of vehicles with availability properties)
</script>
```

## 9. Differences vs React Version
✅ No build step  
✅ Smaller bundle  
✅ Broadest platform compatibility  
✅ Fast to update (just replace file)  
❌ Less extensible component structure  

## 10. Troubleshooting
| Symptom | Resolution |
|---------|------------|
| Widget missing | Check container ID / data attribute; verify script path (HTTP 200). |
| Styling off | Ensure no global CSS override; try dark mode toggle. |
| API data not loading | Inspect network panel; confirm CORS + JSON shape. |
| Multiple widgets collide | Load each script once; unique container selectors. |

## 11. Live Demo
Open `public/landing-page.html` for full marketing layout or `public/widget-examples.html` for isolated widget showcase.

## 12. Support
Issues / questions: support@nomadsolutions.com

---
Ship small. If a feature inflates vanilla size >10KB, consider migrating it to the React bundle instead.
