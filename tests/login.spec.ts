import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('standard user can log in', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);
  await expect(page.getByText('Products')).toBeVisible();
});

test('locked user sees a useful error', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('locked_out_user', 'secret_sauce');
  await loginPage.expectError('locked out');
});
