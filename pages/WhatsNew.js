import { expect } from "@playwright/test";

export class WhatsNewPage {
  constructor(page) {
    this.page = page;
    this.whatsNewLabel = page.getByLabel('What\'s New').locator('span');
  }

  async verifyWhatsNewPage() {
    await expect(this.whatsNewLabel).toContainText('What\'s New');
  }
}
