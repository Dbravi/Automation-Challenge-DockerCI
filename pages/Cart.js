export class CartPage {
  constructor(page) {
    this.page = page;
  }

  async openCart() {
    await this.page.getByRole('link', { name: ' My Cart 1 1 items' }).click();
  }

  async proceedToCheckout() {
    await this.page.getByRole('button', { name: 'Proceed to Checkout' }).click();
  }
}
