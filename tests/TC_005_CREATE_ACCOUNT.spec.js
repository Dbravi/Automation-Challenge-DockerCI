// src/tests/accountCreationTest.js
import { test } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { HomePage } from "../pages/Home";
import { AccountPage } from "../pages/Account";

test("Account creation with randomized data", async ({ page }) => {
  const homePage = new HomePage(page);
  const accountPage = new AccountPage(page);
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email();
  const password = faker.internet.password(12, false, /[\w\d]/);

  await test.step("Navigate to homepage and create account section", async () => {
    await homePage.goto();
    await homePage.navigateToCreateAccountPage();
  });

  //
  await test.step("Fill and submit the account creation form whit random generated data", async () => {
    await accountPage.fillAccountForm(firstName, lastName, email, password);
    await accountPage.submitAccountForm();
  });

  await test.step("Verify account creation and correct account details", async () => {
    await accountPage.verifyAccountCreated();
    await accountPage.verifyAccountDetails(firstName, lastName, email);
  });
});
