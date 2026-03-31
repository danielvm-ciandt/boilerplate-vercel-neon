# Architecture

**Analysis Date:** 2026-03-31

## Pattern Overview

**Overall:** Next.js 16 App Router (Server Components by default)

**Key Characteristics:**
- File-based routing using App Router conventions (`src/app`)
- Server-side rendering (SSR) as default pattern
- React 19 with Server Components support
- TypeScript-first with strict mode enabled
- Tailwind CSS v4 for styling
- React Compiler enabled for optimizations

## Layers

**Routing Layer:**
- Purpose: Define application routes and layouts
- Location: `src/app/`
- Contains: Layout definitions, route pages, server components
- Depends on: React, Next.js framework
- Used by: Browser requests

**Presentation Layer:**
- Purpose: Render UI components and layouts
- Location: `src/app/`
- Contains: Page components (`page.tsx`), layout components (`layout.tsx`)
- Depends on: React, Next.js Image component, Tailwind CSS
- Used by: Routing layer

**Styling Layer:**
- Purpose: Application-wide styling and theme configuration
- Location: `src/app/globals.css`
- Contains: CSS variables, color scheme definitions, Tailwind directives
- Depends on: Tailwind CSS v4
- Used by: All components via class-based styling

## Data Flow

**Page Request → Rendering:**

1. Browser makes HTTP request to route (e.g., `/`)
2. Next.js App Router matches route to file structure
3. `src/app/layout.tsx` (RootLayout) wraps the matched page
4. `src/app/page.tsx` (Home component) renders
5. Server Components execute on server, return HTML to client
6. Client receives hydrated React component
7. Tailwind CSS classes applied for visual presentation

**Component Tree:**

```
RootLayout (src/app/layout.tsx)
  └─ body
      └─ page.tsx (src/app/page.tsx)
          ├─ div (main container)
          ├─ main
          ├─ Image (Next.js optimized)
          ├─ h1, p (text content)
          └─ links (navigation)
```

**State Management:**

Currently none detected. The app uses only React component state implicitly through server-side rendering. No Redux, Zustand, Context API, or other state management visible.

## Key Abstractions

**RootLayout:**
- Purpose: Defines global HTML structure, font loading, metadata
- Examples: `src/app/layout.tsx`
- Pattern: Next.js Layout Component - wraps all routes
- Exports: Default function returning React.ReactNode
- Responsibility: Font loading (Geist Sans/Mono), HTML lang/meta, body structure

**Home Page:**
- Purpose: Landing page component
- Examples: `src/app/page.tsx`
- Pattern: React Server Component (default in App Router)
- Exports: Default Home function
- Responsibility: Display welcome content, call-to-action links

**Global Styles:**
- Purpose: CSS reset and theme variables
- Examples: `src/app/globals.css`
- Pattern: CSS with Tailwind directives and custom properties
- Responsibility: Color scheme, font definitions, Tailwind integration

## Entry Points

**Application Root:**
- Location: `src/app/layout.tsx`
- Triggers: Every page load/navigation
- Responsibilities:
  - Load Google fonts (Geist family)
  - Set HTML metadata (title, description)
  - Provide root layout wrapper
  - Apply font CSS variables
  - Render body with flex layout

**Default Route (`/`):**
- Location: `src/app/page.tsx`
- Triggers: GET request to `/`
- Responsibilities:
  - Import Next.js Image component for optimization
  - Render home page UI
  - Provide navigation to external resources

**Build Entry:**
- Location: `next.config.ts`
- Triggers: During `next build`
- Responsibilities:
  - Enable React Compiler optimization
  - Configure Next.js build behavior

## Error Handling

**Strategy:** Implicit Next.js defaults

**Patterns:**
- Not explicitly defined in current codebase
- Default error boundary handling by Next.js runtime
- Client-side errors caught by React Error Boundaries (if defined later)
- Server-side errors would render error page (not visible in this boilerplate)

## Cross-Cutting Concerns

**Logging:** Not implemented - no logging framework detected

**Validation:** Not implemented - no form validation or data validation layers

**Authentication:** Not implemented - no auth provider or middleware detected

**Environment Configuration:**

- TypeScript path aliases defined: `@/*` maps to `src/*`
- Next.js automatic environment variable prefixing with `NEXT_PUBLIC_*`
- ESLint extends Next.js core Web Vitals and TypeScript configs
- PostCSS configured for Tailwind CSS v4 processing

---

*Architecture analysis: 2026-03-31*
