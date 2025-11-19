import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Widget Test Page | Nomad Solutions',
  description: 'Test page for embeddable widgets',
};

export default function WidgetTestPage() {
  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '16px' }}>Widget Test Page</h1>
      <p style={{ marginBottom: '32px', color: '#666' }}>
        This page demonstrates the widgets using the original Next.js components. 
        For the standalone embeddable versions, open <code>/widget-examples.html</code>.
      </p>

      <div style={{ marginBottom: '32px', padding: '20px', background: '#f5f5f5', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '8px' }}>📦 Standalone Widget Files</h2>
        <p style={{ marginBottom: '12px' }}>Built and ready at:</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>✅ <code>/widgets/availability-widget.js</code></li>
          <li>✅ <code>/widgets/pricing-widget.js</code></li>
          <li>✅ <code>/widgets/rv-card-widget.js</code></li>
        </ul>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>🔗 Quick Links</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a 
            href="/widget-examples.html" 
            target="_blank"
            style={{ 
              padding: '12px 24px', 
              background: '#d97706', 
              color: 'white', 
              borderRadius: '8px', 
              textDecoration: 'none',
              fontWeight: 600 
            }}
          >
            View Live Widget Examples
          </a>
          <a 
            href="/fleet" 
            style={{ 
              padding: '12px 24px', 
              background: '#1a1a1a', 
              color: 'white', 
              borderRadius: '8px', 
              textDecoration: 'none',
              fontWeight: 600 
            }}
          >
            View Fleet Page
          </a>
        </div>
      </div>

      <div style={{ marginBottom: '32px', padding: '20px', background: '#e7f5ff', borderRadius: '8px', border: '2px solid #1971c2' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>📖 Documentation</h2>
        <ul>
          <li><strong>Quick Start:</strong> <code>WIDGET-QUICKSTART.md</code></li>
          <li><strong>Full Guide:</strong> <code>docs/widget-embedding-guide.md</code></li>
          <li><strong>Setup Complete:</strong> <code>SETUP-COMPLETE.md</code></li>
        </ul>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>🎯 Example Embed Code</h2>
        <p style={{ marginBottom: '12px' }}>Copy this code and paste it on Squarespace, Wix, WordPress, etc:</p>
        <pre style={{ 
          background: '#1a1a1a', 
          color: '#10b981', 
          padding: '20px', 
          borderRadius: '8px', 
          overflow: 'auto',
          fontSize: '14px'
        }}>
{`<!-- Add this where you want the widget -->
<div data-nomad-widget="availability"></div>

<!-- Add this script before closing </body> tag -->
<script src="https://yourdomain.com/widgets/availability-widget.js"></script>`}
        </pre>
      </div>

      <div style={{ padding: '20px', background: '#f5f5f5', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>🚀 Next Steps</h2>
        <ol>
          <li style={{ marginBottom: '8px' }}>Test widgets: Open <a href="/widget-examples.html" target="_blank"><code>/widget-examples.html</code></a></li>
          <li style={{ marginBottom: '8px' }}>Deploy: Upload <code>public/widgets/*.js</code> to your server</li>
          <li style={{ marginBottom: '8px' }}>Embed: Use the code above on any platform</li>
          <li style={{ marginBottom: '8px' }}>Customize: Add <code>data-dark-mode="true"</code> or other options</li>
        </ol>
      </div>
    </div>
  );
}
