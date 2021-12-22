const Test = require("../pageobjects/CreateNewPublication.page");
const LoginPage = require("../pageobjects/Login.page");

describe("TC1 - Login page", () => {

    before(() => {
        browser.maximizeWindow();
    })

    it("", async () => {
        await LoginPage.login("tolik.test1@yahoo.com", "Tolik");
    });

});
