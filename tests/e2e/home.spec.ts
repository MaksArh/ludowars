import { test, expect } from '@playwright/test';

test('should load homepage', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('LudoWars — empty shell')).toBeVisible();
});