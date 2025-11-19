import '../../public/widgets/availability-widget-simple.js';

describe('availability-widget-simple', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div data-nomad-widget="availability" data-dark-mode="true"></div>';
    // Polyfill fetch to force fallback path without real network
    (global as any).fetch = () => Promise.reject(new Error('stub network'));
    (window as any).NomadAvailabilityWidget.scan();
  });

  test('renders availability list (async)', async () => {
    // Wait for async initialization + fallback
    await new Promise(r => setTimeout(r, 600));
    const list = document.querySelector('.nomad-availability-list');
    expect(list).toBeTruthy();
    const items = list?.querySelectorAll('.nomad-availability-item');
    expect(items && items.length).toBeGreaterThan(0);
  });

  test('applies dark mode class when data-dark-mode=true', async () => {
    await new Promise(r => setTimeout(r, 250));
    const wrapper = document.querySelector('.nomad-availability-widget');
    expect(wrapper?.classList.contains('dark')).toBe(true);
  });
});
