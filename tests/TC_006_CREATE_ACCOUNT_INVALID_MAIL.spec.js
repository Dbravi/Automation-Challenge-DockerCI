// src/tests/accountCreationTest.js
import { test } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { HomePage } from "../pages/Home";
import { AccountPage } from "../pages/Account";

test("Check domain validation is correct - email (missing @)", async ({
  page,
}) => {
  const homePage = new HomePage(page);
  const accountPage = new AccountPage(page);
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const invalidEmail = faker.internet.email().replace("@", ""); // Invalid email with missing '@'
  const password = faker.internet.password(12, false, /[\w\d]/);

  await test.step("Navigate to the Create Account page", async () => {
    await homePage.goto();
    await homePage.navigateToCreateAccountPage();

    await test.step("Fill the form with invalid email and submit", async () => {
      await accountPage.fillAccountForm(
        firstName,
        lastName,
        invalidEmail,
        password
      );
      await accountPage.submitAccountForm();
      await test.step("Validate domain error message pops up", async () => {
        await accountPage.verifyEmailDomain();
      });
    });
  });
});
