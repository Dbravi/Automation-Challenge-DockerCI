import { expect } from "@playwright/test";

export class TrainingPage {
  constructor(page) {
    this.page = page;
    this.trainingLabel = page.getByLabel('Training').locator('span');
  }

  async verifyTrainingPage() {
    await expect(this.trainingLabel).toContainText('Training');
  }
}
