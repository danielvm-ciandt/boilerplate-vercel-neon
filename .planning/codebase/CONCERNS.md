# Codebase Concerns

**Analysis Date:** 2026-03-31

## Tech Debt

**Boilerplate Content:**
- Issue: Stock Create Next App template code with placeholder content remains in codebase
- Files: `src/app/page.tsx`, `src/app/layout.tsx`
- Impact: Misleading to developers; directs users to Vercel/NextJS marketing pages rather than actual project goals
- Fix approach: Replace page.tsx and layout.tsx with project-specific content reflecting actual business logic

**Minimal Feature Structure:**
- Issue: Only two source files exist; no established patterns for routing, API endpoints, middleware, or server components
- Files: `src/app/`
- Impact: As project grows, developers lack reference implementations for common Next.js 16 patterns
- Fix approach: Create example implementations of API routes, middleware, and nested layouts as project grows

**Placeholder CSS Variables:**
- Issue: CSS uses generic color scheme and Geist font family as theme without project-specific branding
- Files: `src/app/globals.css`
- Impact: Hard-coded theme makes rebranding difficult; no design token system
- Fix approach: Implement CSS variable management or Tailwind configuration that references brand guidelines

## Known Issues

**Font Family Override in CSS:**
- Symptoms: `globals.css` sets `font-family: Arial, Helvetica, sans-serif` which conflicts with Geist fonts loaded in layout
- Files: `src/app/globals.css` (line 25), `src/app/layout.tsx` (lines 6-8, 10-11)
- Trigger: CSS rule applies generic fallback fonts, overriding Geist in some contexts
- Workaround: Use `font-sans` class from layout to ensure Geist is applied; avoid using bare `<body>` text without typography classes

**React Compiler Enabled Without Full Testing:**
- Symptoms: Babel React Compiler is enabled in `next.config.ts` but no tests verify it doesn't break component behavior
- Files: `next.config.ts` (line 5)
- Trigger: Affects all React components; if compiler has bugs, affects entire app
- Workaround: Run full test suite before deploying; monitor performance metrics for unexpected changes

## Security Considerations

**External Links to Vercel/NextJS Domains:**
- Risk: Page.tsx contains hard-coded marketing links to external Vercel/NextJS pages without rel="noopener noreferrer" on all links
- Files: `src/app/page.tsx` (lines 21-34, 40-42, 55-57)
- Current mitigation: Some links have `rel="noopener noreferrer"` (lines 42, 57) but pattern is not consistent
- Recommendations: Audit all external links; consider centralizing link configuration; remove placeholder marketing links before production

**TypeScript Configuration Allows JavaScript:**
- Risk: `tsconfig.json` has `allowJs: true` which permits untyped JavaScript files
- Files: `tsconfig.json` (line 5)
- Current mitigation: ESLint configured to catch issues
- Recommendations: Consider `allowJs: false` to enforce strict TypeScript; if JS is needed, create separate configuration

**No API Key or Secret Management**
- Risk: No evidence of environment variable validation or secrets management pattern
- Files: Missing `.env` validation, no examples in codebase
- Current mitigation: None - relies on developers following best practices
- Recommendations: Add `.env.example` with required variables; create validation module early in project lifecycle

## Performance Bottlenecks

**Image Without Dimensions on Home Page:**
- Problem: `Image` component on line 7 loads SVG without width/height metadata, may cause layout shift
- Files: `src/app/page.tsx` (lines 7-13)
- Cause: External SVG asset may not have intrinsic dimensions
- Improvement path: Add `width` and `height` props based on actual SVG dimensions or use `fill` with sized container

**Unoptimized Home Page Structure:**
- Problem: Page renders full flex layout with hardcoded max-width (3xl) and padding; not responsive to mobile viewports
- Files: `src/app/page.tsx` (lines 5-6)
- Cause: Static styling with `max-w-3xl` and `px-16` doesn't adapt well on small screens
- Improvement path: Use Tailwind responsive breakpoints (sm:, md:) consistently; test on actual mobile devices

## Fragile Areas

**Metadata Configuration:**
- Files: `src/app/layout.tsx` (lines 15-18)
- Why fragile: Placeholder title "Create Next App" and description will appear in search results and social sharing; needs immediate replacement
- Safe modification: Update metadata object early; create pattern for nested route-specific metadata
- Test coverage: No tests for metadata; manual verification needed

