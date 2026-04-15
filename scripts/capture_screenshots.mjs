import { chromium, devices } from "playwright";

const browser = await chromium.launch();

const desktopPage = await browser.newPage({
  viewport: { width: 1440, height: 1400 },
  deviceScaleFactor: 1,
});

await desktopPage.goto("http://127.0.0.1:5000/tax-loss-harvesting", {
  waitUntil: "networkidle",
});
await desktopPage.screenshot({
  path: "screenshots/desktop.png",
  fullPage: true,
});

const mobileContext = await browser.newContext({
  ...devices["iPhone 13"],
});

const mobilePage = await mobileContext.newPage();
await mobilePage.goto("http://127.0.0.1:5000/tax-loss-harvesting", {
  waitUntil: "networkidle",
});
await mobilePage.screenshot({
  path: "screenshots/mobile.png",
  fullPage: true,
});

await browser.close();
