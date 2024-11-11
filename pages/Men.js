import { expect } from "@playwright/test";

export class MenPage {
  constructor(page) {
    this.page = page;
    this.menLabel = page.getByLabel('Men').locator('span');
  }

  async verifyMenPage() {
    await expect(this.menLabel).toContainText('Men');
  }
}
