// tests/NavigationAndCart.test.js
import { test } from '@playwright/test';
import { HomePage } from '../pages/Home';
import { ProductPage } from '../pages/Product';
import { CartPage } from '../pages/Cart';

test('Add a single product to cart', async ({ page }) => {
  const homePage = new HomePage(page);
  const product = new ProductPage(page);
  const cartPage = new CartPage(page);

  // Navigate to homepage and hover through menus
  await homePage.goto();
  await homePage.hoverOnWomenMenu();
  await homePage.hoverOnTopsMenu();
  await homePage.clickJacketsMenu();

  // Select and add the product to the cart
  await product.selectProduct();
  await product.addToCart();

  // Go to the cart and verify the product is added
  await cartPage.goToCart();
  await cartPage.verifyProductInCart('Olivia 1/4 Zip Light Jacket');
});