---
phase: 01-foundation
plan: "01"
subsystem: infra
tags: [pnpm, vitest, playwright, husky, prettier, semantic-release, commitlint, lint-staged, better-auth, neondatabase]

# Dependency graph
requires: []
provides:
  - Full package.json dependency manifest for the entire project
  - All tooling deps installed: vitest, playwright, husky, prettier, semantic-release, commitlint, lint-staged
  - Auth deps installed: better-auth, @neondatabase/auth, @vercel/functions
  - Scripts: type-check, test:unit, test:unit:watch, test:e2e, test:e2e:ui, prepare
  - engines block constraining node >=22.0.0 and pnpm >=10.0.0
  - node_modules populated via pnpm install
affects: [testing, ci, auth, linting, release]

# Tech tracking
tech-stack:
  added:
    - vitest ^3.1.1
    - "@playwright/test ^1.51.1"
    - husky ^9.1.7
    - prettier ^3.5.3
    - semantic-release ^24.2.3
    - commitlint ^19.8.0
    - lint-staged ^15.5.0
    - better-auth ^1.2.7
    - "@neondatabase/auth 0.2.0-beta.1"
    - "@vercel/functions ^2.0.0"
    - "@testing-library/react ^16.3.0"
    - "@vitejs/plugin-react ^4.3.4"
    - jsdom ^26.1.0
    - "@semantic-release/changelog ^6.0.3"
    - "@semantic-release/git ^10.0.1"
  patterns:
    - pnpm as package manager with lockfile committed
    - engines field enforcing runtime versions

key-files:
  created: []
  modified:
    - package.json
    - pnpm-lock.yaml

key-decisions:
  - "Used @neondatabase/auth 0.2.0-beta.1 (exact pin) because ^0.2.1 does not exist on npm — latest available is 0.2.0-beta.1"

patterns-established:
  - "pnpm workspaces with engines constraint enforcing node 22.x and pnpm 10.x"
  - "Conventional commit hooks wired via husky + commitlint prepare script"

requirements-completed: [SCAF-01]

# Metrics
duration: 2min
completed: "2026-03-31"
---

# Phase 01 Plan 01: Foundation Dependencies Summary

**Full toolchain dependency manifest (vitest, playwright, husky, semantic-release, better-auth, @neondatabase/auth) added to package.json and installed via pnpm**

## Performance

- **Duration:** 2 min
- **Started:** 2026-03-31T16:03:11Z
- **Completed:** 2026-03-31T16:05:29Z
- **Tasks:** 1 of 1
- **Files modified:** 2

## Accomplishments
- package.json now contains all 10 required packages: vitest, husky, prettier, semantic-release, @playwright/test, better-auth, @neondatabase/auth, @vercel/functions, lint-staged, commitlint
- All scripts added: type-check, test:unit, test:unit:watch, test:e2e, test:e2e:ui, prepare
- engines block added: node >=22.0.0, pnpm >=10.0.0
- pnpm install exits 0 with 979 packages resolved; husky prepare hook ran successfully

## Task Commits

Each task was committed atomically:

1. **Task 1: Rewrite package.json with all dependencies, scripts, and engines** - `6c158a6` (chore)

**Plan metadata:** _(added after SUMMARY commit)_

## Files Created/Modified
- `package.json` - Full dependency manifest with all tooling, auth, and engine constraints
- `pnpm-lock.yaml` - Updated lockfile with 979 resolved packages

## Decisions Made
- Pinned `@neondatabase/auth` to exact version `0.2.0-beta.1` because the plan specified `^0.2.1` which does not exist on npm — the latest available release is `0.2.0-beta.1`

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed @neondatabase/auth version constraint**
- **Found during:** Task 1 (rewrite package.json)
- **Issue:** Plan specified `"@neondatabase/auth": "^0.2.1"` but version 0.2.1 does not exist on npm. Latest release is `0.2.0-beta.1`
- **Fix:** Changed version to exact pin `"0.2.0-beta.1"`
- **Files modified:** package.json
- **Verification:** pnpm install exits 0, @neondatabase/auth present in node_modules
- **Committed in:** 6c158a6 (Task 1 commit)

---

**Total deviations:** 1 auto-fixed (1 version bug)
**Impact on plan:** Required fix — install would fail without it. No scope creep. All plan acceptance criteria met.

## Issues Encountered
None beyond the version fix documented above.

## User Setup Required
None — no external service configuration required for this plan.

## Next Phase Readiness
- All tooling dependencies available for Phase 01 Plan 02 (commitlint, husky, vitest, playwright configs)
- pnpm install is stable; no peer dependency conflicts
- No blockers

## Self-Check: PASSED

- FOUND: .planning/phases/01-foundation/01-01-SUMMARY.md
- FOUND: package.json (modified)
- FOUND: pnpm-lock.yaml (modified)
- FOUND: commit 6c158a6 (chore(01-01): add all project dependencies, scripts, and engines)
- FOUND: vitest in node_modules
- FOUND: better-auth in node_modules
- FOUND: @neondatabase/auth in node_modules

---
*Phase: 01-foundation*
*Completed: 2026-03-31*
