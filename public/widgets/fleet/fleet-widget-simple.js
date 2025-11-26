(function() {
  'use strict';
  
  // Widget styles
  const styles = `
    .nomad-fleet-widget {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .nomad-fleet-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 24px;
      padding: 0;
      margin: 0;
      list-style: none;
    }
    
    .nomad-rv-card {
      background: #E8DCC4;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s;
    }
    
    .nomad-rv-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }
    
    .nomad-fleet-widget.dark .nomad-rv-card {
      background: #1a1a1a;
      color: #ffffff;
    }
    
    .nomad-rv-image {
      position: relative;
      height: 220px;
      background-size: cover;
      background-position: center;
      background-color: #e5e7eb;
    }
    
    .nomad-rv-badge {
      position: absolute;
      top: 12px;
      left: 12px;
      background: rgba(0, 0, 0, 0.75);
      color: white;
      border-radius: 20px;
      padding: 6px 14px;
      font-size: 12px;
      font-weight: 600;
    }
    
    .nomad-rv-content {
      padding: 24px;
    }
    
    .nomad-rv-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
      gap: 12px;
    }
    
    .nomad-rv-name {
      font-size: 20px;
      font-weight: 600;
      margin: 0;
      color: #6B4C4C;
    }
    
    .nomad-fleet-widget.dark .nomad-rv-name {
      color: #ffffff;
    }
    
    .nomad-rv-sleep {
      font-size: 13px;
      padding: 4px 10px;
      border-radius: 20px;
      background: #D4A574;
      color: #6B4C4C;
      font-weight: 600;
      white-space: nowrap;
    }
    
    .nomad-fleet-widget.dark .nomad-rv-sleep {
      background: rgba(217, 119, 6, 0.3);
      color: #fbbf24;
    }
    
    .nomad-rv-description {
      font-size: 14px;
      color: #6B4C4C;
      margin-bottom: 16px;
      line-height: 1.6;
    }
    
    .nomad-fleet-widget.dark .nomad-rv-description {
      color: rgba(255, 255, 255, 0.7);
    }
    
    .nomad-rv-specs {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      margin-bottom: 20px;
    }
    
    .nomad-rv-spec {
      background: #F5EFE6;
      border-radius: 8px;
      padding: 12px;
    }
    
    .nomad-fleet-widget.dark .nomad-rv-spec {
      background: rgba(255, 255, 255, 0.05);
    }
    
    .nomad-rv-spec-label {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: rgba(0, 0, 0, 0.5);
      margin: 0 0 4px 0;
    }
    
    .nomad-fleet-widget.dark .nomad-rv-spec-label {
      color: rgba(255, 255, 255, 0.5);
    }
    
    .nomad-rv-spec-value {
      font-weight: 600;
      font-size: 14px;
      color: #6B4C4C;
      margin: 0;
    }
    
    .nomad-fleet-widget.dark .nomad-rv-spec-value {
      color: #ffffff;
    }
    
    .nomad-rv-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 16px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
    
    .nomad-fleet-widget.dark .nomad-rv-footer {
      border-top-color: rgba(255, 255, 255, 0.1);
    }
    
    .nomad-rv-price {
      font-size: 24px;
      font-weight: 700;
      color: #A85B5B;
      margin: 0;
    }
    
    .nomad-rv-link {
      font-weight: 600;
      color: #6B4C4C;
      text-decoration: none;
      transition: color 0.2s;
    }
    
    .nomad-rv-link:hover {
      color: #D4A574;
      text-decoration: underline;
    }
    
    .nomad-fleet-widget.dark .nomad-rv-link {
      color: #ffffff;
    }
    
    .nomad-fleet-loading {
      text-align: center;
      padding: 60px 20px;
      color: rgba(0, 0, 0, 0.6);
    }

    .nomad-fleet-widget.dark .nomad-fleet-loading {
      color: rgba(255, 255, 255, 0.6);
    }

    .nomad-fleet-spinner {
      display: inline-block;
      width: 32px;
      height: 32px;
      border: 4px solid rgba(0, 0, 0, 0.1);
      border-top-color: #A85B5B;
      border-radius: 50%;
      animation: nomad-fleet-spin 0.8s linear infinite;
      margin-bottom: 16px;
    }

    .nomad-fleet-widget.dark .nomad-fleet-spinner {
      border-color: rgba(255, 255, 255, 0.1);
      border-top-color: #f59e0b;
    }

    @keyframes nomad-fleet-spin {
      to { transform: rotate(360deg); }
    }

    .nomad-fleet-error {
      text-align: center;
      padding: 48px 24px;
      color: #991b1b;
      background: #fee2e2;
      border-radius: 16px;
      margin: 24px;
    }

    .nomad-fleet-widget.dark .nomad-fleet-error {
      color: #fca5a5;
      background: rgba(239, 68, 68, 0.2);
    }

    .nomad-fleet-error-title {
      font-weight: 700;
      font-size: 18px;
      margin-bottom: 12px;
    }

    .nomad-fleet-error-message {
      font-size: 15px;
      margin-bottom: 20px;
      opacity: 0.9;
      line-height: 1.6;
    }

    .nomad-fleet-retry {
      background: #d97706;
      color: white;
      border: none;
      border-radius: 10px;
      padding: 12px 28px;
      font-weight: 600;
      font-size: 15px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .nomad-fleet-retry:hover {
      background: #b45309;
      transform: translateY(-1px);
    }

    .nomad-fleet-widget.dark .nomad-fleet-retry {
      background: #f59e0b;
      color: #111827;
    }

    .nomad-fleet-widget.dark .nomad-fleet-retry:hover {
      background: #fbbf24;
    }

    @media (max-width: 768px) {
      .nomad-fleet-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  // Default images helper
  function defaultImages(base) {
    const b = (base && base.trim()) ? base.replace(/\/$/, '') : '/images';
    return [b + '/rv-1.svg', b + '/rv-2.svg', b + '/rv-3.svg'];
  }

  // Derive a sensible default images base from the script src (works cross-origin on embeds)
  function getDefaultImagesBase() {
    try {
      const scripts = document.getElementsByTagName('script');
      for (let i = scripts.length - 1; i >= 0; i--) {
        const s = scripts[i];
        const src = s && s.getAttribute && s.getAttribute('src');
        if (src && /fleet-widget-simple\.js(\?.*)?$/i.test(src)) {
          // Resolve absolute and derive repo-aware base: replace /widgets/... with /images
          const a = document.createElement('a');
          a.href = src; // browser resolves to absolute
          const origin = a.origin; // e.g., https://username.github.io
          const path = a.pathname || '';// e.g., /Repo/widgets/fleet-widget-simple.js
          if (/\/widgets\//.test(path)) {
            const basePath = path.replace(/\/widgets\/.*$/i, '/images'); // /Repo/images
            return origin + basePath;
          }
          // fallback to sibling directory replacement using last slash
          const idx = path.lastIndexOf('/');
          const dir = idx >= 0 ? path.slice(0, idx) : '';
          return origin + dir + '/images';
        }
      }
    } catch(_) {}
    // Fallback to same-origin '/images'
    try { return (window.location ? window.location.origin : '') + '/images'; } catch(_) {}
    return '/images';
  }
  
  // Inject styles
  function injectStyles() {
    if (!document.getElementById('nomad-fleet-widget-styles')) {
      const styleEl = document.createElement('style');
      styleEl.id = 'nomad-fleet-widget-styles';
      styleEl.textContent = styles;
      document.head.appendChild(styleEl);
    }
  }

  // Debug utility
  function isDebugEnabled(el) {
    try {
      if (el && el.getAttribute && el.getAttribute('data-debug') === 'true') return true;
      if (typeof window !== 'undefined') {
        if (window.NomadFleetWidget && window.NomadFleetWidget.debug === true) return true;
        if (window.location && /nomadDebug=1/i.test(window.location.search)) return true;
      }
    } catch(_) {}
    return false;
  }
  function dlog(el, msg) { if (isDebugEnabled(el)) { try { console.log('[NomadFleet]', msg); } catch(_) {} } }
  
  // Mock fleet data (uses local placeholder images)
  function getFleetData(imagesBase) {
    const base = imagesBase || getDefaultImagesBase();
    const imgs = defaultImages(base);
    return [
      {
        name: 'Class C Adventurer',
        image: imgs[0],
        availability: 'Available',
        sleep: '4-6',
        description: 'Perfect for small groups or couples seeking adventure',
        ac: '2-zone',
        water: '50 gal',
        dustProofing: 'Premium',
        pickup: 'Reno',
        price: '$3,200/wk'
      },
      {
        name: 'Class A Expedition',
        image: imgs[1],
        availability: 'Limited',
        sleep: '6-8',
        description: 'Luxury RV with premium features for larger groups',
        ac: '3-zone',
        water: '75 gal',
        dustProofing: 'Ultimate',
        pickup: 'Las Vegas',
        price: '$4,500/wk'
      },
      {
        name: 'Travel Trailer 24ft',
        image: imgs[2],
        availability: 'Available',
        sleep: '2-4',
        description: 'Compact and efficient for minimalist burners',
        ac: '1-zone',
        water: '40 gal',
        dustProofing: 'Standard',
        pickup: 'Reno',
        price: '$2,100/wk'
      }
    ];
  }
  
  // Render single RV card
  function renderCard(vehicle, bookingUrl, fallbackImage) {
    const img = vehicle.image || fallbackImage;
    return `
      <li class="nomad-rv-card">
        <div class="nomad-rv-image" style="background-image: url('${img}')">
          <div class="nomad-rv-badge">${vehicle.availability}</div>
        </div>
        <div class="nomad-rv-content">
          <div class="nomad-rv-header">
            <h3 class="nomad-rv-name">${vehicle.name}</h3>
            <span class="nomad-rv-sleep">Sleeps ${vehicle.sleep}</span>
          </div>
          <p class="nomad-rv-description">${vehicle.description}</p>
          <div class="nomad-rv-specs">
            <div class="nomad-rv-spec">
              <p class="nomad-rv-spec-label">AC</p>
              <p class="nomad-rv-spec-value">${vehicle.ac}</p>
            </div>
            <div class="nomad-rv-spec">
              <p class="nomad-rv-spec-label">Water</p>
              <p class="nomad-rv-spec-value">${vehicle.water}</p>
            </div>
            <div class="nomad-rv-spec">
              <p class="nomad-rv-spec-label">Dust-proofing</p>
              <p class="nomad-rv-spec-value">${vehicle.dustProofing}</p>
            </div>
            <div class="nomad-rv-spec">
              <p class="nomad-rv-spec-label">Pickup</p>
              <p class="nomad-rv-spec-value">${vehicle.pickup}</p>
            </div>
          </div>
          <div class="nomad-rv-footer">
            <p class="nomad-rv-price">${vehicle.price}</p>
            <a href="${bookingUrl}" class="nomad-rv-link">Reserve →</a>
          </div>
        </div>
      </li>
    `;
  }
  
  // Render widget
  function renderWidget(container, options) {
    if (!container || container.getAttribute('data-nomad-widget-initialized') === 'true') return;
    const darkMode = options.darkMode || false;
    const bookingUrl = options.bookingUrl || '/booking';
    const imagesBase = options.imagesBase || getDefaultImagesBase();
    const fallbackImgs = defaultImages(imagesBase);
    dlog(container, 'Rendering fleet widget');
    
    const widgetDiv = document.createElement('div');
    widgetDiv.className = 'nomad-fleet-widget' + (darkMode ? ' dark' : '');
    
    // Show loading state first
    widgetDiv.innerHTML = '<div class="nomad-fleet-loading"><div class="nomad-fleet-spinner"></div><div>Loading fleet...</div></div>';
    container.appendChild(widgetDiv);
    container.setAttribute('data-nomad-widget-initialized', 'true');
    
    // Simulate async loading (replace with real API call if needed)
    setTimeout(function() {
      try {
        const vehicles = options.vehicles || getFleetData(imagesBase);
        let html = '<ul class="nomad-fleet-grid">';
        vehicles.forEach(function(vehicle, idx) {
          html += renderCard(vehicle, bookingUrl, fallbackImgs[idx % fallbackImgs.length]);
        });
        html += '</ul>';
        
        const loadingEl = widgetDiv.querySelector('.nomad-fleet-loading');
        if (loadingEl) {
          loadingEl.outerHTML = html;
        } else {
          widgetDiv.innerHTML = html;
        }
        dlog(container, 'Fleet widget loaded successfully');
      } catch(err) {
        // Show error state
        const errHtml = '<div class="nomad-fleet-error">' +
          '<div class="nomad-fleet-error-title">⚠️ Unable to Load Fleet</div>' +
          '<div class="nomad-fleet-error-message">We couldn\'t load the vehicle information. Please check your connection and try again.</div>' +
          '<button class="nomad-fleet-retry" onclick="window.NomadFleetWidget._retry(this)">Retry</button>' +
          '</div>';
        const loadingEl = widgetDiv.querySelector('.nomad-fleet-loading');
        if (loadingEl) {
          loadingEl.outerHTML = errHtml;
        } else {
          widgetDiv.innerHTML = errHtml;
        }
        
        // Store retry data
        widgetDiv._retryData = { options: options };
        dlog(container, 'Fleet widget error: ' + (err && err.message ? err.message : 'Unknown error'));
      }
    }, 500);
  }
  
  // Initialize
  function init() {
    injectStyles();
    let initializedAny = false;
    
    // Auto-initialize elements with data attribute
    const containers = document.querySelectorAll('[data-nomad-widget="fleet"]');
    containers.forEach(function(container) {
      if (container.getAttribute('data-nomad-widget-initialized') === 'true') return;
      const options = {
        darkMode: container.getAttribute('data-dark-mode') === 'true',
        bookingUrl: container.getAttribute('data-booking-url') || '/booking',
        imagesBase: container.getAttribute('data-images-base') || '/images'
      };
      
      const vehiclesData = container.getAttribute('data-vehicles');
      if (vehiclesData) {
        try {
          options.vehicles = JSON.parse(vehiclesData);
        } catch (e) {
          console.error('Invalid vehicles data');
        }
      }
      
      renderWidget(container, options);
      initializedAny = true;
    });
    
    // Also check for ID-based initialization
    const idContainer = document.getElementById('nomad-fleet-widget');
    if (idContainer && idContainer.getAttribute('data-nomad-widget-initialized') !== 'true') {
      renderWidget(idContainer, {});
      initializedAny = true;
    }

    // Observe late-added containers (Wix/Squarespace often inject after load)
    if (typeof MutationObserver !== 'undefined') {
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          mutation.addedNodes.forEach(function(node) {
            if (!(node instanceof Element)) return;
            // data-nomad-widget="fleet"
            if (node.matches && node.matches('[data-nomad-widget="fleet"]') && node.getAttribute('data-nomad-widget-initialized') !== 'true') {
              const opts = {
                darkMode: node.getAttribute('data-dark-mode') === 'true',
                bookingUrl: node.getAttribute('data-booking-url') || '/booking',
                imagesBase: node.getAttribute('data-images-base') || '/images'
              };
              const vehiclesAttr = node.getAttribute('data-vehicles');
              if (vehiclesAttr) {
                try { opts.vehicles = JSON.parse(vehiclesAttr); } catch(_) {}
              }
              renderWidget(node, opts);
            }
            // #nomad-fleet-widget by id
            if (node.id === 'nomad-fleet-widget' && node.getAttribute('data-nomad-widget-initialized') !== 'true') {
              renderWidget(node, {});
            }
            // Also check descendants in case a wrapper was added
            const descAttr = node.querySelectorAll ? node.querySelectorAll('[data-nomad-widget="fleet"]') : [];
            descAttr.forEach(function(el){
              if (el.getAttribute('data-nomad-widget-initialized') === 'true') return;
              const opts = {
                darkMode: el.getAttribute('data-dark-mode') === 'true',
                bookingUrl: el.getAttribute('data-booking-url') || '/booking',
                imagesBase: el.getAttribute('data-images-base') || '/images'
              };
              const vehiclesAttr = el.getAttribute('data-vehicles');
              if (vehiclesAttr) { try { opts.vehicles = JSON.parse(vehiclesAttr); } catch(_) {} }
              renderWidget(el, opts);
            });
            const descId = node.querySelector ? node.querySelector('#nomad-fleet-widget') : null;
            if (descId && descId.getAttribute('data-nomad-widget-initialized') !== 'true') {
              renderWidget(descId, {});
            }
          });
        });
      });
      observer.observe(document.documentElement || document.body, { childList: true, subtree: true });
    }

    // Final safety net: retry scan a few times in case environment delays DOM injection
    if (!initializedAny) {
      let tries = 0;
      const maxTries = 10;
      const timer = setInterval(function(){
        tries++;
        let did = false;
        const reScan = document.querySelectorAll('[data-nomad-widget="fleet"]');
        reScan.forEach(function(el){
          if (el.getAttribute('data-nomad-widget-initialized') === 'true') return;
          const opts = {
            darkMode: el.getAttribute('data-dark-mode') === 'true',
            bookingUrl: el.getAttribute('data-booking-url') || '/booking',
            imagesBase: el.getAttribute('data-images-base') || '/images'
          };
          const v = el.getAttribute('data-vehicles');
          if (v) { try { opts.vehicles = JSON.parse(v); } catch(_) {} }
          renderWidget(el, opts);
          did = true;
        });
        const idEl = document.getElementById('nomad-fleet-widget');
        if (idEl && idEl.getAttribute('data-nomad-widget-initialized') !== 'true') { renderWidget(idEl, {}); did = true; }
        if (did || tries >= maxTries) clearInterval(timer);
      }, 500);
    }
  }
  
  // Expose global API
  window.NomadFleetWidget = {
    render: function(elementId, options) {
      injectStyles();
      const container = document.getElementById(elementId);
      if (container) {
        renderWidget(container, options || {});
      }
    },
    scan: function(){ init(); },
    debug: false,
    _retry: function(btn) {
      try {
        const widgetDiv = btn.closest('.nomad-fleet-widget');
        if (!widgetDiv || !widgetDiv._retryData) return;
        
        // Remove error and show loading
        const errorEl = widgetDiv.querySelector('.nomad-fleet-error');
        if (errorEl) {
          errorEl.outerHTML = '<div class="nomad-fleet-loading"><div class="nomad-fleet-spinner"></div><div>Retrying...</div></div>';
        }
        
        // Retry load
        const data = widgetDiv._retryData;
        const options = data.options || {};
        const bookingUrl = options.bookingUrl || '/booking';
        const imagesBase = options.imagesBase || getDefaultImagesBase();
        const fallbackImgs = defaultImages(imagesBase);
        
        setTimeout(function() {
          try {
            const vehicles = options.vehicles || getFleetData(imagesBase);
            let html = '<ul class="nomad-fleet-grid">';
            vehicles.forEach(function(vehicle, idx) {
              html += renderCard(vehicle, bookingUrl, fallbackImgs[idx % fallbackImgs.length]);
            });
            html += '</ul>';
            
            const loadingEl = widgetDiv.querySelector('.nomad-fleet-loading');
            if (loadingEl) {
              loadingEl.outerHTML = html;
            } else {
              widgetDiv.innerHTML = html;
            }
          } catch(err) {
            // Show error again
            const errHtml = '<div class="nomad-fleet-error">' +
              '<div class="nomad-fleet-error-title">⚠️ Unable to Load Fleet</div>' +
              '<div class="nomad-fleet-error-message">We couldn\'t load the vehicle information. Please check your connection and try again.</div>' +
              '<button class="nomad-fleet-retry" onclick="window.NomadFleetWidget._retry(this)">Retry</button>' +
              '</div>';
            const loadingEl = widgetDiv.querySelector('.nomad-fleet-loading');
            if (loadingEl) {
              loadingEl.outerHTML = errHtml;
            } else {
              widgetDiv.innerHTML = errHtml;
            }
          }
        }, 500);
      } catch(e) {
        console.error('Retry failed:', e);
      }
    }
  };
  
  // Auto-init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  // Also run on window load to catch very late DOM changes
  try { window.addEventListener('load', init); } catch(_) {}
})();
