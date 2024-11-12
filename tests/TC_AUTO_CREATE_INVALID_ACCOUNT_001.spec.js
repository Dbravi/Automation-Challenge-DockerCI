// src/tests/accountCreationTest.js
import { test } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { HomePage } from "../pages/Home";
import { AccountPage } from "../pages/Account";

test("Account creation with randomized data and invalid email (missing @)", async ({
  page,
}) => {
  // Create instances of the page objects
  const homePage = new HomePage(page);
  const accountPage = new AccountPage(page);

  // Generate random data
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email(); // Valid email for the first case
  const invalidEmail = faker.internet.email().replace("@", ""); // Invalid email with missing '@'
  const password = faker.internet.password(12, false, /[\w\d]/);

  // Go to HomePage
  await homePage.goto();

  // Navigate to the Create Account page
  await homePage.navigateToCreateAccountPage();

  // Account creation with invalid email (missing '@')
  // Navigate again to Create Account page
  await homePage.navigateToCreateAccountPage();

  // Fill the form with invalid email and submit
  await accountPage.fillAccountForm(
    firstName,
    lastName,
    invalidEmail,
    password
  );
  await accountPage.submitAccountForm();

  // Verify error message for invalid email
  await accountPage.verifyEmailDomain();
});
