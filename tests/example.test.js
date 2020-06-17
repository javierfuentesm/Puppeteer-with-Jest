import HomePage from "../pages/HomePage";
import TopBar from "../pages/components/TopBar";
import LoginPage from "../pages/LoginPage";
import FeedbackPage from "../pages/FeedbackPage";
describe("example", function () {
  let homePage, topBar, loginPage, feedbackPage;
  beforeAll(async () => {
    jest.setTimeout(15000);
    homePage = new HomePage();
    topBar = new TopBar();
    loginPage = new LoginPage();
    feedbackPage = new FeedbackPage();
  });
  it("homepage should work ", async () => {
    await homePage.visit();
  });

  it("homepage should be displayed ", async () => {
    await homePage.isNavbarDisplayed();
    await topBar.isTopBarDisplayed();
  });
  it("try to login", async () => {
    await loginPage.visit();
    await loginPage.isLoginFormDisplayed();
    await loginPage.login("username", "password");
    await loginPage.wait(5000);
  });
  it("feedback should work", async () => {
    await feedbackPage.visit();
    await feedbackPage.isFeedbackFormDisplayed();
    await feedbackPage.submitFeedback(
      "Javier",
      "javier.fuentesm@hotmail.com",
      "subject",
      "command"
    );
    await feedbackPage.wait(5000);
  });
});
