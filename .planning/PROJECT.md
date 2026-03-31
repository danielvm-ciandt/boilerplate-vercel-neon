# boilerplate-vercel-neon

## What This Is

A production-ready Next.js 16 + Neon Auth + Vercel boilerplate that ships a fully operational CI/CD pipeline from commit zero. The end state is a login page with Google OAuth + a landing page with a logout button, deployed through dev → preview → production via Vercel, with Semantic Release managing versioning automatically.

## Core Value

Every new project built from this boilerplate inherits a working CI/CD pipeline, authentication, and a design system on day one — no setup tax.

## Requirements

### Validated

- ✓ Next.js 16.2.1 scaffold with App Router — existing
- ✓ React 19.2.4 + TypeScript 5 strict mode — existing
- ✓ Tailwind CSS v4 + PostCSS configured — existing
- ✓ React Compiler enabled in next.config.ts — existing
- ✓ ESLint 9 with Next.js core-web-vitals + TypeScript rules — existing
- ✓ Basic App Router file structure (layout.tsx, page.tsx, globals.css) — existing
- ✓ `.gitignore` with standard Next.js exclusions — existing

### Validated

- ✓ Full package.json with all project dependencies and scripts (vitest, playwright, husky, semantic-release, commitlint, lint-staged, prettier, better-auth, @neondatabase/auth) — Validated in Phase 01: foundation
- ✓ Blank landing page with Inter + JetBrains Mono fonts, minimal globals.css, APP_VERSION injection — Validated in Phase 01: foundation

### Active

- [ ] Semantic Release configured with conventional commits (feat=minor, fix/perf/refactor/style=patch)
- [ ] Commitlint + Husky + lint-staged local quality gates
- [ ] Vitest unit test setup with @testing-library/react and jsdom
- [ ] Playwright E2E skeleton with smoke test
- [ ] GitHub Actions CI/CD pipeline (lint → type-check → build → unit tests → E2E → semantic-release)
- [ ] Vercel environment configuration (dev/staging/prod branches)
- [ ] 5-section design token system (tokens, theme map, base, components, utilities)
- [ ] Reusable component classes (btn-primary, btn-ghost, card, input-field)
- [ ] Neon Auth with Google OAuth (createNeonAuth + createAuthClient)
- [ ] Auth API route handler at /api/auth/[...path]
- [ ] Middleware protecting all routes (redirects to /auth/sign-in)
- [ ] Sign-in page (Google OAuth + dev-skip-auth mechanism)
- [ ] Sign-up page (redirects to sign-in — Google handles account creation)
- [ ] Landing page with session display + sign-out button

### Out of Scope

- Email/password authentication — Google OAuth only via Neon Auth; no email flow needed
- Real-time features — not relevant to a boilerplate foundation
- Multi-tenancy — single-user auth model is sufficient for v1
- Additional OAuth providers (GitHub, Apple, etc.) — Google is sufficient; add later per-project
- Admin dashboard — out of scope for this boilerplate baseline

## Context

- **Installation plan**: The `fixed_install.md` document defines the exact implementation approach: deploy a blank page through dev → preview → prod first to validate CI/CD, then add styling, then add Neon Auth on top.
- **Branch strategy**: `dev` → `staging` (rc releases) → `main` (production releases). Semantic Release runs on all three.
- **Commit convention**: `style:` commits trigger patch releases (non-standard — design changes are user-facing). `feat:` = minor, `fix:/perf:/refactor:` = patch, `docs:/chore:/test:/ci:` = no release.
- **Dev skip auth**: Middleware includes a `dev_skip_auth` cookie escape hatch for local development without Neon credentials.
- **Current state**: Phase 01 complete — full toolchain declared and installed, blank landing page with Inter + JetBrains Mono fonts, APP_VERSION injection, build/lint/type-check passing.

## Constraints

- **Tech stack**: Next.js 16.2.1 + React 19.2.4 + Tailwind v4 + pnpm@10.33.0 — locked in package.json
- **Auth provider**: Neon Auth (`@neondatabase/auth`) + Better Auth — no alternatives
- **Deployment**: Vercel for GitHub auto-deployment — no manual deploy commands in CI
- **Versioning**: Semantic Release from commit zero — version starts at 1.0.0 on first `feat:` push
- **Node version**: 22.x (aligns with GitHub Actions and Vercel runtimes)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| CI/CD pipeline before auth | Validate deployment works before adding complexity | — Pending |
| `style:` triggers patch release | CSS/design changes are user-facing in this boilerplate | — Pending |
| Google OAuth only (no email/password) | Simpler auth flow; Neon Auth handles account creation automatically | — Pending |
| Vercel for GitHub (not manual deploy) | Vercel handles deployment on push; CI only needs to run tests and semantic-release | — Pending |
| Dev skip auth cookie | Local dev without Neon credentials should remain unblocked | — Pending |
| Blank page first | Prove CI/CD pipeline works before adding any real content | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd:transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-03-31 after initialization*
