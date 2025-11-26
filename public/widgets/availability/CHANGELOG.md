# Availability Widget Changelog

All notable changes to the Nomad Solutions Availability Widget will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-26

### Added
- Initial release of availability widget
- Real-time availability checking for RV fleet
- Loading spinner animation during data fetch
- Error handling with retry functionality
- Mock data fallback for testing
- Timeout detection (10 second limit)
- Desert color palette integration (#6B4C4C, #A85B5B, #D4A574, #E8DCC4, #F5EFE6)
- Status badges (Available, Limited, Booked)
- Responsive design for mobile and desktop
- Auto-initialization via data attributes
- Self-contained vanilla JavaScript (no dependencies)

### Features
- Displays vehicle name, type, and current availability status
- Color-coded status indicators for quick scanning
- Graceful error handling with user-friendly messages
- Retry button for failed requests
- Smooth loading transitions

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
