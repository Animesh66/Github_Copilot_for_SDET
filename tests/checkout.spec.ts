import { test, expect } from './fixtures';

// Part 5: These tests demonstrate common flakiness patterns.
// Ask Copilot to identify three possible root causes before changing any code.

test('user can add item to cart', async ({ loginPage, page }) => {
  await loginPage.login('standard_user', 'secret_sauce');

  await page.locator('.inventory_item').first().getByRole('button', { name: 'Add to cart' }).click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});

test('user can complete checkout', async ({ loginPage, page }) => {
  await loginPage.login('standard_user', 'secret_sauce');

  await page.locator('.inventory_item').first().getByRole('button', { name: 'Add to cart' }).click();
  await page.locator('.shopping_cart_link').click();
  await page.getByRole('button', { name: 'Checkout' }).click();

  await page.getByPlaceholder('First Name').fill('Test');
  await page.getByPlaceholder('Last Name').fill('User');
  await page.getByPlaceholder('Zip/Postal Code').fill('12345');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Finish' }).click();

  await expect(page.getByText('Thank you for your order!')).toBeVisible();
});
