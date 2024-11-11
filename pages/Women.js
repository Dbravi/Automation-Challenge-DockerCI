import { expect } from "@playwright/test";

export class WomenPage {
  constructor(page) {
    this.page = page;
    this.womenLabel = page.getByLabel('Women').locator('span');
  }

  async verifyWomenPage() {
    await expect(this.womenLabel).toContainText('Women');
  }
}
