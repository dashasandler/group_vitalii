const LoginPage = require("../pageobjects/Login.page");
const PublicationPage = require('../pageobjects/Publications.page');
const LoginData = require('../data/login.data');


describe("TC1 - Login page", () => {
    it("should login with valid credentials", async () => {
        await LoginPage.login(LoginData.userCredentials.email, LoginData.userCredentials.password);
        await expect(PublicationPage.publicationsTitle).toBeExisting().true;
        await expect(PublicationPage.publicationsTitle).toHaveTextContaining('publications');
    });

});
