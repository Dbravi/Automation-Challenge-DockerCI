import { expect } from '@playwright/test';

export class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async fillShippingDetails(details) {
    await this.page.getByRole('textbox', { name: 'Email Address*' }).fill(details.email);
    await this.page.getByLabel('First Name').fill(details.firstName);
    await this.page.getByLabel('Last Name').fill(details.lastName);
    await this.page.getByLabel('Company').fill(details.company);
    await this.page.getByLabel('Street Address: Line 1').fill(details.address);
    await this.page.getByLabel('Country').selectOption(details.country);
    await this.page.locator('select[name="region_id"]').selectOption(details.region);
    await this.page.getByLabel('City').fill(details.city);
    await this.page.getByLabel('Zip/Postal Code').fill(details.zipCode);
    await this.page.getByLabel('Phone Number').fill(details.phoneNumber);
  }

  async proceedToNext() {
    await this.page.getByRole('button', { name: 'Next' }).click();
  }

  async selectPaymentMethod(method) {
    await this.page.getByLabel(method).check();
  }

  async placeOrder() {
    await this.page.getByRole('button', { name: 'Place Order' }).click();
  }

  async verifyOrderSuccess() {
    await expect(this.page.getByText('Thank you for your purchase!')).toBeVisible();
  }
}
