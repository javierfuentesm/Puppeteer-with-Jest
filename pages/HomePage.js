import BasePage from "./BasePage";

export default class HomePage extends BasePage {
  async visit() {
    await page.goto("http://zero.webappsecurity.com/index.html");
    await page.waitForSelector("#nav");
  }
  async isNavbarDisplayed() {
    await page.waitForSelector("#pages-nav");
    await page.waitForSelector("#homeMenu");
    await page.waitForSelector("#onlineBankingMenu");
    await page.waitForSelector("#feedback");
  }
  async clickHomePage() {
    await page.click("#homeMenu");
  }
  async clickOnlineBankingLink() {
    await page.click("#onlineBankingMeni");
  }
  async clickFeedbackLink() {
    await page.click("#feedback");
  }
}
