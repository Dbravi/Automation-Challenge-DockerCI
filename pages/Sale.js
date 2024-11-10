import { expect } from "@playwright/test";

export class SalePage {
    constructor(page) {
      this.page = page;
    }
  
    async verifySalePage() {
        await expect(this.page.getByLabel('Sale').locator('span')).toContainText('Sale');
    }
}