import { test, expect } from '@playwright/test';

test('smoke: home page loads and shows heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.getByText('boilerplate-vercel-neon')).toBeVisible();
});
