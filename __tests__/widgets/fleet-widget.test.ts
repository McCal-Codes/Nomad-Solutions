import { screen } from '@testing-library/dom';
import '../../public/widgets/fleet-widget-simple.js';

describe('fleet-widget-simple', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div data-nomad-widget="fleet" data-booking-url="/booking-test"></div>';
    (window as any).NomadFleetWidget.scan();
  });

  test('renders fleet grid with cards', () => {
    const grid = document.querySelector('.nomad-fleet-grid');
    expect(grid).toBeTruthy();
    const cards = grid?.querySelectorAll('.nomad-rv-card');
    expect(cards && cards.length).toBeGreaterThan(0);
  });

  test('booking link uses provided booking URL', () => {
    const link = document.querySelector('.nomad-rv-link') as HTMLAnchorElement | null;
    expect(link).toBeTruthy();
    expect(link?.getAttribute('href')).toBe('/booking-test');
  });
});
