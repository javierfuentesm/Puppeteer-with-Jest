import HomePage from "../pages/HomePage";
import TopBar from "../pages/components/TopBar";
import LoginPage from "../pages/LoginPage";
describe("example", function () {
  let homePage, topBar, loginPage;
  beforeAll(async () => {
    jest.setTimeout(15000);
    homePage = new HomePage();
    topBar = new TopBar();
    loginPage = new LoginPage();
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
});
