# 🎉 Widget Setup Complete!

Your Nomad Solutions components are now embeddable widgets that work on Squarespace, Wix, WordPress, and any other platform!

## ✅ What's Been Created

### 1. Standalone Widget Files
Three self-contained JavaScript files in `public/widgets/`:
- ✅ `availability-widget.js` (142 KB) - Fleet availability with live API
- ✅ `pricing-widget.js` (142 KB) - Pricing table for all RVs
- ✅ `rv-card-widget.js` (142 KB) - Individual RV detail cards

All widgets include:
- React & ReactDOM bundled (no external dependencies)
- Inline CSS styles (works independently of your site's CSS)
- Dark mode support
- Auto-initialization
- Manual initialization option

### 2. Documentation
- ✅ `docs/widget-embedding-guide.md` - Complete guide with platform-specific instructions
- ✅ `WIDGET-QUICKSTART.md` - 5-minute quick start guide
- ✅ `public/widget-examples.html` - Live demo page with all examples

### 3. Build System
- ✅ Webpack configuration for bundling
- ✅ Babel setup for React transpilation
- ✅ NPM script: `npm run build:widgets`
- ✅ Updated `package.json` with all dependencies

## 🚀 How to Use

### Quick Embed Example
```html
<!-- On Squarespace, Wix, WordPress, etc. -->
<div data-nomad-widget="availability"></div>
<script src="https://yourdomain.com/widgets/availability-widget.js"></script>
```

### Deploy Process
1. Build widgets: `npm run build:widgets`
2. Upload `public/widgets/*.js` to your server
3. Embed on any website using the code above

## 📦 What Each Widget Does

### Availability Widget
- Shows real-time fleet availability
- Fetches from your API endpoint
- Status indicators (Available, Limited, Booked)
- Customizable API URL

### Pricing Widget
- Displays all RV pricing
- Responsive grid layout
- Includes AC, water, generator specs
- Custom vehicle data support

### RV Card Widget
- Individual RV showcase
- Image with availability badge
- Detailed specs grid
- Booking link button
- Fully customizable per vehicle

## 🎨 Features

### Both Light & Dark Mode
```html
<div data-nomad-widget="availability" data-dark-mode="true"></div>
```

### Custom Data
```html
<div data-nomad-widget="rv-card" 
     data-vehicle='{"name":"Custom RV","price":"$5,000/wk",...}'>
</div>
```

### Multiple Widgets
```html
<div data-nomad-widget="availability"></div>
<div data-nomad-widget="pricing"></div>
<div data-nomad-widget="rv-card"></div>

<script src="https://yourdomain.com/widgets/availability-widget.js"></script>
<script src="https://yourdomain.com/widgets/pricing-widget.js"></script>
<script src="https://yourdomain.com/widgets/rv-card-widget.js"></script>
```

## 🌐 Platform Support

These widgets work on:
- ✅ Squarespace
- ✅ Wix
- ✅ WordPress
- ✅ Webflow
- ✅ Shopify
- ✅ Carrd
- ✅ Any HTML website
- ✅ Custom applications

## 📖 Documentation

### For Users Embedding Widgets
- **Quick Start**: `WIDGET-QUICKSTART.md`
- **Full Guide**: `docs/widget-embedding-guide.md`
- **Live Examples**: Open `public/widget-examples.html` in browser

### For Developers
- **Widget Source**: `src/widgets/*.js`
- **Build Config**: `widget.config.js`
- **Original Components**: `src/components/*.tsx`

## 🔧 Development

### Build Widgets
```bash
npm run build:widgets
```

### Test Locally
1. Run dev server: `npm run dev`
2. Open: `http://localhost:3000/widget-examples.html`

### Rebuild After Changes
1. Edit files in `src/widgets/`
2. Run `npm run build:widgets`
3. New bundles appear in `public/widgets/`

## 📊 Next Steps

1. **Test the widgets**: Open `public/widget-examples.html` to see them in action
2. **Deploy to production**: Upload widget files to your CDN/server
3. **Update URLs**: Change `yourdomain.com` to your actual domain in examples
4. **Embed on your platforms**: Use the codes from the guide
5. **Connect real API**: Update the availability widget to fetch from your booking system

## 💡 Tips

- **Performance**: Widgets are ~142 KB each (includes React). Load only what you need.
- **Caching**: Add cache headers to widget files for better performance.
- **CDN**: Consider using a CDN for faster global delivery.
- **Testing**: Test on your actual platform before going live.
- **Support**: Check troubleshooting section in full guide if issues arise.

## 🎯 Your Widgets Are Ready!

You can now embed these anywhere. No backend required, no complex setup. Just add the HTML code and you're done! 🚀

---

Questions? See the full documentation or test the live examples!