**Styling Dependencies on External Fonts:**
- Files: `src/app/layout.tsx` (lines 2-3, 6-13)
- Why fragile: Relies on `next/font/google` to load Geist fonts; if Google Fonts API becomes unavailable, fonts fail to load
- Safe modification: Test fallbacks; consider self-hosting critical fonts; monitor CDN performance
- Test coverage: No tests for font loading or fallbacks

**Empty Next.js Configuration:**
- Files: `next.config.ts` (lines 3-6)
- Why fragile: React compiler enabled but otherwise minimal config; adding features (i18n, experimental features) requires careful testing
- Safe modification: Keep config minimal until needed; test experimental features in isolation before merging
- Test coverage: No tests for build output or compiler configuration

## Scaling Limits

**Single Page Application Structure:**
- Current capacity: Handles basic marketing site; no API routes, database, or server-side logic
- Limit: Cannot support features requiring persistence, user authentication, or dynamic data
- Scaling path: Add `app/api/` routes; implement database layer (ORM/client); add authentication middleware; implement caching strategy

**No Content Organization System:**
- Current capacity: Single page only
- Limit: Adding navigation and multiple routes will require establishing conventions for page layout, metadata inheritance, and component organization
- Scaling path: Create routing structure with nested layouts; establish component library patterns; implement shared navigation layout

## Dependencies at Risk

**React Compiler Babel Plugin Instability:**
- Risk: `babel-plugin-react-compiler` version 1.0.0 is early release; breaking changes possible in future versions
- Impact: May prevent Next.js or React upgrades; could cause compilation failures with new patterns
- Migration plan: Pin version carefully; monitor GitHub releases; have rollback plan; test thoroughly before upgrading

**Tailwind CSS v4 with PostCSS Integration:**
- Risk: `@tailwindcss/postcss` v4 is new and may have compatibility issues with other PostCSS plugins
- Impact: CSS generation could fail with certain configuration combinations
- Migration plan: Test with various PostCSS plugins before adding more; document CSS pipeline; have manual CSS fallback

**Next.js 16 Rapid Release Cycle:**
- Risk: Next.js 16.2.1 is relatively recent; breaking changes expected in 17.x
- Impact: May require significant refactoring; experimental features in current version may be removed
- Migration plan: Keep deployment target on LTS or stable versions; test experimental features in separate branch; maintain dependency upgrade schedule

## Missing Critical Features

**No Error Handling or Error Pages:**
- Problem: No custom error boundary or error.tsx routes; global error handling missing
- Blocks: Users see default Next.js error pages; cannot customize error messages or log errors
- Recommendation: Add `error.tsx` and `global-error.tsx` routes; implement error boundary component; add error tracking/logging

**No Environment Configuration:**
- Problem: No `.env.example` or environment variable documentation
- Blocks: Developers cannot set up local development without guessing required variables
- Recommendation: Create `.env.example` with all required variables; document purpose of each; add validation

**No Build or Deployment Configuration:**
- Problem: `next.config.ts` is empty comment; no documentation on deployment process
- Blocks: Unclear how to configure for production; no build optimization documented
- Recommendation: Document build process; add deployment checklist; configure output formats and optimization settings

## Test Coverage Gaps

**No Tests for Layout Component:**
- What's not tested: RootLayout metadata, font loading, CSS variable application
- Files: `src/app/layout.tsx`
- Risk: Changes to metadata or font configuration could break SEO or rendering without detection
- Priority: High

**No Tests for Home Page:**
- What's not tested: Image rendering, responsive layout, link functionality, dark mode
- Files: `src/app/page.tsx`
- Risk: Styling breakage on mobile, broken links, missing accessibility attributes undetected
- Priority: High

**No Integration Tests:**
- What's not tested: Full page load, font loading, CSS application, JavaScript execution
- Files: All pages
- Risk: Development builds work but production builds fail; CDN failures undetected
- Priority: High

**No Build or Deployment Tests:**
- What's not tested: Next.js build process, static export, API route setup (when added), environment variable handling
- Files: Build configuration
- Risk: Deployment failures; missing build optimization; runtime errors in production
- Priority: Medium

---

*Concerns audit: 2026-03-31*
