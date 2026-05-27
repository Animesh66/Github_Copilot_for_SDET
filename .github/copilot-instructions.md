# Copilot Instructions for SDET

## Test Writing Rules
- Use Playwright's user-facing locators: `getByRole`, `getByLabel`, `getByPlaceholder`, `getByText`, `getByTestId`
- Never use XPath or CSS selectors unless absolutely no alternative exists
- Always prefer `data-test` attributes when available
- No hard waits (`page.waitForTimeout`). Use Playwright's built-in auto-waiting

## Assertion Rules
- Prefer web-first assertions: `expect(locator).toBeVisible()`, `toHaveText()`, `toContainText()`
- Every test must have at least one meaningful assertion
- Assert on user-visible outcomes, not implementation details

## Test Structure Rules
- Each test must be fully independent and isolated — no shared state between tests
- Use `beforeEach` for shared navigation/setup
- Use Page Object Model for all UI interactions
- Use fixtures for dependency injection of page objects

## Naming Conventions
- Test names: describe what the **user** can do, not the implementation
  - Good: `'standard user can log in'`
  - Bad: `'test login functionality'`
- Page Object methods: verb + noun (e.g. `login()`, `addToCart()`, `proceedToCheckout()`)
- Fixture names: camelCase noun (e.g. `loginPage`, `cartPage`)
