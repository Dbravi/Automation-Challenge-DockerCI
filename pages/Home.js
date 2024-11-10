export class HomePage {
    constructor(page) {
      this.page = page;
    }
  
    async goto() {
      await this.page.goto('https://magento-2.showcase-wallee.com/');
    }
  
    async selectProduct(productName) {
      await this.page.locator('strong').filter({ hasText: productName }).click();
    }

    async navigateToWhatsNew() {
      await this.page.getByRole('menuitem', { name: 'What\'s New' }).click();
    }
  
    async navigateToWomen() {
      await this.page.getByRole('menuitem', { name: ' Women' }).click();
    }
  
    async navigateToMen() {
      await this.page.getByRole('menuitem', { name: ' Men' }).click();
    }
  
    async navigateToGear() {
      await this.page.getByRole('menuitem', { name: ' Gear' }).click();
    }
  
    async navigateToTraining() {
      await this.page.getByRole('menuitem', { name: ' Training' }).click();
    }
  
    async navigateToSale() {
      await this.page.getByRole('menuitem', { name: 'Sale' }).click();
    }
  }  