# Phase 2: CI/CD Pipeline - Context

**Gathered:** 2026-03-31
**Status:** Ready for planning

<domain>
## Phase Boundary

Wire up Semantic Release, Commitlint, Husky, Vitest, Playwright, and GitHub Actions so CI is green on main. Every push to main/dev/staging runs a full automated pipeline — lint, type-check, build, unit tests, E2E tests, and Semantic Release — and all checks pass green.

</domain>

<decisions>
## Implementation Decisions

### Semantic Release channels
- **D-01:** Branch channels — `main` (production releases), `staging` (prerelease: `rc`), `dev` (prerelease: `beta`)
- **D-02:** Version pattern: `1.0.0` on main → `1.0.0-rc.1` on staging → `1.0.0-beta.1` on dev
- **D-03:** `style:` commits trigger patch releases (non-standard, intentional — CSS/design changes are user-facing)
- **D-04:** `feat:` = minor, `fix:/perf:/refactor:` = patch, `docs:/chore:/test:/ci:` = no release
- **D-05:** Semantic Release only runs on push events (not PRs)
- **D-06:** `@semantic-release/changelog` + `@semantic-release/git` plugins included (already in devDependencies)

### Prettier
- **D-07:** `.prettierrc` with: `singleQuote: true`, `trailingComma: "es5"`, `printWidth: 100`, `tabWidth: 2`
- **D-08:** lint-staged runs both `eslint` and `prettier --write` on staged `.ts/.tsx/.js/.jsx/.mjs/.css` files

### Commitlint & Husky
- **D-09:** Separate `commitlint.config.ts` file (not inline in package.json) — uses `@commitlint/config-conventional`
- **D-10:** `.husky/pre-commit` runs lint-staged; `.husky/commit-msg` runs commitlint
- **D-11:** `prepare` script (`husky`) already in package.json — hooks install on `pnpm install`

### Vitest & Unit Tests
- **D-12:** `vitest.config.ts` with jsdom environment and `@testing-library/react`
- **D-13:** Test files colocated: `src/**/*.test.tsx` pattern
- **D-14:** Smoke unit test: `src/app/page.test.tsx` — verifies home page renders without crashing

### Playwright & E2E Tests
- **D-15:** `playwright.config.ts` with chromium project only
- **D-16:** E2E tests in `e2e/` directory at project root
- **D-17:** CI webServer uses `pnpm dev` (dev server, not built server) — faster CI, acceptable for smoke tests
- **D-18:** Smoke E2E test: `e2e/smoke.spec.ts` — verifies blank page loads at `/`

### GitHub Actions
- **D-19:** Single workflow file: `.github/workflows/ci.yml`
- **D-20:** Triggers: push to `main`, `dev`, `staging`; PRs to `main`
- **D-21:** Job steps in order: lint → type-check → build → unit tests → E2E → semantic-release
- **D-22:** Semantic Release step guarded by `if: github.event_name == 'push'`
- **D-23:** Runner: `ubuntu-latest`, Node 22.x, pnpm via `pnpm/action-setup`
- **D-24:** Vercel deploys on push via GitHub integration — CI does NOT run `vercel deploy` or need VERCEL_TOKEN
- **D-25:** `GITHUB_TOKEN` (built-in) is sufficient for semantic-release to create tags and update CHANGELOG.md (package is `private: true`, no npm publish needed)

### Claude's Discretion
- Exact pnpm cache configuration in GitHub Actions
- Whether to split CI into multiple jobs or run as a single job
- Playwright browser install caching strategy
- Exact `@testing-library/react` setup file details

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Requirements
- `.planning/REQUIREMENTS.md` §CI/CD — CICD-01 through CICD-08 (exact acceptance criteria per requirement)
- `.planning/REQUIREMENTS.md` §Testing — TEST-01 through TEST-04

### Project context
- `.planning/PROJECT.md` §Context — Branch strategy, commit convention, Semantic Release behavior
- `.planning/PROJECT.md` §Constraints — Node 22.x, pnpm@10.33.0, stack lock

### Codebase
- `package.json` — All devDependencies already declared (semantic-release, commitlint, husky, lint-staged, vitest, playwright, prettier); scripts already defined (test:unit, test:e2e, prepare)

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/app/page.tsx` — Home page component; the unit smoke test will import and render this
- `src/app/layout.tsx` — Root layout; needed for rendering context in unit tests

### Established Patterns
- ESLint flat config (`eslint.config.mjs`) — lint-staged must call `eslint` (not `eslint .`), matching the existing `pnpm lint` script
- TypeScript strict mode + ES2017 target — vitest config must align with tsconfig
- `@/*` path alias in tsconfig — vitest config needs `resolve.alias` to match

### Integration Points
- `package.json` `prepare` script already calls `husky` — hooks install automatically on `pnpm install`
- `package.json` scripts already define `test:unit` (vitest run) and `test:e2e` (playwright test) — CI workflow calls these directly
- No `.env` files needed — no environment variable setup required in CI for this phase

</code_context>

<specifics>
## Specific Ideas

No specific requirements beyond what's captured in decisions above — standard approaches apply.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 02-ci-cd-pipeline*
*Context gathered: 2026-03-31*
