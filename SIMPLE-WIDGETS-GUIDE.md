# Simple HTML Widgets for Wix, Squarespace, and Any Platform

## ✨ Pure HTML/CSS/JavaScript - No Build Step Required!

These widgets are ready to use immediately. Just copy and paste the code into any website builder.

## 🚀 Quick Start

### Option 1: Copy & Paste (Easiest for Wix/Squarespace)

#### Availability Widget:
```html
<div id="nomad-availability-widget"></div>
<script src="https://yourdomain.com/widgets/availability-widget-simple.js"></script>
```

#### Fleet Widget:
```html
<div id="nomad-fleet-widget"></div>
<script src="https://yourdomain.com/widgets/fleet-widget-simple.js"></script>
```

### Option 2: Data Attribute (Auto-initialize)

```html
<div data-nomad-widget="availability"></div>
<script src="https://yourdomain.com/widgets/availability-widget-simple.js"></script>
```

## 📦 Platform-Specific Instructions

### Wix

1. **Add an HTML iframe element:**
   - Click (+) → Embed → "Embed HTML"
   - Or: Add → Embed Code → "Custom Element"

2. **Paste this code:**
```html
<div id="nomad-availability-widget"></div>
<script src="https://yourdomain.com/widgets/availability-widget-simple.js"></script>
```

3. **Adjust size** of the embed element to fit the widget

4. **Publish** your site

**Important for Wix:** Use the iframe/embed method, not inline code blocks.

### Squarespace

1. **Add a Code Block:**
   - Edit page → Click (+) → Select "Code"

2. **Paste the widget code:**
```html
<div id="nomad-availability-widget"></div>
<script src="https://yourdomain.com/widgets/availability-widget-simple.js"></script>
```

3. **Click "Apply"** and save

### WordPress

1. **Add Custom HTML Block:**
   - Click (+) → Search "Custom HTML"

2. **Paste the code**

3. **Preview and Publish**

### Webflow

1. **Add Embed element**

2. **Paste widget code**

3. **Publish**

## 🎨 Customization Options

### Dark Mode

```html
<div data-nomad-widget="availability" data-dark-mode="true"></div>
<script src="https://yourdomain.com/widgets/availability-widget-simple.js"></script>
```

### Custom API URL

```html
<div data-nomad-widget="availability" data-api-url="https://api.yourdomain.com/availability"></div>
<script src="https://yourdomain.com/widgets/availability-widget-simple.js"></script>
```

### Custom Booking Link

```html
<div data-nomad-widget="fleet" data-booking-url="https://yourdomain.com/book"></div>
<script src="https://yourdomain.com/widgets/fleet-widget-simple.js"></script>
```

## 📱 Responsive Design

All widgets are fully responsive and work on:
- ✅ Desktop
- ✅ Tablet
- ✅ Mobile

## 🔧 Advanced Usage

### Manual Initialization

```html
<div id="my-widget"></div>
<script src="https://yourdomain.com/widgets/availability-widget-simple.js"></script>
<script>
  // Initialize manually with custom options
  NomadAvailabilityWidget.render('my-widget', {
    darkMode: false,
    apiUrl: 'https://api.example.com/availability'
  });
</script>
```

### Multiple Widgets

```html
<!-- Widget 1 -->
<div data-nomad-widget="availability"></div>

<!-- Widget 2 -->
<div data-nomad-widget="fleet"></div>

<!-- Load scripts (only once each) -->
<script src="https://yourdomain.com/widgets/availability-widget-simple.js"></script>
<script src="https://yourdomain.com/widgets/fleet-widget-simple.js"></script>
```

## 📄 Available Widget Files

Located in `public/widgets/`:
- **availability-widget-simple.js** - Fleet availability display
- **fleet-widget-simple.js** - Full fleet showcase with cards

## 🌐 What's Different from React Version?

✅ **No build step** - Use directly  
✅ **Smaller file size** - Pure vanilla JS  
✅ **Better compatibility** - Works in any HTML environment  
✅ **Instant updates** - Edit and deploy immediately  

## 💡 Tips for Wix

- Use the "Embed HTML" element (not code injection)
- Set a fixed height for the embed container
- Test in preview mode before publishing
- For multiple pages, embed on each page separately

## 💡 Tips for Squarespace

- Code blocks work in any content area
- Widgets inherit your site's font by default
- Use dark mode if your site has a dark background
- Add spacing blocks above/below for layout

## 🎯 Live Demo

Open `public/landing-page.html` to see the widgets in action on a full landing page.

## ❓ Troubleshooting

**Widget not showing?**
- Check browser console for errors (F12)
- Verify script URL is accessible
- Make sure the container element has an ID or data attribute

**Styling looks off?**
- Try dark mode: `data-dark-mode="true"`
- Check for CSS conflicts from your theme
- Ensure the widget container has enough space

**Multiple widgets conflicting?**
- Load each script file only once per page
- Use unique IDs for each widget container

## 📞 Support

For questions or issues: support@nomadsolutions.com

---

**These widgets require zero configuration and work out of the box!** 🎉
