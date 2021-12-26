const LoginPage = require("../pageobjects/Login.page");
const PublicationPage = require('../pageobjects/Publications.page');


describe("TC1 - Login page", () => {
    it("should login with valid credentials", async () => {
        await LoginPage.login("tolik.test1@yahoo.com", "Tolik");
        await expect(PublicationPage.publicationsTitle).toBeExisting().true;
        await expect(PublicationPage.publicationsTitle).toHaveTextContaining('publications');
    });

});
