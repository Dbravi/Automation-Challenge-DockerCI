import { expect } from "@playwright/test";

export class WhatsNewPage {
    constructor(page) {
      this.page = page;
    }
  
    async verifyWhatsNewPage() {
        await expect(this.page.getByLabel('What\'s New').locator('span')).toContainText('What\'s New');    }
  }