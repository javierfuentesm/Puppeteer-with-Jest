export default class TopBar {
  async isTopBarDisplayed() {
    await page.waitForSelector(".brand");
    await page.waitForSelector("#signin_button");
  }
  async clickSingInButon() {
    await page.click("#signin_button");
  }
}
