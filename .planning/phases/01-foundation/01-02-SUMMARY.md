---
phase: 01-foundation
plan: 02
subsystem: ui
tags: [next.js, tailwind, fonts, inter, jetbrains-mono, eslint, gitignore]

# Dependency graph
requires:
  - phase: 01-01
    provides: package.json with all dependencies installed and scripts configured
provides:
  - Blank landing page with CI/CD headline (src/app/page.tsx)
  - Minimal globals.css with only Tailwind import and body font-family
  - Root layout with Inter + JetBrains Mono fonts via next/font/google variable injection
  - APP_VERSION build-time injection via next.config.ts env block
  - .gitignore with certificate, CHANGELOG.md, and coverage/ exclusions
  - ESLint config excluding tooling directories (.claude, .cursor, .planning)
  - Passing pnpm build, pnpm lint, pnpm type-check
affects: [02-styling, 03-auth, any phase that reads layout.tsx or globals.css]

# Tech tracking
tech-stack:
  added: [next/font/google (Inter, JetBrains_Mono)]
  patterns: [CSS variable font injection via variable option, APP_VERSION from npm_package_version]

key-files:
  created: []
  modified:
    - src/app/page.tsx
    - src/app/globals.css
    - src/app/layout.tsx
    - next.config.ts
    - .gitignore
    - eslint.config.mjs

key-decisions:
  - "Use variable option for both fonts so CSS custom properties are globally available"
  - "Exclude tooling dirs (.claude/.cursor/.planning) from ESLint to prevent false positives on CJS tool files"

patterns-established:
  - "Font injection: use variable option, apply both variables to html element, reference via CSS var() in globals.css"
  - "APP_VERSION: injected at build time via process.env.npm_package_version in next.config.ts env block"

requirements-completed: [SCAF-02, SCAF-03, SCAF-04, SCAF-05, SCAF-06, SCAF-07]

# Metrics
duration: 3min
completed: 2026-03-31
---

# Phase 01 Plan 02: Scaffold Cleanup Summary

**Blank landing page with Inter + JetBrains Mono fonts, APP_VERSION build injection, and clean pnpm build/lint/type-check**

## Performance

- **Duration:** ~3 min
- **Started:** 2026-03-31T16:30:03Z
- **Completed:** 2026-03-31T16:32:46Z
- **Tasks:** 3
- **Files modified:** 6

## Accomplishments

- Replaced default Next.js scaffold page with minimal CI/CD landing page (no Image imports, no external deps)
- Reset globals.css to Tailwind import + body font-family only — all Geist/theme-variable content removed
- Updated root layout to Inter + JetBrains_Mono from next/font/google using CSS variable injection
- Added APP_VERSION build-time injection via npm_package_version in next.config.ts
- Patched .gitignore with *.crt, *.key, CHANGELOG.md, coverage/ exclusions
- Confirmed pnpm type-check, pnpm lint, pnpm build all exit 0

## Task Commits

Each task was committed atomically:

1. **Task 1: Replace page.tsx + reset globals.css** - `99da5cf` (feat)
2. **Task 2: Update layout.tsx, next.config.ts, .gitignore** - `2017e66` (feat)
3. **Task 3 deviation: Fix ESLint config to exclude tooling dirs** - `03f7c72` (fix)

**Plan metadata:** _(pending final docs commit)_

## Files Created/Modified

- `src/app/page.tsx` - Minimal blank landing page with heading and CI/CD message
- `src/app/globals.css` - Tailwind import + body font-family only (no theme vars)
- `src/app/layout.tsx` - Root layout with Inter + JetBrains_Mono variable font injection
- `next.config.ts` - Added env.APP_VERSION = process.env.npm_package_version
- `.gitignore` - Added *.crt, *.key, CHANGELOG.md, coverage/ exclusions
- `eslint.config.mjs` - Added globalIgnores for .claude/, .cursor/, .planning/ directories

## Decisions Made

- Used `variable` option (not `className`) for both fonts so CSS custom properties are available globally via `--font-inter` and `--font-jetbrains-mono`
- Excluded `.claude/`, `.cursor/`, `.planning/` from ESLint — these contain CJS tooling files that would produce false-positive @typescript-eslint/no-require-imports errors

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] ESLint picking up CJS tooling files in .claude/ and .cursor/**
- **Found during:** Task 3 (build verification)
- **Issue:** `pnpm lint` failed with hundreds of `@typescript-eslint/no-require-imports` errors from `.claude/get-shit-done/bin/*.cjs` and `.cursor/get-shit-done/bin/*.cjs` — CJS tooling files that are not project source
- **Fix:** Added `.claude/**`, `.cursor/**`, `.planning/**` to `globalIgnores` in `eslint.config.mjs`
- **Files modified:** eslint.config.mjs
- **Verification:** `pnpm lint` exits 0 after fix
- **Committed in:** `03f7c72` (separate fix commit)

---

**Total deviations:** 1 auto-fixed (1 blocking)
**Impact on plan:** Required to achieve the plan's success criterion of `pnpm lint` exiting 0. No scope creep — only excluded non-source tooling directories.

## Issues Encountered

None beyond the ESLint deviation documented above.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Blank-slate foundation is complete: build, lint, and type-check all pass
- Font variables (--font-inter, --font-jetbrains-mono) are available globally for the styling phase
- APP_VERSION is available as process.env.APP_VERSION in all client and server code
- Ready for Phase 2 (CI/CD pipeline) or Phase 3 (styling/design tokens)

---
*Phase: 01-foundation*
*Completed: 2026-03-31*

## Self-Check: PASSED

- FOUND: src/app/page.tsx
- FOUND: src/app/globals.css
- FOUND: src/app/layout.tsx
- FOUND: next.config.ts
- FOUND: .gitignore
- FOUND: eslint.config.mjs
- FOUND: .next/BUILD_ID
- FOUND commit: 99da5cf (Task 1)
- FOUND commit: 2017e66 (Task 2)
- FOUND commit: 03f7c72 (Task 3 deviation fix)
