export class ProductPage {
  constructor(page) {
    this.page = page;
    this.productLocator = page.locator('#product-item-info_1396');
    this.productName = this.productLocator.getByText('Olivia 1/4 Zip Light Jacket');
    this.sizeOption = this.productLocator.getByLabel('XS');
    this.colorOption = this.productLocator.getByLabel('Black');
    this.addToCartButton = this.productLocator.getByRole('button', { name: 'Add to Cart' });
  }

  async selectSize(size) {
    await this.page.getByLabel(size).click();
  }

  async selectColor(color) {
    await this.page.getByLabel(color).click();
  }

  async addToCartCO() {
    await this.page.getByRole('button', { name: 'Add to Cart' }).click();
  }

  async selectProduct() {
    await this.sizeOption.click();
    await this.colorOption.click();
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}
