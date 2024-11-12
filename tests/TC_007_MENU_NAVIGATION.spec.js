import { test } from "@playwright/test";
import { HomePage } from "../pages/Home.js";
import { WhatsNewPage } from "../pages/WhatsNew.js";
import { WomenPage } from "../pages/Women.js";
import { MenPage } from "../pages/Men.js";
import { GearPage } from "../pages/Gear.js";
import { TrainingPage } from "../pages/Training.js";
import { SalePage } from "../pages/Sale.js";

test("Validate navigation to all main pages on the website", async ({
  page,
}) => {
  const homePage = new HomePage(page);
  const whatsNewPage = new WhatsNewPage(page);
  const womenPage = new WomenPage(page);
  const menPage = new MenPage(page);
  const gearPage = new GearPage(page);
  const trainingPage = new TrainingPage(page);
  const salePage = new SalePage(page);

  await test.step("Navigate to each section and verify correct title text", async () => {
    await page.goto("https://magento-2.showcase-wallee.com/");
    await homePage.navigateToWhatsNew();
    await whatsNewPage.verifyWhatsNewPage();

    await homePage.navigateToWomen();
    await womenPage.verifyWomenPage();

    await homePage.navigateToMen();
    await menPage.verifyMenPage();

    await homePage.navigateToGear();
    await gearPage.verifyGearPage();

    await homePage.navigateToTraining();
    await trainingPage.verifyTrainingPage();

    await homePage.navigateToSale();
    await salePage.verifySalePage();
  });
});
