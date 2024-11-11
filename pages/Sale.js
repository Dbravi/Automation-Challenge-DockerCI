import { expect } from "@playwright/test";

export class SalePage {
  constructor(page) {
    this.page = page;
    this.saleLabel = page.getByLabel('Sale').locator('span');
  }

  async verifySalePage() {
    await expect(this.saleLabel).toContainText('Sale');
  }
}
