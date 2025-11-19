import React from 'react';
import ReactDOM from 'react-dom/client';

const styles = `
  .nomad-pricing-widget {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #ffffff;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .nomad-pricing-widget-dark {
    background: #1a1a1a;
    color: #ffffff;
  }
  
  .nomad-pricing-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .nomad-pricing-title {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
  }
  
  .nomad-pricing-subtitle {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: rgba(0, 0, 0, 0.6);
    margin: 0 0 4px 0;
  }
  
  .nomad-pricing-widget-dark .nomad-pricing-subtitle {
    color: rgba(255, 255, 255, 0.6);
  }
  
  .nomad-pricing-badge {
    font-size: 14px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    padding: 4px 12px;
  }
  
  .nomad-pricing-widget-dark .nomad-pricing-badge {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .nomad-pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
    margin-bottom: 16px;
  }
  
  .nomad-pricing-card {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    padding: 16px;
  }
  
  .nomad-pricing-widget-dark .nomad-pricing-card {
    background: rgba(255, 255, 255, 0.05);
  }
  
  .nomad-pricing-card-title {
    font-weight: 600;
    font-size: 16px;
    margin: 0 0 8px 0;
  }
  
  .nomad-pricing-card-mileage {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 8px;
  }
  
  .nomad-pricing-widget-dark .nomad-pricing-card-mileage {
    color: rgba(255, 255, 255, 0.7);
  }
  
  .nomad-pricing-card-price {
    font-size: 24px;
    font-weight: 700;
    color: #d97706;
    margin-bottom: 12px;
  }
  
  .nomad-pricing-card-features {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 14px;
  }
  
  .nomad-pricing-card-features li {
    margin-bottom: 4px;
    color: rgba(0, 0, 0, 0.8);
  }
  
  .nomad-pricing-widget-dark .nomad-pricing-card-features li {
    color: rgba(255, 255, 255, 0.8);
  }
  
  .nomad-pricing-note {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.7);
  }
  
  .nomad-pricing-widget-dark .nomad-pricing-note {
    color: rgba(255, 255, 255, 0.7);
  }
`;

function PricingWidget({ vehicles, darkMode }) {
  const defaultVehicles = vehicles || [
    {
      name: 'Class C Adventurer',
      mileage: '500',
      price: '$3,200/wk',
      ac: '2-zone',
      water: '50 gal',
      power: '4kW Onan',
    },
    {
      name: 'Class A Expedition',
      mileage: '500',
      price: '$4,500/wk',
      ac: '3-zone',
      water: '75 gal',
      power: '5.5kW Cummins',
    },
    {
      name: 'Travel Trailer',
      mileage: 'N/A',
      price: '$2,100/wk',
      ac: '1-zone',
      water: '40 gal',
      power: '3kW Honda',
    },
  ];

  return (
    <div className={`nomad-pricing-widget ${darkMode ? 'nomad-pricing-widget-dark' : ''}`}>
      <div className="nomad-pricing-header">
        <div>
          <p className="nomad-pricing-subtitle">Transparent pricing</p>
          <h2 className="nomad-pricing-title">Rates tuned for the playa</h2>
        </div>
        <span className="nomad-pricing-badge">No hidden fees</span>
      </div>
      <div className="nomad-pricing-grid">
        {defaultVehicles.map((vehicle, index) => (
          <div key={index} className="nomad-pricing-card">
            <h3 className="nomad-pricing-card-title">{vehicle.name}</h3>
            <p className="nomad-pricing-card-mileage">{vehicle.mileage} miles included</p>
            <p className="nomad-pricing-card-price">{vehicle.price}</p>
            <ul className="nomad-pricing-card-features">
              <li>AC: {vehicle.ac}</li>
              <li>Water: {vehicle.water}</li>
              <li>Generator: {vehicle.power}</li>
            </ul>
          </div>
        ))}
      </div>
      <p className="nomad-pricing-note">
        Rates include thorough dust-proofing, pre-event maintenance, and on-call support during gate open hours.
      </p>
    </div>
  );
}

// Initialize widget
if (typeof window !== 'undefined') {
  // Inject styles
  if (!document.getElementById('nomad-pricing-widget-styles')) {
    const styleEl = document.createElement('style');
    styleEl.id = 'nomad-pricing-widget-styles';
    styleEl.textContent = styles;
    document.head.appendChild(styleEl);
  }

  // Auto-initialize
  window.NomadPricingWidget = {
    init: (elementId, options = {}) => {
      const container = document.getElementById(elementId);
      if (container) {
        const root = ReactDOM.createRoot(container);
        root.render(
          <PricingWidget
            vehicles={options.vehicles}
            darkMode={options.darkMode || false}
          />
        );
      }
    },
  };

  // Auto-detect and initialize
  document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('[data-nomad-widget="pricing"]');
    containers.forEach((container) => {
      const darkMode = container.getAttribute('data-dark-mode') === 'true';
      const vehiclesData = container.getAttribute('data-vehicles');
      let vehicles = null;
      if (vehiclesData) {
        try {
          vehicles = JSON.parse(vehiclesData);
        } catch (e) {
          console.error('Invalid vehicles data:', e);
        }
      }
      const root = ReactDOM.createRoot(container);
      root.render(<PricingWidget vehicles={vehicles} darkMode={darkMode} />);
    });
  });
}

export default PricingWidget;
