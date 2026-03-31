# Testing Patterns

**Analysis Date:** 2026-03-31

## Test Framework

**Runner:**
- No test framework currently configured
- Next.js supports Vitest, Jest, and other standard frameworks
- Recommended: Vitest for modern projects, Jest for compatibility

**Assertion Library:**
- Not configured; depends on chosen test framework
- Vitest: built-in expect()
- Jest: built-in expect()

**Run Commands:**
```bash
# Add test script to package.json when framework is configured
npm test                              # Run all tests
npm test -- --watch                   # Watch mode
npm test -- path/to/file.test.ts     # Single file
npm run test:coverage                 # Coverage report
```

**Current Status:**
- No test infrastructure installed
- package.json lacks test scripts
- Next.js dev/build/start commands available in scripts

## Test File Organization

**Location:**
- Not yet established
- Recommended: *.test.ts alongside source files
- Alternative: tests/ directory separate from src/

**Naming:**
- Recommended pattern for new tests: `*.test.ts` or `*.spec.ts`
- Example: `page.test.tsx` alongside `page.tsx`

**Structure:**
```
src/
  app/
    layout.tsx
    page.tsx
    (test files to be added)
  (utilities, components, services as project grows)
  (corresponding .test.ts files)
```

## Test Structure

**Suite Organization:**
```typescript
// Recommended pattern for Next.js projects
describe('Page', () => {
  describe('Home', () => {
    it('should render the home page', () => {
      // arrange
      // act
      // assert
    });

    it('should have proper metadata', () => {
      // test code
    });
  });
});
```

**Patterns:**
- Use beforeEach for per-test setup
- Use afterEach to clean up resources
- Arrange/act/assert pattern for clarity
- One primary assertion focus per test

## Mocking

**Framework:**
- Not yet configured
- Vitest recommended: vi.mock() for module mocking
- Jest alternative: jest.mock()

**Patterns:**
```typescript
// Recommended Vitest pattern
import { vi } from 'vitest';

vi.mock('next/image', () => ({
  default: ({ src, alt }: any) => <img src={src} alt={alt} />
}));

// Jest pattern (if chosen)
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: any) => <img src={src} alt={alt} />
}));
```

**What to Mock:**
- Next.js built-in modules (next/image, next/link, etc.)
- External API calls
- Environment variables
- Dynamic imports

**What NOT to Mock:**
- React core functionality
- Internal utility functions
- Business logic (unless testing error scenarios)

## Fixtures and Factories

**Test Data:**
```typescript
// Recommended: Factory functions in test files
function createTestMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    title: 'Test Page',
    description: 'Test description',
    ...overrides
  };
}

// Or simple constants for static data
const mockImageProps = {
  src: '/next.svg',
  alt: 'Test image',
  width: 100,
  height: 20
};
```

**Location:**
- Factory functions: inline in test file near usage
- Shared fixtures: tests/fixtures/ directory (when multi-file data needed)
- Mock data: inline when simple, factory when complex

## Coverage

**Requirements:**
- Not currently enforced
- Recommended: Start with unit tests for utilities, services
- Focus on critical business logic and edge cases

**Configuration:**
- When framework is added, configure coverage exclusions:
  - Exclude: *.test.ts, *.test.tsx
  - Exclude: next.config.ts, postcss.config.mjs
  - Exclude: dist/, .next/, node_modules/

**View Coverage:**
```bash
npm run test:coverage
open coverage/index.html  # or coverage/lcov-report/index.html
```

## Test Types

**Unit Tests:**
- Test individual functions/utilities in isolation
- Mock external dependencies and Next.js modules
- Fast execution (<100ms per test)
- Examples: utility functions, parsers, validators

**Integration Tests:**
- Test multiple modules together (e.g., component + hooks)
- Mock only external boundaries (API calls, file system)
- Examples: page rendering with data, service layer integration

**E2E Tests:**
- Currently not implemented
- Recommended framework: Playwright or Cypress
- Scope: full user workflows, navigation, form submission
- Location: e2e/ or tests/e2e/ separate from unit tests

## Common Patterns

**Testing React Components:**
```typescript
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('should render heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
```

**Async Testing:**
```typescript
it('should handle async operation', async () => {
  const result = await asyncFunction();
  expect(result).toBe('expected');
});
```

**Error Testing:**
```typescript
it('should throw on invalid input', () => {
  expect(() => functionCall(null)).toThrow('Invalid input');
});

// Async error
it('should reject on failure', async () => {
  await expect(asyncCall()).rejects.toThrow('error message');
});
```

**Snapshot Testing:**
- Not currently used
- Useful for component rendering, but prefer explicit assertions
- If used: store snapshots in `__snapshots__/` directory

## Setup Recommendations

When adding testing to this project:

1. **Install test framework:**
   ```bash
   npm install --save-dev vitest @testing-library/react @testing-library/dom @vitest/ui
   ```

2. **Create vitest.config.ts:**
   - Configure test globals (describe, it, expect)
   - Set up React component rendering
   - Mock Next.js modules

3. **Add test scripts to package.json:**
   - test, test:watch, test:coverage

4. **Create first test files:**
   - Start with `src/app/page.test.tsx`
   - Test component rendering and props

5. **Configure test environment:**
   - Use jsdom environment for component tests
   - Use node environment for utility tests

---

*Testing analysis: 2026-03-31*
*Update when test infrastructure is added*
