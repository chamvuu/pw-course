import { test, expect } from '@playwright/test';

test('Bài 3: Todo page', async ({ page }) => {

  await page.goto('https://material.playwrightvn.com/');
  await page.getByText('Bài học 3: Todo page').click();

  const input = page.locator('input');
  const addButton = page.locator('button:has-text("Add")');

  // Add 100 todo
  for (let i = 1; i <= 100; i++) {
    await input.fill(`Todo ${i}`);
    await addButton.click();
  }

  const todos = page.locator('ul li');

  // Verify 100 todo
  await expect(todos).toHaveCount(100);

});