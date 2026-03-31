import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from './page';

describe('Home page', () => {
  it('renders without crashing and shows the heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
    expect(screen.getByText('boilerplate-vercel-neon')).toBeDefined();
  });
});
