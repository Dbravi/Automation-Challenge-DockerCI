import { expect } from "@playwright/test";

export class GearPage {
  constructor(page) {
    this.page = page;
    this.gearLabel = page.getByLabel('Gear').locator('span');
  }

  async verifyGearPage() {
    await expect(this.gearLabel).toContainText('Gear');
  }
}