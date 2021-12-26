const LoginPage = require('../pageobjects/Login.page');
const PublicationsPage = require('../pageobjects/Publications.page');
const LoginData = require('../data/login.data');


describe('My Post', () => {

    before(async () => {
        await browser.maximizeWindow();
        await LoginPage.login(LoginData.userCredentials.email, LoginData.userCredentials.password);
    });

    it("should publicationsTitle be exist and has text 'publications' ", async () => {

        await expect(PublicationsPage.publicationsTitle).toBeExisting();
        await expect(PublicationsPage.publicationsTitle).toHaveTextContaining('publications');
    });

});
