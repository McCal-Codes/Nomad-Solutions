# Nomad Solutions - Availability Widget

Version: 1.0.0

## Overview

The Availability Widget displays real-time availability status for the Nomad Solutions RV fleet. Built with vanilla JavaScript for easy integration into any website, including Squarespace, Wix, and custom sites.

## Features

- ✅ Real-time availability checking
- ✅ Loading states with spinner animation
- ✅ Error handling with retry functionality
- ✅ Desert color palette matching Nomad Solutions branding
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ No external dependencies
- ✅ Auto-initialization
- ✅ Timeout protection (10 seconds)

## Installation

### Option 1: Direct Script Include (Recommended for Squarespace/Wix)

```html
<!-- Add this where you want the widget to appear -->
<div id="nomad-availability-widget"></div>

<!-- Add this script at the bottom of your page or in a code block -->
<script src="https://yourdomain.com/widgets/availability/availability-widget-simple.js"></script>
```

### Option 2: Manual Integration

1. Copy `availability-widget-simple.js` to your website
2. Add the mount point div: `<div id="nomad-availability-widget"></div>`
3. Include the script: `<script src="path/to/availability-widget-simple.js"></script>`

## Usage

The widget automatically initializes when the page loads. It will:

1. Display a loading spinner while fetching data
2. Show the availability list with color-coded status badges
3. Handle errors gracefully with retry option
4. Use mock data if the API is unavailable

## Configuration

### Custom Mount Point

By default, the widget mounts to `#nomad-availability-widget`. To use a different element:

```javascript
// In your custom script after loading availability-widget-simple.js
if (window.NomadAvailability) {
  window.NomadAvailability.init('your-custom-id');
}
```

### API Endpoint

The widget fetches data from `/api/availability`. To change this:

```javascript
// Modify the fetch URL in availability-widget-simple.js, line ~120
fetch('https://your-api-endpoint.com/availability')
```

## Styling

The widget uses these CSS classes (all styles are inline):

- `.nomad-availability-widget` - Main container
- `.nomad-availability-header` - Widget header
- `.nomad-availability-list` - Vehicle list container
- `.nomad-availability-item` - Individual vehicle row
- `.nomad-availability-status` - Status badge
- `.nomad-availability-spinner` - Loading spinner
- `.nomad-availability-error` - Error message container

### Color Palette

- Dark Brown: `#6B4C4C` (text, headers)
- Terracotta: `#A85B5B` (accents, spinner)
- Warm Tan: `#D4A574` (status badges)
- Tan: `#E8DCC4` (backgrounds)
- Cream: `#F5EFE6` (light backgrounds)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## API Response Format

The widget expects this JSON structure:

```json
{
  "vehicles": [
    {
      "id": "rv-001",
      "name": "Desert Cruiser",
      "type": "Class A Motorhome",
      "status": "available"
    }
  ]
}
```

Status values: `"available"`, `"limited"`, `"booked"`

## Troubleshooting

**Widget not appearing:**
- Check that the mount point div exists: `<div id="nomad-availability-widget"></div>`
- Verify the script is loading (check browser console for errors)
- Ensure the script runs after the DOM is loaded

**API errors:**
- The widget will automatically show mock data if the API fails
- Check browser console for network errors
- Verify CORS settings if using external API

**Styling conflicts:**
- All widget styles are scoped with `.nomad-` prefix
- Inline styles take precedence to avoid conflicts
- Use `!important` in your CSS if you need to override

## Version History

See [CHANGELOG.md](./CHANGELOG.md) for detailed version history.

## Support

For issues or questions:
- Email: hello@nomadsols.com
- Phone: (775) 399-8621

## License

Copyright © 2025 Nomad Solutions NV. All rights reserved.
