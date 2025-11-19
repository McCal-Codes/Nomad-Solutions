# Widgets Directory

This folder hosts embeddable widgets and simple HTML snippets ready for Wix/Squarespace/WordPress.

## Structure

```
public/widgets/
  availability/
    v1.0.0/
      availability-widget-simple.js    # Versioned bundle
    versions/
      v1.0.0.html                      # Minimal copy/paste HTML, live preview
  fleet/
    v1.0.0/
      fleet-widget-simple.js
    versions/
      v1.0.0.html
  pricing/
    versions/
      v1.0.0.html                      # Uses existing top-level bundle
  rv-card/
    versions/
      v1.0.0.html                      # Uses existing top-level bundle

  availability-widget-simple.js        # Legacy root bundles kept for compatibility/CI
  fleet-widget-simple.js
  pricing-widget.js
  rv-card-widget.js
```

## How to Embed (Wix recommended)

1. Wix Settings → Custom Code → Body (end): add the script once per widget type you use.
   - Availability:
     ```html
     <script src="https://your-cdn.com/widgets/availability/v1.0.0/availability-widget-simple.js"></script>
     ```
   - Fleet:
     ```html
     <script src="https://your-cdn.com/widgets/fleet/v1.0.0/fleet-widget-simple.js"></script>
     ```

2. On the page, insert an HTML Embed and paste the container only:
   - Availability:
     ```html
     <div data-nomad-widget="availability" data-dark-mode="true"></div>
     ```
   - Fleet:
     ```html
     <div data-nomad-widget="fleet" data-booking-url="/booking" data-dark-mode="false"></div>
     ```

Alternatively, copy a full minimal example from `public/widgets/<name>/versions/v1.0.0.html`.

## Versioning
- New releases add a new folder under `public/widgets/<name>/<version>/`.
- Add an HTML snippet file under `public/widgets/<name>/versions/<version>.html`.
- Keep legacy root bundles for back-compat and CI size checks.
