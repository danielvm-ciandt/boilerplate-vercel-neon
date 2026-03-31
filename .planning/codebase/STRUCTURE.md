# Codebase Structure

**Analysis Date:** 2026-03-31

## Directory Layout

```
boilerplate-vercel-neon/
├── src/                    # Application source code
│   └── app/               # Next.js App Router directory
│       ├── layout.tsx     # Root layout wrapper
│       ├── page.tsx       # Home page (route: /)
│       ├── globals.css    # Global styles and theme
│       └── favicon.ico    # Favicon asset
├── public/                # Static assets served at root
│   ├── next.svg
│   ├── vercel.svg
│   ├── globe.svg
│   ├── window.svg
│   └── file.svg
├── .planning/             # GSD planning documents (generated)
│   └── codebase/         # This directory
├── eslint.config.mjs      # ESLint configuration (flat config)
├── next.config.ts        # Next.js build configuration
├── postcss.config.mjs    # PostCSS/Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies and scripts
├── pnpm-lock.yaml        # Dependency lock file (pnpm)
└── README.md             # Project documentation
```

## Directory Purposes

**`src/`:**
- Purpose: All application source code
- Contains: Application logic, components, styles
- Key files: Everything in App Router below

**`src/app/`:**
- Purpose: Next.js App Router - file-based routing and layouts
- Contains: Page components, layout components, static assets (favicon)
- Key files: `layout.tsx`, `page.tsx`, `globals.css`
- Pattern: Each `.tsx` file = route segment; `layout.tsx` = wrapper; `page.tsx` = page content

**`public/`:**
- Purpose: Static assets served at root URL
- Contains: SVG files (branding), favicon
- Accessed as: `/next.svg`, `/vercel.svg`, `/globe.svg`, etc.
- Note: Not imported in code; served directly by Next.js

## Key File Locations

**Entry Points:**

- `src/app/layout.tsx`: Root HTML layout, metadata, font loading
  - Exports: RootLayout component
  - Wraps: All pages in the application
  - Configures: Metadata, HTML lang, fonts, body CSS classes

- `src/app/page.tsx`: Home page (route `/`)
  - Exports: Home component
  - Purpose: Landing page with Next.js welcome content

**Configuration:**

- `next.config.ts`: Next.js build and runtime configuration
  - Enables: React Compiler (`reactCompiler: true`)
  - Purpose: Optimize component rendering

- `tsconfig.json`: TypeScript compiler options
  - Path aliases: `@/*` → `src/*`
  - Strict mode: enabled (`"strict": true`)
  - Target: ES2017
  - JSX: React 19 (`react-jsx`)

- `postcss.config.mjs`: CSS processing pipeline
  - Plugins: `@tailwindcss/postcss` for Tailwind CSS v4

- `eslint.config.mjs`: Linting rules
  - Extends: `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
  - Format: Flat config (ESLint 9+)

**Styling:**

- `src/app/globals.css`: Global styles
  - Imports Tailwind CSS (`@import "tailwindcss"`)
  - Defines CSS variables: `--background`, `--foreground`, `--font-geist-sans`, `--font-geist-mono`
  - Dark mode support: Uses `@media (prefers-color-scheme: dark)`
  - Theme configuration: `@theme inline` block

## Naming Conventions

**Files:**

- Layout files: `layout.tsx` - describes component structure at segment level
- Page files: `page.tsx` - the actual content of a route
- Style files: `globals.css` - global styles; lowercase with `.css` extension
- Config files: kebab-case (e.g., `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`)

**Directories:**

- Feature directories: `src/app/[feature-name]/` - one directory per route segment
- App Router: `src/app/` is the reserved routing directory

**Components:**

- Format: PascalCase (e.g., `RootLayout`, `Home`)
- Default exports from `.tsx` files
- No component file separate from page/layout

**TypeScript/Variables:**

- Type imports: `import type { TypeName } from "next"`
- CSS classes: camelCase in className prop, or Tailwind utility classes (kebab-case)
- CSS variables: kebab-case (e.g., `--font-geist-sans`)

## Where to Add New Code

**New Route/Page:**

1. Create directory: `src/app/[route-name]/`
2. Add file: `src/app/[route-name]/page.tsx`
3. Pattern:
   ```typescript
   export default function PageName() {
     return <div>Content</div>;
   }
   ```
4. Test via `http://localhost:3000/[route-name]`

**New Layout Wrapper (for specific routes):**

1. Create in segment directory: `src/app/[feature]/layout.tsx`
2. Pattern:
   ```typescript
   import type { ReactNode } from "react";

   export default function FeatureLayout({
     children,
   }: {
     children: ReactNode;
   }) {
     return <div className="...">{children}</div>;
   }
   ```
3. This will wrap all routes under `src/app/[feature]/`

**New Component (reusable):**

Since no dedicated `components/` directory exists, two options:

1. **Inline in layout.tsx or page.tsx** - for small components used once
2. **Create components directory** - recommend adding `src/components/` for shared UI:
   ```
   src/components/
   ├── Button.tsx
   ├── Header.tsx
   └── Footer.tsx
   ```
   Then import in pages/layouts:
   ```typescript
   import Button from "@/components/Button";
   ```

**New Styles:**

- Global styles: Add selectors to `src/app/globals.css`
- Component-specific: Use inline Tailwind classes in JSX
- CSS Modules: Create `[filename].module.css` and import:
  ```typescript
  import styles from "./styles.module.css";
  ```

**Server Actions (for forms/mutations):**

Create `src/app/actions.ts` or co-locate with pages:
```typescript
"use server"

export async function updateData(formData: FormData) {
  // Server-side logic
}
```

## Special Directories

**`.next/`:**
- Purpose: Build output directory
- Generated: Yes (during `next build`)
- Committed: No (in `.gitignore`)
- Contains: Compiled JavaScript, static files, server functions

**`.planning/`:**
- Purpose: GSD (Get Shit Done) planning documents
- Generated: Yes (by GSD commands)
- Committed: Usually yes (stores analysis and plans)
- Contains: ARCHITECTURE.md, STRUCTURE.md, CONVENTIONS.md, etc.

**`node_modules/`:**
- Purpose: Installed dependencies
- Generated: Yes (by `pnpm install`)
- Committed: No (in `.gitignore`)
- Contains: All npm packages including Next.js, React, Tailwind CSS

**`public/`:**
- Purpose: Static assets
- Generated: No (hand-managed)
- Committed: Yes
- Contains: Favicon, logos, SVGs

## Build and Development Structure

**Development Server:**

```bash
pnpm dev
# Runs: next dev
# Output: Running on http://localhost:3000
# Hot reload: Yes (Fast Refresh)
# Watches: src/ directory
```

**Production Build:**

```bash
pnpm build
# Runs: next build
# Output: .next/ directory with optimized bundles
# Compilation: TypeScript → JavaScript
# Optimization: React Compiler enabled
```

**Serving Built App:**

```bash
pnpm start
# Runs: next start
# Requires: previous pnpm build
# Output: Serves from .next/
```

**Linting:**

```bash
pnpm lint
# Runs: eslint
# Config: eslint.config.mjs
# Scope: Current implementation checks src/ by default
```

---

*Structure analysis: 2026-03-31*
