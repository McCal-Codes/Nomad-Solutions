import React from 'react';
import ReactDOM from 'react-dom/client';

const styles = `
  .nomad-rv-card-widget {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #ffffff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 400px;
  }
  
  .nomad-rv-card-widget-dark {
    background: #1a1a1a;
    color: #ffffff;
  }
  
  .nomad-rv-image-container {
    position: relative;
    height: 200px;
    width: 100%;
    background-size: cover;
    background-position: center;
  }
  
  .nomad-rv-availability-badge {
    position: absolute;
    top: 12px;
    left: 12px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border-radius: 20px;
    padding: 4px 12px;
    font-size: 12px;
    font-weight: 600;
  }
  
  .nomad-rv-content {
    padding: 20px;
  }
  
  .nomad-rv-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  
  .nomad-rv-title {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
  }
  
  .nomad-rv-sleep-badge {
    font-size: 14px;
    padding: 4px 8px;
    border-radius: 20px;
    background: rgba(217, 119, 6, 0.2);
    color: #1a1a1a;
    font-weight: 500;
  }
  
  .nomad-rv-card-widget-dark .nomad-rv-sleep-badge {
    color: #ffffff;
  }
  
  .nomad-rv-description {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 16px;
  }
  
  .nomad-rv-card-widget-dark .nomad-rv-description {
    color: rgba(255, 255, 255, 0.8);
  }
  
  .nomad-rv-specs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    margin-bottom: 16px;
  }
  
  .nomad-rv-spec {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 12px;
  }
  
  .nomad-rv-card-widget-dark .nomad-rv-spec {
    background: rgba(255, 255, 255, 0.05);
  }
  
  .nomad-rv-spec-label {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: rgba(0, 0, 0, 0.6);
    margin: 0 0 4px 0;
  }
  
  .nomad-rv-card-widget-dark .nomad-rv-spec-label {
    color: rgba(255, 255, 255, 0.6);
  }
  
  .nomad-rv-spec-value {
    font-weight: 600;
    font-size: 14px;
    margin: 0;
  }
  
  .nomad-rv-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .nomad-rv-price {
    font-size: 20px;
    font-weight: 700;
    color: #d97706;
  }
  
  .nomad-rv-link {
    font-weight: 600;
    color: inherit;
    text-decoration: none;
  }
  
  .nomad-rv-link:hover {
    text-decoration: underline;
  }
`;

function RvCardWidget({ vehicle, darkMode, bookingUrl }) {
  const defaultVehicle = vehicle || {
    name: 'Class C Adventurer',
    image: '/placeholder.jpg',
    availability: 'Available',
    sleep: '4-6',
    description: 'Perfect for small groups or couples seeking adventure',
    ac: '2-zone',
    water: '50 gal',
    dustProofing: 'Premium',
    pickup: 'Reno',
    price: '$3,200/wk',
  };

  return (
    <div className={`nomad-rv-card-widget ${darkMode ? 'nomad-rv-card-widget-dark' : ''}`}>
      <div
        className="nomad-rv-image-container"
        style={{ backgroundImage: `url(${defaultVehicle.image})` }}
      >
        <div className="nomad-rv-availability-badge">{defaultVehicle.availability}</div>
      </div>
      <div className="nomad-rv-content">
        <div className="nomad-rv-header">
          <h3 className="nomad-rv-title">{defaultVehicle.name}</h3>
          <span className="nomad-rv-sleep-badge">Sleeps {defaultVehicle.sleep}</span>
        </div>
        <p className="nomad-rv-description">{defaultVehicle.description}</p>
        <div className="nomad-rv-specs">
          <div className="nomad-rv-spec">
            <p className="nomad-rv-spec-label">AC</p>
            <p className="nomad-rv-spec-value">{defaultVehicle.ac}</p>
          </div>
          <div className="nomad-rv-spec">
            <p className="nomad-rv-spec-label">Water</p>
            <p className="nomad-rv-spec-value">{defaultVehicle.water}</p>
          </div>
          <div className="nomad-rv-spec">
            <p className="nomad-rv-spec-label">Dust-proofing</p>
            <p className="nomad-rv-spec-value">{defaultVehicle.dustProofing}</p>
          </div>
          <div className="nomad-rv-spec">
            <p className="nomad-rv-spec-label">Pickup</p>
            <p className="nomad-rv-spec-value">{defaultVehicle.pickup}</p>
          </div>
        </div>
        <div className="nomad-rv-footer">
          <span className="nomad-rv-price">{defaultVehicle.price}</span>
          <a href={bookingUrl || '/booking'} className="nomad-rv-link">
            Reserve spot →
          </a>
        </div>
      </div>
    </div>
  );
}

// Initialize widget
if (typeof window !== 'undefined') {
  // Inject styles
  if (!document.getElementById('nomad-rv-card-widget-styles')) {
    const styleEl = document.createElement('style');
    styleEl.id = 'nomad-rv-card-widget-styles';
    styleEl.textContent = styles;
    document.head.appendChild(styleEl);
  }

  // Auto-initialize
  window.NomadRvCardWidget = {
    init: (elementId, options = {}) => {
      const container = document.getElementById(elementId);
      if (container) {
        const root = ReactDOM.createRoot(container);
        root.render(
          <RvCardWidget
            vehicle={options.vehicle}
            darkMode={options.darkMode || false}
            bookingUrl={options.bookingUrl}
          />
        );
      }
    },
  };

  // Auto-detect and initialize
  document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('[data-nomad-widget="rv-card"]');
    containers.forEach((container) => {
      const darkMode = container.getAttribute('data-dark-mode') === 'true';
      const bookingUrl = container.getAttribute('data-booking-url');
      const vehicleData = container.getAttribute('data-vehicle');
      let vehicle = null;
      if (vehicleData) {
        try {
          vehicle = JSON.parse(vehicleData);
        } catch (e) {
          console.error('Invalid vehicle data:', e);
        }
      }
      const root = ReactDOM.createRoot(container);
      root.render(<RvCardWidget vehicle={vehicle} darkMode={darkMode} bookingUrl={bookingUrl} />);
    });
  });
}

export default RvCardWidget;
