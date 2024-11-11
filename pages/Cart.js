import { expect } from '@playwright/test';

export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartLink = page.getByRole('link', { name: ' My Cart 1 1 items' });
    this.proceedToCheckoutButton = page.getByRole('button', { name: 'Proceed to Checkout' });
    this.cartTable = page.locator('#shopping-cart-table');
  }

  async proceedToCheckout() {
    await this.proceedToCheckoutButton.click();
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async openCart() {
    await this.page.getByRole('link', { name: ' My Cart 1 1 items' }).click();
  }

  async verifyProductInCart(productName) {
    await expect(this.page.locator('#mini-cart')).toContainText('Olivia 1/4 Zip Light Jacket');
  }
}
