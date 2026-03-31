# Requirements: boilerplate-vercel-neon

**Defined:** 2026-03-31
**Core Value:** Every new project built from this boilerplate inherits a working CI/CD pipeline, authentication, and a design system on day one — no setup tax.

## v1 Requirements

### Scaffold

- [x] **SCAF-01**: Full package.json with all dependencies and scripts (vitest, playwright, husky, semantic-release, commitlint, lint-staged, prettier, better-auth, @neondatabase/auth, @vercel/functions)
- [ ] **SCAF-02**: Blank default landing page (minimal — just heading + CI/CD pipeline message)
- [ ] **SCAF-03**: Minimal globals.css (Tailwind import + base body styles, no theme yet)
- [ ] **SCAF-04**: Layout uses Inter + JetBrains Mono Google fonts
- [ ] **SCAF-05**: next.config.ts with React Compiler enabled + APP_VERSION injection
- [ ] **SCAF-06**: TypeScript config matching spec (ES2017, strict, bundler resolution)
- [ ] **SCAF-07**: .gitignore with all required exclusions (env files, certs, CHANGELOG.md, coverage)

### CI/CD

- [x] **CICD-01**: Semantic Release configured (.releaserc.json) with style: patch rule
- [x] **CICD-02**: Commitlint enforces conventional commit types
- [x] **CICD-03**: Husky pre-commit hook runs lint-staged
- [x] **CICD-04**: Husky commit-msg hook runs commitlint
- [x] **CICD-05**: lint-staged runs eslint + prettier on staged files
- [ ] **CICD-06**: GitHub Actions workflow: lint → type-check → build → unit tests → E2E → semantic-release
- [ ] **CICD-07**: CI runs on push to main/dev/staging and PRs to main
- [ ] **CICD-08**: Semantic Release only runs on push events (not PRs)

### Testing

- [ ] **TEST-01**: Vitest configured with jsdom environment and @testing-library/react
- [ ] **TEST-02**: Smoke unit test for blank default home page passes
- [ ] **TEST-03**: Playwright configured with chromium project and webServer
- [ ] **TEST-04**: E2E smoke test verifies blank default page loads

### Styling

- [ ] **STYL-01**: 5-section CSS architecture (tokens, theme map, base, components, utilities)
- [ ] **STYL-02**: Dark theme with warm orange accent (#e8734a)
- [ ] **STYL-03**: Tailwind @theme inline maps all CSS variables to utility classes
- [ ] **STYL-04**: Reusable component classes: btn-primary, btn-ghost, card, input-field
- [ ] **STYL-05**: Landing page updated to use dark theme styling with version display

### Authentication

- [ ] **AUTH-01**: Neon Auth server instance (createNeonAuth) in src/lib/auth/server.ts
- [ ] **AUTH-02**: Auth client instance (createAuthClient) in src/lib/auth/client.ts
- [ ] **AUTH-03**: Auth API route handler at /api/auth/[...path]
- [ ] **AUTH-04**: Middleware protects all routes, redirects to /auth/sign-in
- [ ] **AUTH-05**: Sign-in page with Google OAuth button and loading state
- [ ] **AUTH-06**: Dev-skip-auth cookie mechanism for local development without Neon credentials
- [ ] **AUTH-07**: Sign-up page redirects to sign-in (Google handles account creation)
- [ ] **AUTH-08**: Landing page shows authenticated user name + sign-out button
- [ ] **AUTH-09**: Sign-out button clears session and redirects to sign-in
- [ ] **AUTH-10**: Unit test covers auth module loading, E2E smoke test covers sign-in page

## v2 Requirements

### Developer Experience

- **DX-01**: Additional OAuth providers (GitHub, Apple) — add per-project as needed
- **DX-02**: Email/password authentication option — not needed with Google-only flow
- **DX-03**: Dark/light mode toggle — single dark theme sufficient for boilerplate

### Observability

- **OBS-01**: Error tracking integration (Sentry/similar) — add per-project
- **OBS-02**: Analytics integration — add per-project

## Out of Scope

| Feature | Reason |
|---------|--------|
| Admin dashboard | Not part of boilerplate baseline — add per-project |
| Real-time features (WebSockets) | Not relevant to auth/CI/CD boilerplate |
| Database schema / ORM | Auth only uses Neon Auth managed tables |
| Multi-tenancy | Single-user auth model is the right baseline |
| Email/password auth | Google OAuth only via Neon Auth; simpler and sufficient |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| SCAF-01 | Phase 1 | Complete |
| SCAF-02 | Phase 1 | Pending |
| SCAF-03 | Phase 1 | Pending |
| SCAF-04 | Phase 1 | Pending |
| SCAF-05 | Phase 1 | Pending |
| SCAF-06 | Phase 1 | Pending |
| SCAF-07 | Phase 1 | Pending |
| CICD-01 | Phase 2 | Complete |
| CICD-02 | Phase 2 | Complete |
| CICD-03 | Phase 2 | Complete |
| CICD-04 | Phase 2 | Complete |
| CICD-05 | Phase 2 | Complete |
| CICD-06 | Phase 2 | Pending |
| CICD-07 | Phase 2 | Pending |
| CICD-08 | Phase 2 | Pending |
| TEST-01 | Phase 2 | Pending |
| TEST-02 | Phase 2 | Pending |
| TEST-03 | Phase 2 | Pending |
| TEST-04 | Phase 2 | Pending |
| STYL-01 | Phase 3 | Pending |
| STYL-02 | Phase 3 | Pending |
| STYL-03 | Phase 3 | Pending |
| STYL-04 | Phase 3 | Pending |
| STYL-05 | Phase 3 | Pending |
| AUTH-01 | Phase 4 | Pending |
| AUTH-02 | Phase 4 | Pending |
| AUTH-03 | Phase 4 | Pending |
| AUTH-04 | Phase 4 | Pending |
| AUTH-05 | Phase 4 | Pending |
| AUTH-06 | Phase 4 | Pending |
| AUTH-07 | Phase 4 | Pending |
| AUTH-08 | Phase 4 | Pending |
| AUTH-09 | Phase 4 | Pending |
| AUTH-10 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 29 total
- Mapped to phases: 29
- Unmapped: 0 ✓

---
*Requirements defined: 2026-03-31*
*Last updated: 2026-03-31 after initial definition*
