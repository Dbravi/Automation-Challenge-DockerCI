// tests/NavigationAndCart.test.js
import { test } from "@playwright/test";
import { HomePage } from "../pages/Home";
import { ProductPage } from "../pages/Product";
import { CartPage } from "../pages/Cart";

test("Add a single product to cart", async ({ page }) => {
  const homePage = new HomePage(page);
  const product = new ProductPage(page);
  const cartPage = new CartPage(page);

  await test.step("Go to HomePage and click product", async () => {
    // Navigate to homepage and hover through menus
    await homePage.goto();
    await homePage.hoverOnWomenMenu();
    await homePage.hoverOnTopsMenu();
    await homePage.clickJacketsMenu();
  });

  await test.step("Select produc and add to card", async () => {
    // Select and add the product to the cart
    await product.selectProduct();
    await product.addToCart();
  });
  await test.step("Validate that the chosen product was correctly added to cart", async () => {
    // Go to the cart and verify the product is added
    await cartPage.goToCart();
    await cartPage.verifyProductInCart("Olivia 1/4 Zip Light Jacket");
  });
});
