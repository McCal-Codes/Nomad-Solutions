(function() {
  'use strict';
  
  // Widget styles
  const styles = `
    .nomad-availability-widget {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #ffffff;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      max-width: 800px;
      margin: 0 auto;
    }
    
    .nomad-availability-widget.dark {
      background: #1a1a1a;
      color: #ffffff;
    }
    
    .nomad-availability-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      flex-wrap: wrap;
      gap: 12px;
    }
    
    .nomad-availability-header-left h3 {
      font-size: 22px;
      font-weight: 600;
      margin: 0 0 4px 0;
      color: #1a1a1a;
    }
    
    .nomad-availability-widget.dark .nomad-availability-header-left h3 {
      color: #ffffff;
    }
    
    .nomad-availability-header-left p {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: rgba(0, 0, 0, 0.6);
      margin: 0;
    }
    
    .nomad-availability-widget.dark .nomad-availability-header-left p {
      color: rgba(255, 255, 255, 0.6);
    }
    
    .nomad-availability-badge {
      font-size: 12px;
      background: rgba(0, 0, 0, 0.05);
      border-radius: 20px;
      padding: 6px 14px;
      font-weight: 500;
    }
    
    .nomad-availability-widget.dark .nomad-availability-badge {
      background: rgba(255, 255, 255, 0.1);
    }
    
    .nomad-availability-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .nomad-availability-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(0, 0, 0, 0.04);
      border-radius: 10px;
      padding: 16px;
      margin-bottom: 12px;
      transition: all 0.2s;
    }
    
    .nomad-availability-item:hover {
      background: rgba(0, 0, 0, 0.06);
      transform: translateX(4px);
    }
    
    .nomad-availability-widget.dark .nomad-availability-item {
      background: rgba(255, 255, 255, 0.05);
    }
    
    .nomad-availability-widget.dark .nomad-availability-item:hover {
      background: rgba(255, 255, 255, 0.08);
    }
    
    .nomad-availability-name {
      font-weight: 600;
      font-size: 15px;
      color: #1a1a1a;
    }
    
    .nomad-availability-widget.dark .nomad-availability-name {
      color: #ffffff;
    }
    
    .nomad-availability-status {
      font-size: 13px;
      font-weight: 600;
      border-radius: 20px;
      padding: 6px 14px;
      white-space: nowrap;
    }
    
    .nomad-availability-status.available {
      background: #d1fae5;
      color: #065f46;
    }
    
    .nomad-availability-widget.dark .nomad-availability-status.available {
      background: rgba(16, 185, 129, 0.2);
      color: #6ee7b7;
    }
    
    .nomad-availability-status.limited {
      background: #fef3c7;
      color: #92400e;
    }
    
    .nomad-availability-widget.dark .nomad-availability-status.limited {
      background: rgba(245, 158, 11, 0.2);
      color: #fcd34d;
    }
    
    .nomad-availability-status.booked {
      background: #fee2e2;
      color: #991b1b;
    }
    
    .nomad-availability-widget.dark .nomad-availability-status.booked {
      background: rgba(239, 68, 68, 0.2);
      color: #fca5a5;
    }
    
    .nomad-availability-loading {
      text-align: center;
      padding: 40px;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
    }
    
    .nomad-availability-widget.dark .nomad-availability-loading {
      color: rgba(255, 255, 255, 0.6);
    }
    
    .nomad-availability-note {
      font-size: 13px;
      color: rgba(0, 0, 0, 0.5);
      margin-top: 16px;
      text-align: center;
    }
    
    .nomad-availability-widget.dark .nomad-availability-note {
      color: rgba(255, 255, 255, 0.5);
    }
  `;
  
  // Debug helpers
  function isDebugEnabled(el) {
    try {
      if (el && el.getAttribute && el.getAttribute('data-debug') === 'true') return true;
      if (typeof window !== 'undefined') {
        if (window.NomadAvailabilityWidget && window.NomadAvailabilityWidget.debug === true) return true;
        if (window.location && /nomadDebug=1/i.test(window.location.search)) return true;
      }
    } catch(_) {}
    return false;
  }
  function dlog(el, msg) { if (isDebugEnabled(el)) { try { console.log('[NomadAvailability] - availability-widget-simple.js:177', msg); } catch(_) {} } }
  
  // Inject styles
  function injectStyles() {
    if (!document.getElementById('nomad-availability-widget-styles')) {
      const styleEl = document.createElement('style');
      styleEl.id = 'nomad-availability-widget-styles';
      styleEl.textContent = styles;
      document.head.appendChild(styleEl);
    }
  }
  
  // Mock data - replace with real API call
  function getAvailabilityData() {
    return [
      { name: 'Class C Adventurer', status: 'available' },
      { name: 'Class A Expedition', status: 'limited' },
      { name: 'Travel Trailer 24ft', status: 'available' },
      { name: 'Class B Camper Van', status: 'booked', nextOpen: 'Sept 15' },
      { name: 'Toy Hauler 28ft', status: 'available' }
    ];
  }

  // Build a sensible default API url based on script origin
  function getDefaultApiUrl() {
    try {
      const scripts = document.getElementsByTagName('script');
      for (let i = scripts.length - 1; i >= 0; i--) {
        const s = scripts[i];
        const src = s && s.getAttribute && s.getAttribute('src');
        if (src && /availability-widget-simple\.js(\?.*)?$/i.test(src)) {
          const a = document.createElement('a');
          a.href = src; // resolve to absolute
          const origin = a.origin;
          const path = a.pathname || '';
          // Try to keep repo subpath if present (replace /widgets/... with /api/availability)
          if (/\/widgets\//i.test(path)) {
            const apiPath = path.replace(/\/widgets\/.*$/i, '/api/availability');
            return origin + apiPath;
          }
          return origin + '/api/availability';
        }
      }
    } catch(_) {}
    try { return (window.location ? window.location.origin : '') + '/api/availability'; } catch(_) {}
    return '/api/availability';
  }
  
  // Render widget
  function renderWidget(container, options) {
    if (!container || container.getAttribute('data-nomad-widget-initialized') === 'true') return;
    const darkMode = options.darkMode || false;
    const apiUrl = options.apiUrl || getDefaultApiUrl();
    
    // Create widget HTML
    const widgetDiv = document.createElement('div');
    widgetDiv.className = 'nomad-availability-widget' + (darkMode ? ' dark' : '');
    widgetDiv.innerHTML = `
      <div class="nomad-availability-header">
        <div class="nomad-availability-header-left">
          <h3>Fleet Availability</h3>
          <p>Live updates</p>
        </div>
        <span class="nomad-availability-badge">Real-time</span>
      </div>
      <div class="nomad-availability-loading">Checking availability...</div>
    `;
    
    container.appendChild(widgetDiv);
    container.setAttribute('data-nomad-widget-initialized', 'true');
    dlog(container, 'Availability widget container initialized');
    
    // Load data
    setTimeout(function() {
      let fallbackData = getAvailabilityData();
      // Try fetch with timeout and graceful fallback
      var controller = null;
      var timedOut = false;
      try { controller = new AbortController(); } catch(_) {}
      var timer = setTimeout(function(){
        timedOut = true;
        try { controller && controller.abort(); } catch(_) {}
      }, 5000);

      fetch(apiUrl, controller ? { signal: controller.signal } : undefined)
        .then(function(res) {
          if (!res.ok) throw new Error('HTTP '+res.status);
          return res.json();
        })
        .then(function(json) {
          clearTimeout(timer);
          var data = json && (json.availability || json.data || json) || fallbackData;
          dlog(container, 'Fetched availability from '+apiUrl);
          displayData(widgetDiv, data);
        })
        .catch(function(err) {
          clearTimeout(timer);
          dlog(container, 'Fetch failed ('+(err && err.message ? err.message : 'error')+') — using fallback data');
          displayData(widgetDiv, fallbackData);
        });
    }, 200);
  }
  
  function displayData(widgetDiv, data) {
    const loadingEl = widgetDiv.querySelector('.nomad-availability-loading');
    
    let html = '<ul class="nomad-availability-list">';
    data.forEach(function(item) {
      const statusText = item.status === 'booked' && item.nextOpen 
        ? 'Booked — open ' + item.nextOpen 
        : item.status;
      
      html += `
        <li class="nomad-availability-item">
          <span class="nomad-availability-name">${item.name}</span>
          <span class="nomad-availability-status ${item.status}">${statusText}</span>
        </li>
      `;
    });
    html += '</ul>';
    html += '<p class="nomad-availability-note">Updated in real-time • Book early for best selection</p>';
    
    loadingEl.outerHTML = html;
  }
  
  // Initialize
  function init() {
    injectStyles();
    
    // Auto-initialize elements with data attribute
    const containers = document.querySelectorAll('[data-nomad-widget="availability"]');
    containers.forEach(function(container) {
      const options = {
        darkMode: container.getAttribute('data-dark-mode') === 'true',
        apiUrl: container.getAttribute('data-api-url')
      };
      renderWidget(container, options);
    });
    
    // Also check for ID-based initialization
    const idContainer = document.getElementById('nomad-availability-widget');
    if (idContainer && idContainer.getAttribute('data-nomad-widget-initialized') !== 'true') {
      renderWidget(idContainer, {});
    }

    // Observe late-added containers (for builders injecting after load)
    if (typeof MutationObserver !== 'undefined') {
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          mutation.addedNodes.forEach(function(node) {
            if (!(node instanceof Element)) return;
            if (node.matches && node.matches('[data-nomad-widget="availability"]') && node.getAttribute('data-nomad-widget-initialized') !== 'true') {
              const opts = {
                darkMode: node.getAttribute('data-dark-mode') === 'true',
                apiUrl: node.getAttribute('data-api-url')
              };
              renderWidget(node, opts);
            }
            if (node.id === 'nomad-availability-widget' && node.getAttribute('data-nomad-widget-initialized') !== 'true') {
              renderWidget(node, {});
            }
            const descAttr = node.querySelectorAll ? node.querySelectorAll('[data-nomad-widget="availability"]') : [];
            descAttr.forEach(function(el){
              if (el.getAttribute('data-nomad-widget-initialized') === 'true') return;
              const opts = {
                darkMode: el.getAttribute('data-dark-mode') === 'true',
                apiUrl: el.getAttribute('data-api-url')
              };
              renderWidget(el, opts);
            });
            const descId = node.querySelector ? node.querySelector('#nomad-availability-widget') : null;
            if (descId && descId.getAttribute('data-nomad-widget-initialized') !== 'true') {
              renderWidget(descId, {});
            }
          });
        });
      });
      observer.observe(document.documentElement || document.body, { childList: true, subtree: true });
    }

    // Final safety retries (in case of heavy async DOM building)
    let tries = 0;
    const maxTries = 8;
    const timer = setInterval(function(){
      tries++;
      let did = false;
      const reScan = document.querySelectorAll('[data-nomad-widget="availability"]');
      reScan.forEach(function(el){
        if (el.getAttribute('data-nomad-widget-initialized') === 'true') return;
        const opts = {
          darkMode: el.getAttribute('data-dark-mode') === 'true',
          apiUrl: el.getAttribute('data-api-url')
        };
        renderWidget(el, opts);
        did = true;
      });
      const idEl = document.getElementById('nomad-availability-widget');
      if (idEl && idEl.getAttribute('data-nomad-widget-initialized') !== 'true') { renderWidget(idEl, {}); did = true; }
      if (did || tries >= maxTries) clearInterval(timer);
    }, 400);
  }
  
  // Expose global API
  window.NomadAvailabilityWidget = {
    render: function(elementId, options) {
      injectStyles();
      const container = document.getElementById(elementId);
      if (container) {
        renderWidget(container, options || {});
      }
    },
    scan: function(){ init(); },
    debug: false
  };
  
  // Auto-init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  try { window.addEventListener('load', init); } catch(_) {}
})();
