export class ProductPage {
    constructor(page) {
      this.page = page;
    }
  
    async selectSize(size) {
      await this.page.getByLabel(size).click();
    }
  
    async selectColor(color) {
      await this.page.getByLabel(color).click();
    }
  
    async addToCart() {
      await this.page.getByRole('button', { name: 'Add to Cart' }).click();
    }
  }
  