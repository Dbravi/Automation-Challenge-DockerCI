export class HomePage {
  constructor(page) {
    this.page = page;
    this.womenMenuItem = page.getByRole('menuitem', { name: ' Women' });
    this.topsMenuItem = page.getByRole('menuitem', { name: ' Tops' });
    this.jacketsMenuItem = page.getByRole('menuitem', { name: 'Jackets' });
    this.whatsNewMenuItem = page.getByRole('menuitem', { name: "What's New" });
    this.menMenuItem = page.getByRole('menuitem', { name: ' Men' });
    this.gearMenuItem = page.getByRole('menuitem', { name: ' Gear' });
    this.trainingMenuItem = page.getByRole('menuitem', { name: ' Training' });
    this.saleMenuItem = page.getByRole('menuitem', { name: 'Sale' });
  }

  async goto() {
    await this.page.goto('https://magento-2.showcase-wallee.com/');
  }

  async selectProduct(productName) {
    await this.page.locator('strong').filter({ hasText: productName }).click();
  }

  async navigateToWhatsNew() {
    await this.whatsNewMenuItem.click();
  }

  async navigateToWomen() {
    await this.womenMenuItem.click();
  }

  async navigateToMen() {
    await this.menMenuItem.click();
  }

  async navigateToGear() {
    await this.gearMenuItem.click();
  }

  async navigateToTraining() {
    await this.trainingMenuItem.click();
  }

  async navigateToSale() {
    await this.saleMenuItem.click();
  }

  async hoverOnWomenMenu() {
    await this.womenMenuItem.hover();
  }

  async hoverOnTopsMenu() {
    await this.topsMenuItem.hover();
  }

  async clickJacketsMenu() {
    await this.jacketsMenuItem.click();
  }
}