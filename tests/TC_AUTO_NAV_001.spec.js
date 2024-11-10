import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/Home.js';
import { WhatsNewPage } from '../pages/WhatsNew.js';
import { WomenPage } from '../pages/Women.js';
import { MenPage } from '../pages/Men.js';
import { GearPage } from '../pages/Gear.js';
import { TrainingPage } from '../pages/Training.js';
import { SalePage } from '../pages/Sale.js';

test('Validate navigation to all main pages on the website', async ({ page }) => {
  const homePage = new HomePage(page);
  const whatsNewPage = new WhatsNewPage(page);
  const womenPage = new WomenPage(page);
  const menPage = new MenPage(page);
  const gearPage = new GearPage(page);
  const trainingPage = new TrainingPage(page);
  const salePage = new SalePage(page);

  // Go to the website
  await page.goto('https://magento-2.showcase-wallee.com/');

  // Navigate to "What's New" and verify correct title text
  await homePage.navigateToWhatsNew();
  await whatsNewPage.verifyWhatsNewPage();

  // Navigate to "Women" and verify correct title text
  await homePage.navigateToWomen();
  await womenPage.verifyWomenPage();

  // Navigate to "Men" and verify correct title text
  await homePage.navigateToMen();
  await menPage.verifyMenPage();

  // Navigate to "Gear" and verify correct title text
  await homePage.navigateToGear();
  await gearPage.verifyGearPage();

  // Navigate to "Training" and verify correct title text
  await homePage.navigateToTraining();
  await trainingPage.verifyTrainingPage();

  // Navigate to "Sale" and verify correct title text
  await homePage.navigateToSale();
  await salePage.verifySalePage();
});
