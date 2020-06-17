import HomePage from "../pages/HomePage";
import TopBar from "../pages/components/TopBar";
import LoginPage from "../pages/LoginPage";
import FeedbackPage from "../pages/FeedbackPage";
describe("End to end example", function () {
  let homePage, topBar, loginPage, feedbackPage;
  beforeAll(async () => {
    jest.setTimeout(15000);
    homePage = new HomePage();
    topBar = new TopBar();
    loginPage = new LoginPage();
    feedbackPage = new FeedbackPage();
  });
  it("should load homepage", async () => {
    await homePage.visit();
    await homePage.isNavbarDisplayed();
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
});
