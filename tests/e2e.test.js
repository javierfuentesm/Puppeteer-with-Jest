import HomePage from "../pages/HomePage";
import TopBar from "../pages/components/TopBar";
import LoginPage from "../pages/LoginPage";
import FeedbackPage from "../pages/FeedbackPage";
import registerAllureReporter from "jest-puppeteer-allure/src/registerAllureReporter";

import { username, password, timeout } from "../config";

describe("End to end example", function () {
  let homePage, topBar, loginPage, feedbackPage;
  beforeAll(async () => {
    jest.setTimeout(timeout);
    homePage = new HomePage();
    topBar = new TopBar();
    loginPage = new LoginPage();
    feedbackPage = new FeedbackPage();
  });
  it("should load homepage", async () => {
    reporter.feature("Feature").story("Story");
    await homePage.visit();
    await homePage.isNavbarDisplayed();
    const screenshot = await homePage.screenshot();
    reporter.addAttachment("Screenshot", screenshot, "image/jpg");
  });
  it("should submit feedback", async () => {
    await homePage.clickFeedbackLink();
    await feedbackPage.isFeedbackFormDisplayed();
    await feedbackPage.submitFeedback(
      "Javier Fuentes Mora",
      "javier.fuentesm@hotmail.com",
      "subject",
      "Here comes a super long comment"
    );
  });
  it("should login into the app", async () => {
    await homePage.visit();
    await topBar.isTopBarDisplayed();
    await topBar.clickSingInButon();
    await loginPage.isLoginFormDisplayed();
    await loginPage.login(username, password);
  });
});
