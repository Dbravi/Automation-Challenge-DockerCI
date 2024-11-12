import { expect } from "@playwright/test";

expect;
export class AccountPage {
  constructor(page) {
    this.page = page;
    this.firstNameField = page.locator('label[for="firstname"]');
    this.lastNameField = page.locator('label[for="lastname"]');
    this.emailField = page.getByLabel("Email", { exact: true });
    this.passwordField = page.getByRole("textbox", { name: "Password*" });
    this.confirmPasswordField = page.getByLabel("Confirm Password");
    this.submitButton = page.getByRole("button", { name: "Create an Account" });
    this.mainContent = page.locator("#maincontent");
    this.emailError = page.getByText(
      "Please enter a valid email(Ex: johndoe@domain.com)."
    );
  }

  // Fill the account creation form
  async fillAccountForm(firstName, lastName, email, password) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.confirmPasswordField.fill(password); // Confirm password
  }

  // Submit the account creation form
  async submitAccountForm() {
    await this.submitButton.click();
  }

  // Verify account creation success message
  async verifyAccountCreated() {
    await expect(this.mainContent).toContainText(
      "Thank you for registering with Main Website Store."
    );
  }

  // Verify that account details are displayed
  async verifyAccountDetails(firstName, lastName, email) {
    await expect(this.mainContent).toContainText(
      `${firstName} ${lastName} ${email}`
    );
  }

  async verifyEmailDomain() {
    expect(this.emailError).toBeVisible;
  }
}
