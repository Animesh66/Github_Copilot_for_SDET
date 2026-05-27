import { test, expect } from './fixtures';

test('standard user can log in', async ({ loginPage, page }) => {
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);
  await expect(page.getByText('Products')).toBeVisible();
});

test('locked user sees a useful error', async ({ loginPage }) => {
  await loginPage.login('locked_out_user', 'secret_sauce');
  await loginPage.expectError('locked out');
});
