// @ts-check 
//....for automatic type checking when using JS in VS Code

const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');  //NAVIGATION

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/); //ASSERTION
});

//TEST ISOLATION
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click(); //INTERACTION

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

// TEST HOOKS: test.describe, test.beforeEach, test.afterEach, test.beforeAll etc