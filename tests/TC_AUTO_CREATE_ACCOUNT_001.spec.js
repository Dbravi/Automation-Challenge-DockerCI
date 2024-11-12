// src/tests/accountCreationTest.js
import { test } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { HomePage } from "../pages/Home";
import { AccountPage } from "../pages/Account";

test("Account creation with randomized data", async ({ page }) => {
  // Create instances of the page objects
  const homePage = new HomePage(page);
  const accountPage = new AccountPage(page);

  // Generate random data
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email();
  const password = faker.internet.password(12, false, /[\w\d]/);

  //Go to HomePage
  await homePage.goto();

  // Navigate to Home Page and then to the Create Account page
  await homePage.navigateToCreateAccountPage();

  // Fill the account creation form
  await accountPage.fillAccountForm(firstName, lastName, email, password);

  // Submit the account creation form
  await accountPage.submitAccountForm();

  // Verify account creation success message
  await accountPage.verifyAccountCreated();

  // Verify that account details are displayed
  await accountPage.verifyAccountDetails(firstName, lastName, email);
});
