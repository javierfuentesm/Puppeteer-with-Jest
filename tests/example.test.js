import HomePage from "../pages/HomePage";

describe("example", function () {
  let homePage;
  beforeAll(async () => {
    jest.setTimeout(15000);
    homePage = new HomePage();
  });
  it("homepage should work ", async () => {
    await homePage.visit();
  });

  it("homepage should be displayed ", async () => {
    await homePage.isNavbarDisplayed();
  });
});
