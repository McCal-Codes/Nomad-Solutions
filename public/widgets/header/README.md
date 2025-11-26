# Nomad Solutions - Header Widget

Version: 1.0.0

## Overview

The Header Widget provides sticky navigation for the Nomad Solutions website. Features a desert gradient design, responsive mobile menu, and optional contact bar. Built as a self-contained widget for easy integration into Squarespace, Wix, WordPress, or any custom site.

## Features

- ✅ Sticky header (stays at top while scrolling)
- ✅ Desert gradient background matching branding
- ✅ Desktop horizontal navigation with hover effects
- ✅ Mobile hamburger menu with smooth animations
- ✅ Anchor link support for smooth scrolling
- ✅ Optional top contact bar (phone/email)
- ✅ Click-outside-to-close for mobile menu
- ✅ Unique naming to prevent conflicts
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Self-contained (HTML + CSS + JS in one file)
- ✅ No external dependencies

## Installation

### Squarespace Installation (Recommended)

1. Go to **Settings** → **Advanced** → **Code Injection**
2. Paste the entire contents of `header-widget.html` into the **Header** section
3. Click **Save**

The header will now appear on all pages of your Squarespace site.

### Wix Installation

1. Add an **HTML iframe** element to your page
2. Click **Enter Code**
3. Paste the entire contents of `header-widget.html`
4. Adjust height to approximately 120px (or 180px if using contact bar)
5. Make the element sticky using Wix editor settings

### WordPress Installation

1. Go to **Appearance** → **Theme Editor** (or use a custom HTML block)
2. Add a **Custom HTML** block at the top of your page
3. Paste the entire contents of `header-widget.html`
4. Save/Publish

### Custom HTML Site

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Your head content -->
</head>
<body>
  
  <!-- Paste header-widget.html content here -->
  
  <!-- Rest of your page content -->
  
</body>
</html>
```

## Navigation Links

The header includes these navigation links (all are anchor links):

- **Fleet** → `#fleet`
- **Features** → `#features`
- **About** → `#about`
- **Contact** → `#contact`
- **Availability** → `#availability`

### Customizing Links

To change navigation links, edit the `<ul class="nav-links">` section:

```html
<ul class="nav-links" id="nomadNavLinks">
  <li><a href="#fleet">Fleet</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#availability">Availability</a></li>
</ul>
```

Change to full page URLs if needed:

```html
<li><a href="/fleet">Fleet</a></li>
<li><a href="/about">About</a></li>
```

## Contact Bar (Optional)

The header includes an optional contact bar at the top. To remove it, delete this section:

```html
<!-- Optional: Top Contact Bar (delete this section if not needed) -->
<div class="nomad-top-contact">
  <div class="bar">
    <span>Reno, NV • Serving Black Rock City and beyond</span>
    <span>
      <a href="tel:+17753998621">(775) 399-8621</a>
      &nbsp;•&nbsp;
      <a href="mailto:hello@nomadsols.com">hello@nomadsols.com</a>
    </span>
  </div>
</div>
```

To customize contact info:

```html
<a href="tel:+1234567890">(123) 456-7890</a>
<a href="mailto:your@email.com">your@email.com</a>
```

## Styling

### CSS Classes

- `.nomad-header` - Main header container
- `.logo` - Logo text/link
- `.nav-links` - Navigation menu list
- `.mobile-menu-toggle` - Hamburger button
- `.nomad-top-contact` - Optional contact bar

### Color Palette

- Dark Brown: `#6B4C4C` (gradient start, contact bar)
- Terracotta: `#A85B5B` (gradient end)
- Warm Tan: `#D4A574` (hover effects, contact links)
- Cream: `#F5EFE6` (contact bar text)
- White: `#ffffff` (nav text)

### Customization Examples

**Change logo text:**
```html
<a href="/" class="logo">🏜️ Your Company Name</a>
```

**Change gradient colors:**
```css
.nomad-header {
  background: linear-gradient(135deg, #yourcolor1 0%, #yourcolor2 100%);
}
```

**Adjust sticky position:**
```css
.nomad-header {
  position: sticky;
  top: 50px; /* offset from top */
}
```

**Change mobile breakpoint:**
```css
@media (max-width: 1024px) { /* was 768px */
  /* mobile styles */
}
```

## JavaScript Functions

### toggleNomadMenu()
Toggles the mobile menu visibility. Called by hamburger button click.

```javascript
function toggleNomadMenu() {
  const navLinks = document.getElementById('nomadNavLinks');
  navLinks.classList.toggle('active');
}
```

### Click Outside Handler
Automatically closes mobile menu when clicking outside the header.

### Link Click Handler
Automatically closes mobile menu when a navigation link is clicked.

## Responsive Behavior

### Desktop (>768px)
- Horizontal navigation menu
- Hover effects with underline animation
- Full-width contact bar (if enabled)

### Mobile (≤768px)
- Hamburger menu button (☰)
- Slide-down navigation menu
- Stacked contact bar layout
- Tap to open/close menu

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- iOS Safari 14+
- Chrome Mobile

## Troubleshooting

**Header not appearing:**
- Check that the code is properly pasted
- Verify no JavaScript errors in browser console
- Ensure the code is in the header/top of page

**Sticky not working:**
- Check parent container doesn't have `overflow: hidden`
- Verify `position: sticky` is supported in your browser
- Try adding `top: 0` explicitly

**Mobile menu not toggling:**
- Check browser console for JavaScript errors
- Verify `nomadNavLinks` ID matches in HTML and JS
- Ensure no other scripts are interfering

**Conflicts with Squarespace:**
- All IDs and function names are prefixed with `nomad` or unique
- If conflicts occur, rename functions and IDs throughout the file
- Check Squarespace Custom CSS isn't overriding styles

**Links not working:**
- Verify anchor IDs exist on target sections: `<section id="fleet">`
- Check smooth scroll is enabled: `html { scroll-behavior: smooth; }`
- For full page links, use absolute paths: `/fleet` not `#fleet`

**Styling issues:**
- All styles are inline to avoid conflicts
- Use `!important` if you need to override from external CSS
- Check browser inspector to see what styles are being applied

## Version History

See [CHANGELOG.md](./CHANGELOG.md) for detailed version history.

## Support

For issues or questions:
- Email: hello@nomadsols.com
- Phone: (775) 399-8621

## License

Copyright © 2025 Nomad Solutions NV. All rights reserved.
