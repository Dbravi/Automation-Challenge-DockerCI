import { expect } from "@playwright/test";

export class MenPage {
    constructor(page) {
      this.page = page;
    }
  
    async verifyMenPage() {
        await expect(this.page.getByLabel('Men').locator('span')).toContainText('Men');
    }
}