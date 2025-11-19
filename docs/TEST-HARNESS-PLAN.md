# Widget Test Harness Plan

Purpose: Establish a lightweight automated test layer for widget initialization & configuration attributes.

## Scope (Phase 1)
- Auto-initialization via `data-nomad-widget` attribute.
- Dark mode attribute propagation (`data-dark-mode`).
- API URL override (`data-api-url`).
- Booking URL wiring (`data-booking-url`).

## Proposed Stack
| Tool | Reason |
|------|--------|
| Jest | Fast unit test runner |
| jsdom | Simulate DOM for widget initialization |
| Testing Library DOM | Querying elements semantically |
| ESLint + TypeScript types | Consistency & safety |

## Directory Layout
```
/__tests__/widgets/
  availability-init.test.ts
  fleet-init.test.ts
/test-utils/
  dom.ts
```

## Example Test (Draft)
```ts
import { initAvailability } from '../../public/widgets/availability-widget-simple';

describe('Availability widget', () => {
  test('applies dark mode class', () => {
    document.body.innerHTML = '<div data-nomad-widget="availability" data-dark-mode="true"></div>';
    initAvailability();
    expect(document.querySelector('[data-nomad-widget="availability"]').classList.contains('nomad-dark')).toBe(true);
  });
});
```

## Scripts (Planned additions)
```
"test": "jest",
"test:watch": "jest --watch"
```

## Milestones
1. Add Jest + jsdom dev dependencies.
2. Refactor simple widgets to export explicit init functions if needed.
3. Write initialization tests.
4. Add GitHub Action for tests with badge.
5. Add coverage thresholds (80%+ lines for widget init logic).

## Non-Goals (Phase 1)
- End-to-end browser automation.
- Performance timing assertions.
- Visual regression.

## Future Enhancements
- Lighthouse snapshot gating (already separate workflow) integrated with thresholds.
- Contract tests for API responses once real endpoints exist.
- Integration tests for booking flow.

---
Revisit this plan once API endpoints and more complex widget state are introduced.
