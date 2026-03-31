# Roadmap: boilerplate-vercel-neon

## Overview

Starting from a bare Next.js scaffold, this roadmap completes the boilerplate in four phases: first making the project buildable and deployable, then wiring up the full CI/CD pipeline with tests, then building the design system, and finally integrating Neon Auth with Google OAuth. Each phase is independently verifiable and builds on the last.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Foundation** - Complete the scaffold so the project builds, passes lint, and passes type-check
- [ ] **Phase 2: CI/CD Pipeline** - Wire up Semantic Release, Commitlint, Husky, Vitest, Playwright, and GitHub Actions so CI is green on main
- [ ] **Phase 3: Design System** - 5-section CSS architecture, dark theme tokens, and reusable component classes with a styled landing page
- [ ] **Phase 4: Neon Auth** - Server + client auth instances, middleware, sign-in/sign-up pages, and session display on the landing page

## Phase Details

### Phase 1: Foundation
**Goal**: The project builds cleanly, passes lint and type-check, and a blank landing page is deployable to Vercel
**Depends on**: Nothing (first phase)
**Requirements**: SCAF-01, SCAF-02, SCAF-03, SCAF-04, SCAF-05, SCAF-06, SCAF-07
**Success Criteria** (what must be TRUE):
  1. `pnpm install` completes without errors and all required deps are present in package.json
  2. `pnpm lint` exits 0 with no errors
  3. `pnpm type-check` exits 0 with no errors
  4. `pnpm build` exits 0 and produces a valid Next.js build
  5. The default route renders a blank page with a heading visible in the browser
**Plans**: 2 plans

Plans:
- [ ] 01-01-PLAN.md — Add all dependencies, scripts, and engine constraints to package.json
- [ ] 01-02-PLAN.md — Scaffold blank landing page, globals.css, layout with Inter + JetBrains Mono fonts, next.config.ts APP_VERSION, and .gitignore exclusions

### Phase 2: CI/CD Pipeline
**Goal**: Every push to main/dev/staging runs a full automated pipeline — lint, type-check, build, unit tests, E2E tests, and Semantic Release — and all checks pass green
**Depends on**: Phase 1
**Requirements**: CICD-01, CICD-02, CICD-03, CICD-04, CICD-05, CICD-06, CICD-07, CICD-08, TEST-01, TEST-02, TEST-03, TEST-04
**Success Criteria** (what must be TRUE):
  1. Committing with a non-conventional message is rejected by the commit-msg hook
  2. Staged files are linted and formatted automatically on pre-commit
  3. `pnpm test:unit` runs and the smoke unit test for the home page passes
  4. `pnpm test:e2e` runs and the Playwright smoke test verifies the blank page loads
  5. Pushing a `feat:` commit to main triggers a GitHub Actions run that completes all steps and produces a version tag
**Plans**: 4 plans

Plans:
- [x] 02-01-PLAN.md — Configure Semantic Release (.releaserc.json), Commitlint, Husky hooks, lint-staged, and Prettier
- [x] 02-02-PLAN.md — Set up Vitest with jsdom + @testing-library/react and write the home page smoke test
- [x] 02-03-PLAN.md — Set up Playwright with chromium project, webServer config, and E2E smoke test
- [ ] 02-04-PLAN.md — Write GitHub Actions workflow covering lint → type-check → build → unit → E2E → semantic-release
**UI hint**: no

### Phase 3: Design System
**Goal**: A 5-section CSS architecture with dark theme tokens and reusable component classes is in place, and the landing page is updated to use them
**Depends on**: Phase 2
**Requirements**: STYL-01, STYL-02, STYL-03, STYL-04, STYL-05
**Success Criteria** (what must be TRUE):
  1. globals.css is structured into tokens, theme map, base, components, and utilities sections
  2. The dark background and warm orange accent (#e8734a) are visible on the landing page
  3. Tailwind utility classes generated from CSS variables work (e.g., `bg-background`, `text-accent`)
  4. btn-primary, btn-ghost, card, and input-field classes render correctly when applied to elements
  5. The landing page shows the app version number using the dark theme styling
**Plans**: TBD

Plans:
- [ ] 03-01: Build 5-section CSS architecture with dark theme tokens, @theme inline mapping, and component classes
- [ ] 03-02: Update landing page to use dark theme styling and display APP_VERSION
**UI hint**: yes

### Phase 4: Neon Auth
**Goal**: Users can sign in with Google OAuth, the app session is displayed on the landing page, and all routes are protected by middleware
**Depends on**: Phase 3
**Requirements**: AUTH-01, AUTH-02, AUTH-03, AUTH-04, AUTH-05, AUTH-06, AUTH-07, AUTH-08, AUTH-09, AUTH-10
**Success Criteria** (what must be TRUE):
  1. Visiting any route without a session redirects to /auth/sign-in
  2. The sign-in page shows a Google OAuth button; clicking it initiates the OAuth flow
  3. Setting the dev_skip_auth cookie bypasses auth redirects in local development
  4. After signing in, the landing page shows the authenticated user's name and a sign-out button
  5. Clicking sign-out clears the session and redirects back to /auth/sign-in
  6. Unit test for auth module loading passes; E2E smoke test confirms the sign-in page loads
**Plans**: TBD

Plans:
- [ ] 04-01: Create auth server instance, auth client instance, and API route handler
- [ ] 04-02: Implement middleware with route protection and dev-skip-auth cookie escape hatch
- [ ] 04-03: Build sign-in page (Google OAuth button + loading state) and sign-up redirect page
- [ ] 04-04: Update landing page with session display and sign-out, update unit + E2E tests
**UI hint**: yes

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 0/2 | Not started | - |
| 2. CI/CD Pipeline | 1/4 | In progress | - |
| 3. Design System | 0/2 | Not started | - |
| 4. Neon Auth | 0/4 | Not started | - |
