import { expect, test } from '@playwright/test';

test('combobox', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page.getByRole('combobox')).toHaveValue('cybertruck');
});

test('combobox with name', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page.getByRole('combobox', {name: 'vehicles'})).toHaveValue('cybertruck');
});
