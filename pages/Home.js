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
  }  