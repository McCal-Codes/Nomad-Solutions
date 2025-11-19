# Testing Guide

## Test Suite Status
✅ **2 test suites** (4 tests) passing  
📊 **Coverage**: 63% lines, 44% branches, 77% functions

## Running Tests

### Local Development
```bash
# Run all tests with coverage
npm test

# Watch mode for TDD
npm run test:watch
```

### CI/CD
Tests run automatically on:
- Push to `main`
- Pull requests targeting `main`

See `.github/workflows/tests.yml` for workflow details.

## Test Structure

```
__tests__/
  widgets/
    availability-widget.test.ts  # Simple availability widget init tests
    fleet-widget.test.ts         # Simple fleet widget init tests
```

## Coverage Thresholds
- Global lines: 50% minimum (current: 63%)
- Collected from: `public/widgets/*-simple.js`

## Widget Test Patterns

### Availability Widget
Tests verify:
- Auto-initialization via `data-nomad-widget="availability"`
- Dark mode class application from `data-dark-mode="true"`
- Async rendering after network fallback
- Widget content appears in DOM

### Fleet Widget
Tests verify:
- Auto-initialization via `data-nomad-widget="fleet"`
- Booking URL attribute propagation (`data-booking-url`)
- Fleet grid and card rendering
- Multiple vehicle cards displayed

## Test Environment
- **Runner**: Jest 29
- **Environment**: jsdom (simulated browser DOM)
- **TypeScript**: ts-jest transform
- **Assertions**: Jest built-in matchers + @testing-library/dom queries

## Known Patterns

### Async Widget Loading
Widgets initialize asynchronously (200ms+ delay for fetch + fallback). Tests use `await new Promise(r => setTimeout(r, 600))` to allow completion.

### Fetch Polyfill
Tests stub `global.fetch` to trigger fallback data paths without actual network calls:
```typescript
(global as any).fetch = () => Promise.reject(new Error('stub network'));
```

## Future Enhancements
- [ ] Raise coverage threshold to 80%+
- [ ] Add React widget tests (after build)
- [ ] Mock timers for deterministic async tests
- [ ] Contract tests for API shapes
- [ ] Visual regression snapshots
- [ ] E2E widget embedding tests

## Debugging Failed Tests
1. Run with `--verbose` flag for detailed output
2. Check widget initialization logs (enable via `data-debug="true"`)
3. Verify DOM state with `console.log(document.body.innerHTML)`
4. Ensure async delays match widget timing

---
For test harness architecture details see `docs/TEST-HARNESS-PLAN.md`.
