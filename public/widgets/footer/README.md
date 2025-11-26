# Nomad Solutions - Footer Widget

Version: 1.0.0

## Overview

The Footer Widget provides a comprehensive site footer with company information, quick links, contact details, and locations. Features a responsive four-column layout with desert color palette. Built as a self-contained widget for easy integration into Squarespace, Wix, WordPress, or any custom site.

## Features

- ✅ Four-column responsive grid layout
- ✅ Company information and description
- ✅ Quick links navigation
- ✅ Contact information (email, phone, hours)
- ✅ Service locations
- ✅ Copyright notice with current year
- ✅ Desert color palette matching branding
- ✅ Hover effects on links
- ✅ Fully responsive (stacks on mobile)
- ✅ Self-contained (HTML + CSS in one file)
- ✅ No JavaScript required
- ✅ No external dependencies

## Installation

### Squarespace Installation (Recommended)

1. Go to **Settings** → **Advanced** → **Code Injection**
2. Paste the entire contents of `footer-widget.html` into the **Footer** section
3. Click **Save**

The footer will now appear on all pages of your Squarespace site.

### Wix Installation

1. Add an **HTML iframe** element to the bottom of your page
2. Click **Enter Code**
3. Paste the entire contents of `footer-widget.html`
4. Adjust height to approximately 400px (or auto)
5. Set to full width

### WordPress Installation

1. Go to **Appearance** → **Theme Editor** (or use a custom HTML block)
2. Add a **Custom HTML** block at the bottom of your page/template
3. Paste the entire contents of `footer-widget.html`
4. Save/Publish

### Custom HTML Site

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Your head content -->
</head>
<body>
  
  <!-- Your page content -->
  
  <!-- Paste footer-widget.html content here -->
  
</body>
</html>
```

## Content Sections

### 1. Nomad Solutions (Company Info)
Company name and tagline describing the service.

```html
<div class="footer-section">
  <h3>Nomad Solutions</h3>
  <p>Premium Burning Man RV rentals with comprehensive dust-proofing and 24/7 support.</p>
</div>
```

### 2. Quick Links (Navigation)
Main site navigation shortcuts (anchor links).

```html
<div class="footer-section">
  <h3>Quick Links</h3>
  <ul>
    <li><a href="#fleet">Our Fleet</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#availability">Check Availability</a></li>
    <li><a href="#about">About</a></li>
  </ul>
</div>
```

### 3. Contact (Contact Information)
Email, phone, and business hours.

```html
<div class="footer-section">
  <h3>Contact</h3>
  <ul>
    <li>Email: <a href="mailto:hello@nomadsols.com">hello@nomadsols.com</a></li>
    <li>Phone: <a href="tel:+17753998621">(775) 399-8621</a></li>
    <li>Hours: Mon–Fri 9am–6pm PT</li>
  </ul>
</div>
```

### 4. Locations (Service Areas)
Geographic service areas.

```html
<div class="footer-section">
  <h3>Locations</h3>
  <ul>
    <li>Reno, Nevada</li>
    <li>Las Vegas, Nevada</li>
  </ul>
</div>
```

### 5. Copyright Bar
Bottom bar with copyright notice.

```html
<div class="footer-bottom">
  <p>&copy; 2025 Nomad Solutions NV. All rights reserved.</p>
</div>
```

## Customization

### Update Contact Information

```html
<!-- Email -->
<a href="mailto:your@email.com">your@email.com</a>

<!-- Phone -->
<a href="tel:+1234567890">(123) 456-7890</a>

<!-- Business Hours -->
<li>Hours: Your business hours here</li>
```

### Update Company Description

```html
<p>Your company description here...</p>
```

### Update Locations

```html
<ul>
  <li>Your City, State</li>
  <li>Another City, State</li>
  <li>Add more as needed</li>
