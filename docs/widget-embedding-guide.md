# Nomad Solutions Embeddable Widgets

This guide explains how to embed Nomad Solutions widgets on any website platform including Squarespace, Wix, WordPress, and custom sites.

## Quick Start

All widgets are self-contained and can be embedded using simple HTML. No external dependencies or configuration needed!

## Available Widgets

### 1. Availability Widget
Shows real-time fleet availability status.

### 2. Pricing Table Widget
Displays pricing for all RV options.

### 3. RV Card Widget
Shows detailed information about a specific RV.

---

## Installation Methods

### Method 1: Simple Auto-Initialize (Easiest)

Just add a container div with a data attribute and include the widget script.

#### Example - Availability Widget:
```html
<!-- Step 1: Add container -->
<div data-nomad-widget="availability" data-api-url="https://yourdomain.com/api/availability"></div>

<!-- Step 2: Load widget script (before closing </body> tag) -->
<script src="https://yourdomain.com/widgets/availability-widget.js"></script>
```

#### Example - Pricing Widget:
```html
<!-- Step 1: Add container -->
<div data-nomad-widget="pricing" data-dark-mode="false"></div>

<!-- Step 2: Load widget script -->
<script src="https://yourdomain.com/widgets/pricing-widget.js"></script>
```

#### Example - RV Card Widget:
```html
<!-- Step 1: Add container -->
<div data-nomad-widget="rv-card" data-booking-url="https://yourdomain.com/booking"></div>

<!-- Step 2: Load widget script -->
<script src="https://yourdomain.com/widgets/rv-card-widget.js"></script>
```

### Method 2: Manual Initialize (More Control)

Use JavaScript to initialize widgets programmatically.

```html
<!-- Step 1: Create container with ID -->
<div id="my-availability-widget"></div>

<!-- Step 2: Load script and initialize -->
<script src="https://yourdomain.com/widgets/availability-widget.js"></script>
<script>
  window.NomadAvailabilityWidget.init('my-availability-widget', {
    apiUrl: 'https://yourdomain.com/api/availability',
    darkMode: false
  });
</script>
```

---

## Platform-Specific Instructions

### Squarespace

1. **Navigate to your page** in edit mode
2. **Add a Code Block:**
   - Click where you want the widget
   - Click (+) to add a block
   - Select "Code" from the block menu
3. **Paste widget code:**
   ```html
   <div data-nomad-widget="availability"></div>
   <script src="https://yourdomain.com/widgets/availability-widget.js"></script>
   ```
4. **Click "Apply"** and save the page

**Pro Tip:** For multiple widgets on one page, include the script only once at the bottom.

### Wix

1. **Go to your page** in the Wix Editor
2. **Add an Embed element:**
   - Click (+) on the left sidebar
   - Select "Embed" → "Custom Embeds" → "Embed a Widget"
3. **Paste widget code:**
   ```html
   <div data-nomad-widget="pricing"></div>
   <script src="https://yourdomain.com/widgets/pricing-widget.js"></script>
   ```
4. **Click "Update"** and publish

**Alternative:** Use the "HTML iframe" option for more control.

### WordPress

1. **Edit your page/post** in WordPress
2. **Add a Custom HTML block:**
   - Click (+) to add a block
   - Search for "Custom HTML"
3. **Paste widget code:**
   ```html
   <div data-nomad-widget="rv-card"></div>
   <script src="https://yourdomain.com/widgets/rv-card-widget.js"></script>
   ```
4. **Publish or Update** the page

### Webflow

1. **Add an Embed element:**
   - Drag "Embed" from the Add panel
2. **Paste widget code**
3. **Publish** the site

### Custom HTML Sites

Simply add the widget code anywhere in your HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Site</title>
</head>
<body>
  <h1>Check Our Fleet</h1>
  
  <!-- Widget goes here -->
  <div data-nomad-widget="availability"></div>
  
  <!-- Script before closing body tag -->
  <script src="https://yourdomain.com/widgets/availability-widget.js"></script>
</body>
</html>
```

---

## Widget Options

### Availability Widget
```html
<div 
  data-nomad-widget="availability"
  data-api-url="https://yourdomain.com/api/availability"
  data-dark-mode="false"
></div>
```

**Options:**
- `data-api-url`: URL to fetch availability data (optional, defaults to `/api/availability`)
- `data-dark-mode`: Enable dark theme (`true` or `false`)

### Pricing Widget
```html
<div 
  data-nomad-widget="pricing"
  data-dark-mode="false"
></div>
```

**Options:**
- `data-dark-mode`: Enable dark theme (`true` or `false`)
- `data-vehicles`: JSON string with custom vehicle data (optional)

### RV Card Widget
```html
<div 
  data-nomad-widget="rv-card"
  data-booking-url="/booking"
  data-dark-mode="false"
></div>
```

**Options:**
- `data-booking-url`: URL for the "Reserve spot" button
- `data-dark-mode`: Enable dark theme (`true` or `false`)
- `data-vehicle`: JSON string with vehicle data (optional)

---

## Advanced: Custom Data

### Passing Custom Vehicle Data

You can pass custom data to widgets using JSON in data attributes:

```html
<div 
  data-nomad-widget="rv-card"
  data-vehicle='{"name":"Custom RV","price":"$5,000/wk","sleep":"6","ac":"3-zone","water":"100 gal","dustProofing":"Ultimate","pickup":"Las Vegas","image":"/path/to/image.jpg","availability":"Limited","description":"Luxury RV with all amenities"}'
></div>
<script src="https://yourdomain.com/widgets/rv-card-widget.js"></script>
```

---

## Styling & Customization

### Dark Mode

Enable dark mode by adding `data-dark-mode="true"`:

```html
<div data-nomad-widget="availability" data-dark-mode="true"></div>
```

### Custom CSS

Override widget styles by adding custom CSS after the widget loads:

```html
<style>
  .nomad-widget {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .nomad-widget-title {
    color: #d97706 !important;
  }
</style>
```

---

## Multiple Widgets on One Page

You can embed multiple widgets on the same page. Load each script once:

```html
<!-- Availability Widget -->
<div data-nomad-widget="availability"></div>

<!-- Pricing Widget -->
<div data-nomad-widget="pricing"></div>

<!-- RV Card Widget -->
<div data-nomad-widget="rv-card"></div>

<!-- Load all scripts at the bottom -->
<script src="https://yourdomain.com/widgets/availability-widget.js"></script>
<script src="https://yourdomain.com/widgets/pricing-widget.js"></script>
<script src="https://yourdomain.com/widgets/rv-card-widget.js"></script>
```

---

## Building Widgets

To build the widget files for deployment:

```bash
# Install dependencies
npm install

# Build widgets
npm run build:widgets
```

This creates optimized widget files in `public/widgets/`:
- `availability-widget.js`
- `pricing-widget.js`
- `rv-card-widget.js`

---

## Troubleshooting

### Widget not showing up?

1. **Check console for errors** (F12 → Console tab)
2. **Verify script URL** is correct and accessible
3. **Ensure container element exists** before script loads
4. **Try manual initialization** method instead

### Widget looks broken?

1. **Check for CSS conflicts** from your site's theme
2. **Try dark mode** if colors look off: `data-dark-mode="true"`
3. **Verify data format** if passing custom JSON

### API not loading?

1. **Check `data-api-url`** is correct
2. **Verify CORS headers** allow requests from your domain
3. **Check browser console** for network errors

---

## Support

For issues or questions, contact support@nomadsolutions.com

## License

© 2025 Nomad Solutions NV. All rights reserved.
