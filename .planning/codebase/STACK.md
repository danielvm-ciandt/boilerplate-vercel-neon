# Technology Stack

**Analysis Date:** 2026-03-31

## Languages

**Primary:**
- TypeScript 5.x - Entire codebase (src/, configuration files)
- JSX/TSX - React component syntax in `src/app/`

**Secondary:**
- JavaScript - Build configuration and tooling (`next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`)
- CSS - Styling via Tailwind CSS in `src/app/globals.css`

## Runtime

**Environment:**
- Node.js 22.x (current runtime, no .nvmrc specified)

**Package Manager:**
- pnpm (lockfile version 9.0)
- Lockfile: `pnpm-lock.yaml` (present)
- Workspace: `pnpm-workspace.yaml` configured

## Frameworks

**Core:**
- Next.js 16.2.1 - Full-stack React framework for App Router architecture, API routes, server components
- React 19.2.4 - UI component library and JSX rendering
- React-DOM 19.2.4 - React bindings for the browser DOM

**Styling:**
- Tailwind CSS 4.x - Utility-first CSS framework for responsive design
- @tailwindcss/postcss 4.x - PostCSS plugin for Tailwind CSS processing

**Linting & Code Quality:**
- ESLint 9.x - JavaScript/TypeScript linting
- eslint-config-next 16.2.1 - Next.js-specific ESLint configuration with TypeScript and Web Vitals rules
- Babel Plugin React Compiler 1.0.0 - React Compiler for optimizing React components (enabled in `next.config.ts`)

**Build & Development:**
- TypeScript Compiler (tsc) - Type checking and compilation
- Next.js Dev Server - `next dev` for local development
- Next.js Build System - `next build` for production builds

## Key Dependencies

**Critical:**
- next@16.2.1 - Framework runtime and build system
- react@19.2.4 - Core UI library (React 19 with new features)
- react-dom@19.2.4 - DOM rendering layer

**Type Definitions:**
- @types/node@20.x - Node.js type definitions for server-side code
- @types/react@19.x - React type definitions
- @types/react-dom@19.x - React-DOM type definitions

**Styling & Theming:**
- tailwindcss@4.x - Styling engine
- @tailwindcss/postcss@4.x - PostCSS integration for Tailwind

**Optimization:**
- babel-plugin-react-compiler@1.0.0 - Automatic React component memoization and optimizations
  - Enabled in `next.config.ts` via `reactCompiler: true`
  - Reduces unnecessary re-renders and improves bundle size

## Configuration

**Environment:**
- No `.env` files detected in codebase
- Configuration managed via Next.js defaults
- No environment variables required for basic operation

**Build Configuration:**
- `next.config.ts` - Next.js configuration with React Compiler enabled
- `tsconfig.json` - TypeScript compiler options with `strict: true`, ES2017 target, JSX support
- `eslint.config.mjs` - ESLint flat config with Next.js core-web-vitals and TypeScript rules
- `postcss.config.mjs` - PostCSS configuration for Tailwind CSS processing

**TypeScript:**
- Target: ES2017 (compatible with modern browsers and Node.js)
- Strict mode: Enabled
- Module resolution: bundler (for Next.js bundler)
- Path aliases: `@/*` maps to `./src/*`
- Isolated modules: Enabled for faster compilation

**Import Aliases:**
- `@/*` → `./src/*` - Standard path alias for cleaner imports throughout the codebase

## Platform Requirements

**Development:**
- Node.js 22.x recommended
- pnpm package manager (v9.0+)
- TypeScript 5.x
- Modern terminal with bash/zsh support

**Production:**
- Deployment target: Vercel (optimized for but not required)
- Node.js 22.x runtime support
- Static export capable for edge deployment
- Web server with Node.js support or edge runtime

---

*Stack analysis: 2026-03-31*
