# Fleet Widget Changelog

All notable changes to the Nomad Solutions Fleet Widget will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-26

### Added
- Initial release of fleet display widget
- RV card grid layout with responsive design
- Loading spinner animation during data fetch
- Error handling with retry functionality
- Mock data fallback for testing (6 sample RVs)
- Desert color palette integration (#6B4C4C, #A85B5B, #D4A574, #E8DCC4, #F5EFE6)
- Vehicle specifications display (class, sleeps, length, year)
- Pricing display per week
- "View Details" links for each vehicle
- Responsive grid (1-3 columns based on screen size)
- Auto-initialization via data attributes
- Self-contained vanilla JavaScript (no dependencies)

### Features
- Displays vehicle name, image, description, and key specs
- Sleep capacity badges with desert palette styling
- Price per week prominently displayed
- Hover effects on cards and links
- Graceful error handling with user-friendly messages
- Retry button for failed requests
- Smooth loading transitions
- Mobile-optimized card layout

### Specifications Shown
- Vehicle class (Class A, B, C, Travel Trailer)
- Sleep capacity (2-6 people)
- Vehicle length (feet)
- Model year

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
