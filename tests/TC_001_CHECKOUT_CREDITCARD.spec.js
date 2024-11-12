import { expect, test } from "@playwright/test";
import { HomePage } from "../pages/Home.js";
import { ProductPage } from "../pages/Product.js";
import { CartPage } from "../pages/Cart.js";
import { CheckoutPage } from "../pages/Checkout.js";

test("test", async ({ page }) => {
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
    await checkoutPage.selectPaymentMethod("Credit / Debit Card");
    await checkoutPage.placeOrder();
    await checkoutPage.clickPaymentButton();
    await checkoutPage.clickUseButton();
    await checkoutPage.clickSelectFormButton();
    await checkoutPage.clickSelectFormGender();
    await checkoutPage.clickPlaceFormOrder();
  });
  await test.step("Validate success message", async () => {
    await checkoutPage.validateSuccessFormMSG();
  });
});
