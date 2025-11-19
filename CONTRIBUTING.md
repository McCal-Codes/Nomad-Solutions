# Contributing

Thank you for helping improve Nomad Solutions! This guide covers workflow, commit style, and documentation expectations.

## 1. Branching Strategy
- `main` stays deployable.
- Feature branches: `feat/<short-kebab-description>`
- Fix branches: `fix/<short-kebab-description>`
- Docs only: `docs/<area>`

## 2. Commit Style (Conventional Commits)
Format: `<type>(scope): message`

Common types:
- `feat`: new user‑facing functionality
- `fix`: bug fix
- `docs`: documentation changes only
- `refactor`: code restructure without behavior change
- `perf`: performance improvement
- `test`: adding or adjusting tests
- `chore`: tooling/config tasks

Examples:
```
feat(widget): dark-mode attribute for availability widget
fix(api): null fleet data handling
docs(embedding): clarify Wix instructions
```

## 3. Pull Requests
- Keep PRs focused: one logical change set.
- Add screenshots for UI changes (light & dark mode).
- Note any bundle size impact for widgets (> +5KB simple version is a flag).
- Reference related documentation updates.

## 4. Documentation Rules
- Update `README.md` matrix if adding/removing widgets.
- Add or extend guides instead of duplicating content.
- Cross‑link rather than copy large sections.
- Keep simple widget files <10KB (goal) – move complexity to React bundle if exceeded.

## 5. Accessibility & Performance
Before merging widgets or components:
- Keyboard navigation (Tab / Shift+Tab) works logically.
- Color contrast meets WCAG AA.
- No layout shift on first interaction.
- Avoid blocking main thread >100ms in simple widgets.

## 6. Testing (Future Roadmap)
When tests are added:
- Unit tests for data transforms.
- Light integration tests for API route handlers.
- Visual regression / Lighthouse snapshot for performance.

## 7. Versioning
Widget versions follow semantic versioning (see `docs/standards/versioning.md`). Increment:
- MAJOR: Breaking embed/API change.
- MINOR: New feature backward compatible.
- PATCH: Bug fix / internal improvement.

## 8. Security & External Scripts
- No inline event handlers (favor data attributes).
- No dynamic script injection from untrusted sources.
- Validate external API responses (shape + types) before render.

## 9. Review Checklist
| Item | Confirmed |
|------|-----------|
| Docs updated | ✅ / ❌ |
| A11y checks pass | ✅ / ❌ |
| Performance acceptable | ✅ / ❌ |
| Bundle size impact noted | ✅ / ❌ |
| Commit messages conform | ✅ / ❌ |

## 10. Communication
Use clear, concise PR descriptions. Highlight trade‑offs & future follow‑ups. Prefer issues for multi‑step enhancements.

---
Welcome aboard – build small, fast, and accessible experiences. 🚐🔥
