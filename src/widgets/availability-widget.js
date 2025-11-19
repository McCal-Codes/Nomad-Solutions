import React from 'react';
import ReactDOM from 'react-dom/client';

const styles = `
  .nomad-widget {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #ffffff;
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .nomad-widget-dark {
    background: #1a1a1a;
    color: #ffffff;
  }
  
  .nomad-widget-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  
  .nomad-widget-title {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
  }
  
  .nomad-widget-subtitle {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: rgba(0, 0, 0, 0.6);
    margin: 0 0 4px 0;
  }
  
  .nomad-widget-dark .nomad-widget-subtitle {
    color: rgba(255, 255, 255, 0.6);
  }
  
  .nomad-widget-badge {
    font-size: 12px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    padding: 4px 12px;
  }
  
  .nomad-widget-dark .nomad-widget-badge {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .nomad-widget-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .nomad-widget-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 8px;
  }
  
  .nomad-widget-dark .nomad-widget-item {
    background: rgba(255, 255, 255, 0.05);
  }
  
  .nomad-widget-item-name {
    font-weight: 600;
    font-size: 14px;
  }
  
  .nomad-widget-status {
    font-size: 12px;
    font-weight: 600;
    border-radius: 20px;
    padding: 4px 12px;
  }
  
  .nomad-widget-status-available {
    background: #d1fae5;
    color: #065f46;
  }
  
  .nomad-widget-dark .nomad-widget-status-available {
    background: rgba(16, 185, 129, 0.2);
    color: #6ee7b7;
  }
  
  .nomad-widget-status-limited {
    background: #fef3c7;
    color: #92400e;
  }
  
  .nomad-widget-dark .nomad-widget-status-limited {
    background: rgba(245, 158, 11, 0.2);
    color: #fcd34d;
  }
  
  .nomad-widget-status-booked {
    background: #fee2e2;
    color: #991b1b;
  }
  
  .nomad-widget-dark .nomad-widget-status-booked {
    background: rgba(239, 68, 68, 0.2);
    color: #fca5a5;
  }
  
  .nomad-widget-loading {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.7);
  }
  
  .nomad-widget-dark .nomad-widget-loading {
    color: rgba(255, 255, 255, 0.7);
  }
  
  .nomad-widget-note {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.6);
    margin-top: 16px;
  }
  
  .nomad-widget-dark .nomad-widget-note {
    color: rgba(255, 255, 255, 0.6);
  }
`;

function AvailabilityWidget({ apiUrl, darkMode }) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(apiUrl || '/api/availability');
        const json = await res.json();
        setData(json.availability || []);
      } catch (error) {
        console.error('Availability fetch failed - availability-widget.js:147', error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [apiUrl]);

  return (
    <div className={`nomad-widget ${darkMode ? 'nomad-widget-dark' : ''}`}>
      <div className="nomad-widget-header">
        <div>
          <p className="nomad-widget-subtitle">Live-ish glance</p>
          <h3 className="nomad-widget-title">Fleet availability</h3>
        </div>
        <span className="nomad-widget-badge">API ready</span>
      </div>
      {loading ? (
        <p className="nomad-widget-loading">Checking the playa queue…</p>
      ) : (
        <ul className="nomad-widget-list">
          {data.map((item) => (
            <li key={item.name} className="nomad-widget-item">
              <span className="nomad-widget-item-name">{item.name}</span>
              <span
                className={`nomad-widget-status nomad-widget-status-${item.status}`}
              >
                {item.status === 'booked' && item.nextOpen
                  ? `Booked — open ${item.nextOpen}`
                  : item.status}
              </span>
            </li>
          ))}
        </ul>
      )}
      <p className="nomad-widget-note">Real-time availability updates</p>
    </div>
  );
}

// Initialize widget
if (typeof window !== 'undefined') {
  // Inject styles
  if (!document.getElementById('nomad-widget-styles')) {
    const styleEl = document.createElement('style');
    styleEl.id = 'nomad-widget-styles';
    styleEl.textContent = styles;
    document.head.appendChild(styleEl);
  }

  // Auto-initialize
  window.NomadAvailabilityWidget = {
    init: (elementId, options = {}) => {
      const container = document.getElementById(elementId);
      if (container) {
        const root = ReactDOM.createRoot(container);
        root.render(
          <AvailabilityWidget
            apiUrl={options.apiUrl}
            darkMode={options.darkMode || false}
          />
        );
      }
    },
  };

  // Auto-detect and initialize
  document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('[data-nomad-widget="availability"]');
    containers.forEach((container) => {
      const apiUrl = container.getAttribute('data-api-url');
      const darkMode = container.getAttribute('data-dark-mode') === 'true';
      const root = ReactDOM.createRoot(container);
      root.render(<AvailabilityWidget apiUrl={apiUrl} darkMode={darkMode} />);
    });
  });
}

export default AvailabilityWidget;
