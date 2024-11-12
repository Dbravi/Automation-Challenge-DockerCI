import { expect, test } from "@playwright/test";
import { HomePage } from "../pages/Home.js";
import { ProductPage } from "../pages/Product.js";
import { CartPage } from "../pages/Cart.js";
import { CheckoutPage } from "../pages/Checkout.js";

test("End to end flow: add a product to cart, checkout using Check/ Money as payment method", async ({
  page,
}) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const firstName = "Test Name";
  const lastName = "Test Last Name";

  await test.step("Navigate to homepage and select product", async () => {
    await homePage.goto();
    await homePage.selectProduct("Breathe-Easy Tank");
    await productPage.selectSize("XS");
    await productPage.selectColor("Purple");
    await productPage.addToCartCO();
  });

  await test.step("Proceed to cart and checkout", async () => {
    await cartPage.openCart();
    await cartPage.proceedToCheckout();
  });

  await test.step("Fill in shipping details", async () => {
    await checkoutPage.fillShippingDetails({
      email: "chewable_quantum659@simplelogin.com",
      firstName: firstName,
      lastName: lastName,
      company: "Test Company",
      address: "Test street 28 7",
      country: "LT",
      region: "484",
      city: "Vilnius",
      zipCode: "12345",
      phoneNumber: "+3701231234",
    });
    await checkoutPage.proceedToNext();
  });

  await test.step("Select Check / Money order as payment method and place the order", async () => {
    await checkoutPage.selectPaymentMethod("Check / Money order");
    await checkoutPage.placeOrder();
  });

  await test.step("Verify order success and Create Account option", async () => {
    await checkoutPage.verifyOrderSuccess();
    await page
      .locator("#registration")
      .getByRole("link", { name: "Create an Account" })
      .click();
  });

  await expect(page.getByRole("heading")).toContainText(
    "Create New Customer Account"
  );
  await expect(page.locator("#firstname")).toHaveValue(firstName);
  await expect(page.locator("#lastname")).toHaveValue(lastName);
});
