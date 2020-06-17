import HomePage from "../pages/HomePage";
import TopBar from "../pages/components/TopBar";

describe("example", function () {
  let homePage, topBar;
  beforeAll(async () => {
    jest.setTimeout(15000);
    homePage = new HomePage();
    topBar = new TopBar();
  });
  it("homepage should work ", async () => {
    await homePage.visit();
  });

  it("homepage should be displayed ", async () => {
    await homePage.isNavbarDisplayed();
    await topBar.isTopBarDisplayed();
  });
});
