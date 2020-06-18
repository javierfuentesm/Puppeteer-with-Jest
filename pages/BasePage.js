export default class BasePage {
  async wait(time) {
    await page.waitFor(time);
  }
  async getTitle() {
    return await page.title();
  }
  async getUrl() {
    return await page.url();
  }
  async click(selector) {
    await page.waitForSelector(selector);
    await page.click(selector);
  }
  async screenshot() {
    return await page.screenshot();
  }
}
