import { expect } from "@playwright/test";

export class WomenPage {
  constructor(page) {
    this.page = page;
  }

  async verifyWomenPage() {
    await expect(this.page.getByLabel('Women').locator('span')).toContainText('Women');
  }
}