import { test } from '@playwright/test';
import { HomePage } from '../pages/Home.js';
import { ProductPage } from '../pages/Product.js';
import { CartPage } from '../pages/Cart.js';
import { CheckoutPage } from '../pages/Checkout.js';

test('End to end flow: add a product to cart, checkout using Check/ Money as payment method', async ({ page }, testInfo) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await test.step('Navigate to homepage and select product', async () => {
    await homePage.goto();
    await homePage.selectProduct('Breathe-Easy Tank');
    await productPage.selectSize('XS');
    await productPage.selectColor('Purple');
    await productPage.addToCartCO();
  });

  await test.step('Proceed to cart and checkout', async () => {
    await cartPage.openCart();
    await cartPage.proceedToCheckout();
  });

  await test.step('Fill in shipping details', async () => {
    await checkoutPage.fillShippingDetails({
      email: 'chewable_quantum659@simplelogin.com',
      firstName: 'Test Name',
      lastName: 'Test Last Name',
      company: 'Test Company',
      address: 'Test street 28 7',
      country: 'LT',
      region: '484',
      city: 'Vilnius',
      zipCode: '12345',
      phoneNumber: '+3701231234',
    });
    await checkoutPage.proceedToNext();
  });

  await test.step('Select Check / Money order as payment method and place the order', async () => {
    await checkoutPage.selectPaymentMethod('Check / Money order');
    await checkoutPage.placeOrder();
  });

  await test.step('Verify order success', async () => {
    await checkoutPage.verifyOrderSuccess();
    const screenshot = await page.screenshot();
    await testInfo.attach('Order success', {
      body: screenshot,
      contentType: 'image/png',
    });
  });
});
