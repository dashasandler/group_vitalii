const LoginPage = require('../pageobjects/Login.page');
const PublicationsPage = require('../pageobjects/Publications.page');


describe('My Post', () => {

    before(async () => {
        await browser.maximizeWindow();
        await LoginPage.login('Manya111@test.com', 'Manya111@');
    });

    it("Test", async () => {

    });


});
