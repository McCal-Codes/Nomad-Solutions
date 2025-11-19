# Widget Quick Start 🚀

Get your Nomad Solutions widgets embedded in 5 minutes!

## Step 1: Build the Widgets

```bash
npm install
npm run build:widgets
```

This creates three files in `public/widgets/`:
- `availability-widget.js`
- `pricing-widget.js`
- `rv-card-widget.js`

## Step 2: Deploy Widget Files

Upload the widget files from `public/widgets/` to your production server. They should be accessible at:
- `https://yourdomain.com/widgets/availability-widget.js`
- `https://yourdomain.com/widgets/pricing-widget.js`
- `https://yourdomain.com/widgets/rv-card-widget.js`

## Step 3: Embed on Your Platform

### Squarespace
1. Edit your page
2. Add a "Code Block"
3. Paste this code:
```html
<div data-nomad-widget="availability"></div>
<script src="https://yourdomain.com/widgets/availability-widget.js"></script>
```
4. Save and publish

### Wix
1. Add an "Embed a Widget" element
2. Paste the same code as above
3. Update and publish

### WordPress
1. Add a "Custom HTML" block
2. Paste the code
3. Publish

### Any Other Platform
Just add the HTML code wherever you want the widget to appear!

## Customization

### Dark Mode
```html
<div data-nomad-widget="availability" data-dark-mode="true"></div>
```

### Custom API URL
```html
<div data-nomad-widget="availability" data-api-url="https://api.yourdomain.com/availability"></div>
```

### Multiple Widgets
```html
<div data-nomad-widget="availability"></div>
<div data-nomad-widget="pricing"></div>
<div data-nomad-widget="rv-card"></div>

<!-- Load scripts at bottom -->
<script src="https://yourdomain.com/widgets/availability-widget.js"></script>
<script src="https://yourdomain.com/widgets/pricing-widget.js"></script>
<script src="https://yourdomain.com/widgets/rv-card-widget.js"></script>
```

## Test Locally

Open `public/widget-examples.html` in your browser to see all widgets in action with example code.

## Full Documentation

See `docs/widget-embedding-guide.md` for:
- Complete platform guides (Squarespace, Wix, WordPress, Webflow)
- Advanced customization options
- Custom data passing
- Troubleshooting
- API integration details

## Need Help?

Check the troubleshooting section in the full guide or contact support.
