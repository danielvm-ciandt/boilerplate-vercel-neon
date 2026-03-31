# Coding Conventions

**Analysis Date:** 2026-03-31

## Naming Patterns

**Files:**
- kebab-case for configuration files (postcss.config.mjs, next.config.ts)
- PascalCase.tsx for React components (layout.tsx, page.tsx)
- .mjs extension for ES modules in config
- .ts extension for TypeScript configuration

**Functions:**
- camelCase for all functions
- No special prefix for async functions
- React components are exported as default exports

**Variables:**
- camelCase for variables and constants
- String literals use double quotes in JSX attributes
- CSS custom properties use kebab-case with double hyphens (--font-geist-sans, --background)

**Types:**
- PascalCase for TypeScript types (Metadata, Readonly)
- React.ReactNode for generic component children typing
- Interface naming follows PascalCase convention

## Code Style

**Formatting:**
- No explicit Prettier config detected (uses Next.js defaults)
- Likely uses 2-space indentation (standard Next.js)
- Semicolons used consistently
- Template literals for dynamic strings in JSX

**Linting:**
- ESLint with flat config (eslint.config.mjs)
- Extends eslint-config-next/core-web-vitals
- Extends eslint-config-next/typescript
- Global ignores: .next/, out/, build/, next-env.d.ts
- Run: npm run lint

## Import Organization

**Order:**
1. Next.js/React framework imports (next/*, react, react-dom)
2. Type imports (import type {})
3. CSS/stylesheet imports
4. Local relative imports

**Type Imports:**
- Use `import type { Metadata }` syntax for TypeScript types
- Separate from runtime imports

**Path Aliases:**
- @/* maps to ./src/ (defined in tsconfig.json)
- Typically used for internal modules

## Error Handling

**Patterns:**
- Not extensively demonstrated in boilerplate
- Framework relies on Next.js error boundaries for UI errors
- TypeScript strict mode enabled for compile-time checking

## Logging

**Framework:**
- No logging library configured
- Console usage for development only

**Patterns:**
- Relies on Next.js built-in logging for development server
- No structured logging in place

## Comments

**When to Comment:**
- Minimal comments in boilerplate code
- Code is self-documenting where possible

**JSDoc/TSDoc:**
- Not demonstrated in current codebase
- Recommended for custom components and utilities

## Function Design

**Size:**
- Components kept minimal and focused
- Layout.tsx defines root structure (34 lines)
- Page.tsx is single-component export (65 lines)

**Parameters:**
- Components use destructuring in parameter list
- Layout receives typed children prop: `{ children: React.ReactNode }`

**Return Values:**
- React components return JSX
- Explicit return statements used

## Module Design

**Exports:**
- Default export for React components (export default function)
- Page and layout files use default exports per Next.js convention
- Metadata exported as named const (export const metadata)

**Barrel Files:**
- Not used in minimal boilerplate
- Can be introduced as project grows

---

*Convention analysis: 2026-03-31*
*Update when patterns change*
