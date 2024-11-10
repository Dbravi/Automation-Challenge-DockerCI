import { expect } from "@playwright/test";

export class GearPage {
    constructor(page) {
      this.page = page;
    }
  
    async verifyGearPage() {
        await expect(this.page.getByLabel('Gear').locator('span')).toContainText('Gear');
    }
}