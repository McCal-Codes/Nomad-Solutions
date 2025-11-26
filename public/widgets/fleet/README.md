# Nomad Solutions - Fleet Widget

Version: 1.0.0

## Overview

The Fleet Widget displays the Nomad Solutions RV fleet in an attractive card grid layout. Each card shows vehicle details, specifications, pricing, and a link to view more information. Built with vanilla JavaScript for easy integration into any website.

## Features

- ✅ Responsive card grid layout (1-3 columns)
- ✅ Vehicle images with fallback placeholders
- ✅ Key specifications (class, sleeps, length, year)
- ✅ Weekly pricing display
- ✅ Loading states with spinner animation
- ✅ Error handling with retry functionality
- ✅ Desert color palette matching Nomad Solutions branding
- ✅ Hover effects and smooth transitions
- ✅ No external dependencies
- ✅ Auto-initialization
- ✅ Mobile-optimized design

## Installation

### Option 1: Direct Script Include (Recommended for Squarespace/Wix)

```html
<!-- Add this where you want the widget to appear -->
<div id="nomad-fleet-widget"></div>

<!-- Add this script at the bottom of your page or in a code block -->
<script src="https://yourdomain.com/widgets/fleet/fleet-widget-simple.js"></script>
```

### Option 2: Manual Integration

1. Copy `fleet-widget-simple.js` to your website
2. Add the mount point div: `<div id="nomad-fleet-widget"></div>`
3. Include the script: `<script src="path/to/fleet-widget-simple.js"></script>`

## Usage

The widget automatically initializes when the page loads. It will:

1. Display a loading spinner while fetching data
2. Show vehicle cards in a responsive grid
3. Handle errors gracefully with retry option
4. Use mock data if the API is unavailable

## Configuration

### Custom Mount Point

By default, the widget mounts to `#nomad-fleet-widget`. To use a different element:

```javascript
// In your custom script after loading fleet-widget-simple.js
if (window.NomadFleet) {
  window.NomadFleet.init('your-custom-id');
}
```

### API Endpoint

The widget fetches data from `/api/fleet`. To change this:

```javascript
// Modify the fetch URL in fleet-widget-simple.js, line ~220
fetch('https://your-api-endpoint.com/fleet')
```

### Custom Detail Links

Vehicle detail links default to `/fleet/{id}`. To customize:

```javascript
// Modify the renderCard function in fleet-widget-simple.js
<a href="/your-custom-path/${rv.id}" class="nomad-rv-link">View Details →</a>
```

## Styling

The widget uses these CSS classes (all styles are inline):

- `.nomad-fleet-container` - Main container
- `.nomad-fleet-grid` - Card grid wrapper
- `.nomad-rv-card` - Individual vehicle card
- `.nomad-rv-image` - Vehicle image
- `.nomad-rv-content` - Card content wrapper
- `.nomad-rv-name` - Vehicle name
- `.nomad-rv-sleep` - Sleep capacity badge
- `.nomad-rv-description` - Vehicle description
- `.nomad-rv-specs` - Specifications grid
- `.nomad-rv-spec` - Individual spec item
- `.nomad-rv-price` - Price display
- `.nomad-rv-link` - View details link
- `.nomad-fleet-spinner` - Loading spinner
- `.nomad-fleet-error` - Error message container

### Color Palette

- Dark Brown: `#6B4C4C` (text, headers)
- Terracotta: `#A85B5B` (prices, spinner)
- Warm Tan: `#D4A574` (badges, hover states)
- Tan: `#E8DCC4` (card backgrounds)
- Cream: `#F5EFE6` (spec backgrounds)

### Responsive Breakpoints

- Desktop (>1024px): 3 columns
- Tablet (768px-1024px): 2 columns
- Mobile (<768px): 1 column

## API Response Format

The widget expects this JSON structure:

```json
{
  "vehicles": [
    {
      "id": "rv-001",
      "name": "Desert Cruiser",
      "image": "/images/rv-001.jpg",
      "description": "Luxury Class A motorhome...",
      "class": "Class A",
      "sleeps": 6,
      "length": "35 ft",
      "year": 2023,
      "pricePerWeek": 2800
    }
  ]
}
```

## Mock Data

If the API is unavailable, the widget displays 6 sample vehicles:
- Desert Cruiser (Class A, 6 sleeps, $2,800/week)
- Playa Explorer (Class C, 4 sleeps, $1,800/week)
- Nomad Compact (Class B, 2 sleeps, $1,200/week)
- Family Hauler (Class A, 6 sleeps, $2,500/week)
- Adventure Seeker (Travel Trailer, 4 sleeps, $1,500/week)
- Cozy Camper (Class B, 2 sleeps, $1,000/week)

## Troubleshooting

**Widget not appearing:**
- Check that the mount point div exists: `<div id="nomad-fleet-widget"></div>`
- Verify the script is loading (check browser console for errors)
- Ensure the script runs after the DOM is loaded

**Images not loading:**
- Verify image paths are correct in API response
- Check CORS settings if images are on different domain
- Widget will show placeholder if image fails to load

**API errors:**
- The widget will automatically show mock data if the API fails
- Check browser console for network errors
- Verify CORS settings if using external API

**Styling conflicts:**
- All widget styles are scoped with `.nomad-` prefix
- Inline styles take precedence to avoid conflicts
- Use `!important` in your CSS if you need to override

**Card layout issues:**
- Widget uses CSS Grid with auto-fit
- Minimum card width is 320px
- Check parent container width if cards aren't displaying properly

## Customization Examples

### Change number of columns on desktop:

```css
.nomad-fleet-grid {
  grid-template-columns: repeat(4, 1fr) !important;
}
```

### Adjust card spacing:

```css
.nomad-fleet-grid {
  gap: 40px !important;
}
```

### Custom card hover effect:

```css
.nomad-rv-card:hover {
  transform: translateY(-8px) !important;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2) !important;
}
```

## Version History

See [CHANGELOG.md](./CHANGELOG.md) for detailed version history.

## Support

For issues or questions:
- Email: hello@nomadsols.com
- Phone: (775) 399-8621

## License

Copyright © 2025 Nomad Solutions NV. All rights reserved.
