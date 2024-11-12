import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test("test", async ({ page }) => {
  // Navigate to the site
  await page.goto("https://magento-2.showcase-wallee.com/");

  // Click on 'Create an Account' link
  await page.getByRole("link", { name: "Create an Account" }).click();

  // Generate random data
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email();
  const password = faker.internet.password(12, false, /[\w\d]/);

  // Fill out the form with randomized data
  await page.getByLabel("First Name").click();
  await page.getByLabel("First Name").fill(firstName);

  await page.getByLabel("Last Name").click();
  await page.getByLabel("Last Name").fill(lastName);

  await page.getByLabel("Email", { exact: true }).click();
  await page.getByLabel("Email", { exact: true }).fill(email);

  await page.getByRole("textbox", { name: "Password*" }).click();
  await page.getByRole("textbox", { name: "Password*" }).fill(password);

  await page.getByLabel("Confirm Password").click();
  await page.getByLabel("Confirm Password").fill(password); // Reusing the same password

  // Submit the form
  await page.getByRole("button", { name: "Create an Account" }).click();

  // Assert successful registration message
  await expect(page.locator("#maincontent")).toContainText(
    "Thank you for registering with Main Website Store."
  );

  // Assert that the account info is displayed
  await expect(page.locator("#maincontent")).toContainText(
    `${firstName} ${lastName} ${email}`
  );
});
