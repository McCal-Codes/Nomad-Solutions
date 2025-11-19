# API Roadmap

Current state: Only a mock availability endpoint (`/api/availability`) returning seeded data from `src/lib/vehicles.ts`. No booking logic yet.

## Planned Endpoints
| Endpoint | Method | Purpose | Auth | Status |
|----------|-------|---------|------|--------|
| `/api/availability` | GET | Return fleet availability summary | none (public) | mock implemented |
| `/api/vehicles` | GET | Detailed vehicle listing + specs | none (public) | planned |
| `/api/booking/quote` | POST | Calculate rental quote (dates, mileage assumptions) | API key or session | planned |
| `/api/booking/confirm` | POST | Confirm booking & allocate vehicle | API key or session | planned |
| `/api/health` | GET | Basic uptime probe | none | planned |

## Data Shapes (Draft)
### Availability Response
```json
{
  "generatedAt": "2025-11-19T12:00:00Z",
  "vehicles": [
    { "id": "rv-1", "name": "RV One", "available": true },
    { "id": "rv-2", "name": "RV Two", "available": false }
  ]
}
```

### Quote Request
```json
{
  "vehicleId": "rv-1",
  "startDate": "2026-08-20",
  "endDate": "2026-08-30",
  "estimatedMiles": 420
}
```
### Quote Response
```json
{
  "vehicleId": "rv-1",
  "baseRate": 2100,
  "mileageEstimate": 420,
  "mileageCost": 0,
  "taxes": 210,
  "total": 2310,
  "currency": "USD"
}
```

### Booking Confirm Request (Draft)
```json
{
  "quoteId": "q_abc123",
  "customer": {
    "name": "Ada Lovelace",
    "email": "ada@example.com"
  },
  "paymentToken": "tok_test_123"
}
```

## Versioning
Each breaking change increments MAJOR per `docs/standards/versioning.md`. Initial real API release will start at `v1.0.0`.

## Authentication (Future)
- API keys for server-to-server booking confirmation.
- Optional public availability endpoints remain unauthenticated.
- Consider JWT sessions for authenticated fleet management dashboard.

## Error Format (Proposed)
```json
{
  "error": {
    "code": "BOOKING_CONFLICT",
    "message": "Vehicle no longer available for selected dates"
  }
}
```

## Performance Targets
- Availability response < 200ms p95.
- Quote calculation < 400ms p95.
- Booking confirmation < 800ms p95 (includes payment processor latency).

## Roadmap Notes
1. Introduce caching layer (in-memory or Redis) for frequent availability checks.
2. Add rate limiting to booking endpoints.
3. Provide webhook for booking status updates.

---
Update this document when any new endpoint is added or data shape changes.