</ul>
```

### Update Quick Links

Change anchor links to full page URLs if needed:

```html
<li><a href="/fleet">Our Fleet</a></li>
<li><a href="/about">About</a></li>
```

Or add more links:

```html
<li><a href="#faq">FAQ</a></li>
<li><a href="#blog">Blog</a></li>
```

### Update Copyright Year

```html
<p>&copy; 2025 Your Company Name. All rights reserved.</p>
```

## Styling

### CSS Classes

- `.nomad-footer` - Main footer container
- `.footer-content` - Grid container for sections
- `.footer-section` - Individual column/section
- `.footer-bottom` - Copyright bar

### Color Palette

- Dark Brown: `#6B4C4C` (background)
- Warm Tan: `#D4A574` (headings)
- Light Gray: `#d1d5db` (text, links)
- Darker Gray: `#a1a1aa` (copyright text)
- White: `#ffffff` (link hover color)

### Layout

**Desktop (>768px):**
- 4 columns with auto-fit grid
- 56px gap between columns
- 250px minimum column width

**Mobile (≤768px):**
- Single column stacked layout
- 40px gap between sections
- 60px top padding (reduced from 80px)

### Customization Examples

**Change background color:**
```css
footer.nomad-footer {
  background: #your-color !important;
}
```

**Change heading color:**
```css
.nomad-footer .footer-section h3 {
  color: #your-color !important;
}
```

**Adjust spacing:**
```css
.nomad-footer .footer-content {
  gap: 70px !important; /* default: 56px */
}
```

**Change grid columns:**
```css
.nomad-footer .footer-content {
  grid-template-columns: repeat(3, 1fr) !important; /* 3 columns instead of 4 */
}
```

**Remove copyright border:**
```css
.nomad-footer .footer-bottom {
  border-top: none !important;
}
```

## Accessibility

- Semantic `<footer>` element with `role="contentinfo"`
- Email and phone links are properly formatted with `mailto:` and `tel:`
- Clear hierarchy with `<h3>` headings for each section
- Unordered lists for link groups
- Sufficient color contrast for readability

## Responsive Behavior

### Desktop (>768px)
- Four-column grid layout
- 56px gap between columns
- Full padding (80px top)

### Mobile (≤768px)
- Single column stacked layout
- 40px gap between sections
- Reduced padding (60px top)
- Full-width sections

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- iOS Safari 14+
- Chrome Mobile

## Troubleshooting

**Footer not appearing:**
- Check that the code is properly pasted
- Verify no CSS errors in browser console
- Ensure the code is at the bottom of your page

**Links not working:**
- For anchor links, verify IDs exist on target sections: `<section id="fleet">`
- For email/phone, ensure proper href format: `mailto:` and `tel:`
- Check for typos in href attributes

**Layout not responsive:**
- Verify CSS Grid is supported in your browser
- Check parent container isn't constraining width
- Inspect with browser dev tools to see applied styles

**Styling conflicts:**
- All styles are scoped with `.nomad-footer` class
- Use `!important` if you need to override from external CSS
- Check browser inspector to see what styles are being applied

**Columns not aligning:**
- Ensure all `.footer-section` divs are direct children of `.footer-content`
- Check for extra wrapper elements that might break the grid
- Verify minimum column width (250px) fits within container

**Gap too large/small:**
- Adjust `gap` property in `.footer-content` styles
- Use responsive values: `gap: 40px;` for mobile, `gap: 56px;` for desktop

## Adding Social Media Links

To add social media icons/links, add a new section:

```html
<div class="footer-section">
  <h3>Follow Us</h3>
  <ul>
    <li><a href="https://facebook.com/yourpage">Facebook</a></li>
    <li><a href="https://instagram.com/yourpage">Instagram</a></li>
    <li><a href="https://twitter.com/yourpage">Twitter</a></li>
  </ul>
</div>
```

## Version History

See [CHANGELOG.md](./CHANGELOG.md) for detailed version history.

## Support

For issues or questions:
- Email: hello@nomadsols.com
- Phone: (775) 399-8621

## License

Copyright © 2025 Nomad Solutions NV. All rights reserved.
