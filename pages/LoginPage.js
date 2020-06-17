import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
  async visit() {
    await page.goto("http://zero.webappsecurity.com/login.html");
  }
  async isLoginFormDisplayed() {
    await page.waitForSelector("#login_form");
    await page.waitForSelector("#user_login");
    await page.waitForSelector("#user_password");
  }
  async login(user, password) {
    await page.waitForSelector("#login_form");
    await page.type("#user_login", user);
    await page.type("#user_password", password);
    await page.click(".btn-primary");
  }
}
