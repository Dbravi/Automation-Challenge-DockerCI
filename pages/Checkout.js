import { expect } from "@playwright/test";

export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.emailField = page.getByRole("textbox", { name: "Email Address*" });
    this.firstNameField = page.getByLabel("First Name");
    this.lastNameField = page.getByLabel("Last Name");
    this.companyField = page.getByLabel("Company");
    this.addressField = page.getByLabel("Street Address: Line 1");
    this.countrySelect = page.getByLabel("Country");
    this.regionSelect = page.locator('select[name="region_id"]');
    this.cityField = page.getByLabel("City");
    this.zipCodeField = page.getByLabel("Zip/Postal Code");
    this.phoneNumberField = page.getByLabel("Phone Number");
    this.nextButton = page.getByRole("button", { name: "Next" });
    this.placeOrderButton = page.getByRole("button", { name: "Place Order" });
    this.orderSuccessMessage = page.getByText("Thank you for your purchase!");
    this.customerMailError = page.locator("#customer-email-error");
    this.paymentButton = page
      .locator("#paymentForm_187054")
      .contentFrame()
      .getByRole("button", {
        name: "You can use the test information to simulate payments.",
      });
    this.useButton = page
      .locator("#paymentForm_187054")
      .contentFrame()
      .locator(".btn-use")
      .first();
    this.selectFormButton = page
      .locator("#paymentForm_187054")
      .contentFrame()
      .locator(".selectize-input");
    this.selectFormGender = page
      .locator("#paymentForm_187054")
      .contentFrame()
      .getByText("Female");
    this.placeFormOrder = page.getByRole("button", { name: "Place Order" });
    this.successFormMSG = page.getByText("Thank you for your purchase!");
  }

  async fillShippingDetails(details) {
    await this.emailField.fill(details.email);
    await this.firstNameField.fill(details.firstName);
    await this.lastNameField.fill(details.lastName);
    await this.companyField.fill(details.company);
    await this.addressField.fill(details.address);
    await this.countrySelect.selectOption(details.country);
    await this.regionSelect.selectOption(details.region);
    await this.cityField.fill(details.city);
    await this.zipCodeField.fill(details.zipCode);
    await this.phoneNumberField.fill(details.phoneNumber);
  }

  async proceedToNext() {
    await this.nextButton.click();
  }

  async selectPaymentMethod(method) {
    await this.page.getByLabel(method).check();
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }

  async verifyOrderSuccess() {
    await expect(this.orderSuccessMessage).toBeVisible();
  }
  async verifyMandatoryEmail() {
    await expect(this.customerMailError).toContainText(
      "This is a required field."
    );
  }

  async clickPaymentButton() {
    await this.paymentButton.click();
  }

  async clickUseButton() {
    await this.useButton.click();
  }
  async clickSelectFormButton() {
    await this.selectFormButton.click();
  }
  async clickSelectFormGender() {
    await this.selectFormGender.click();
  }
  async clickPlaceFormOrder() {
    await this.placeFormOrder.click();
  }
  async validateSuccessFormMSG() {
    expect(this.successFormMSG);
  }
}
