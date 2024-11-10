import { expect } from "@playwright/test";

export class TrainingPage {
    constructor(page) {
      this.page = page;
    }
  
    async verifyTrainingPage() {
        await expect(this.page.getByLabel('Training').locator('span')).toContainText('Training');
    }
}