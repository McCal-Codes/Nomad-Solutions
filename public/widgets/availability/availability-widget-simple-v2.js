'use strict';
(function(){
  // Styles
  const css = `
    .nomad-availability-widget { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: transparent; border-radius: 0; padding: 0; box-shadow: none; max-width: 900px; margin: 0 auto; }
    .nomad-availability-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; flex-wrap: wrap; gap: 12px; }
    .nomad-availability-header-left h3 { font-size: 24px; font-weight: 700; margin: 0 0 6px 0; color: #6B4C4C; }
    .nomad-availability-header-left p { font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #71717a; margin: 0; }
    .nomad-availability-badge { font-size: 13px; background: #D4A574; color: #6B4C4C; border-radius: 20px; padding: 8px 16px; font-weight: 600; }
    .nomad-availability-list { list-style: none; padding: 0; margin: 0; }
    .nomad-availability-item { display: flex; align-items: center; justify-content: space-between; background: #E8DCC4; border-radius: 16px; padding: 20px 24px; margin-bottom: 16px; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid #D4A574; }
    .nomad-availability-item:hover { background: #D4A574; transform: translateY(-2px); box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); }
    .nomad-availability-name { font-weight: 600; font-size: 16px; color: #6B4C4C; }
    .nomad-availability-status { font-size: 14px; font-weight: 700; border-radius: 24px; padding: 8px 18px; white-space: nowrap; }
    .nomad-availability-status.available { background: #34d399; color: white; }
    .nomad-availability-status.limited { background: #fbbf24; color: #6B4C4C; }
    .nomad-availability-status.booked { background: #A85B5B; color: white; }
    .nomad-availability-loading { text-align: center; padding: 40px; color: rgba(0, 0, 0, 0.6); font-size: 14px; }
    .nomad-availability-spinner { display: inline-block; width: 24px; height: 24px; border: 3px solid rgba(0, 0, 0, 0.1); border-top-color: #A85B5B; border-radius: 50%; animation: nomad-availability-spin 0.8s linear infinite; margin-bottom: 12px; }
    @keyframes nomad-availability-spin { to { transform: rotate(360deg); } }
    .nomad-availability-note { font-size: 13px; color: rgba(0, 0, 0, 0.5); margin-top: 16px; text-align: center; }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // Mock data
  const data = [
    { name: 'Class C Adventurer', status: 'available' },
    { name: 'Class A Expedition', status: 'limited' },
    { name: 'Travel Trailer 24ft', status: 'available' },
    { name: 'Class B Camper Van', status: 'booked', nextOpen: 'Sept 15' },
    { name: 'Toy Hauler 28ft', status: 'available' }
  ];

  function render(list) {
    const el = document.getElementById('nomad-availability-widget');
    if (!el) return;
    let html = `
      <div class="nomad-availability-widget">
        <div class="nomad-availability-header">
          <div class="nomad-availability-header-left">
            <h3>Fleet Availability</h3>
            <p>Live updates</p>
          </div>
          <span class="nomad-availability-badge">Real-time</span>
        </div>
        <ul class="nomad-availability-list">
    `;
    list.forEach(item => {
      const statusText = item.status === 'booked' && item.nextOpen ? `Booked — open ${item.nextOpen}` : item.status;
      html += `
        <li class="nomad-availability-item">
          <span class="nomad-availability-name">${item.name}</span>
          <span class="nomad-availability-status ${item.status}">${statusText}</span>
        </li>
      `;
    });
    html += `
        </ul>
        <p class="nomad-availability-note">Updated in real-time • Book early for best selection</p>
      </div>
    `;
    el.innerHTML = html;
  }

  function loading() {
    const el = document.getElementById('nomad-availability-widget');
    if (!el) return;
    el.innerHTML = `
      <div class="nomad-availability-widget">
        <div class="nomad-availability-loading">
          <div class="nomad-availability-spinner"></div>
          <div>Checking availability...</div>
        </div>
      </div>
    `;
  }

  function init(){
    loading();
    setTimeout(() => { try { render(data); } catch(e){ console.error('Availability error - availability-widget-simple-v2.js:82', e); } }, 500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
