const LoginPage = require('../pageobjects/login.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {

        await LoginPage.login('tolik.test1@yahoo.com', 'Tolik');
    });
});


