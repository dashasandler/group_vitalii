const LoginPage = require("../pageobjects/Login.page");
const PublicationPage = require('../pageobjects/Publications.page');
const LoginData = require('../data/login.data');
const { clearInput } = require('../helpers/commonMethods/methods')


describe("Login page", () => {

    it("TC-1: Verify if user can clear input fields", async () => {
        await LoginPage.open();
        let emptyEmailField = LoginPage.inputEmail.getValue();
        let emptyPasswordField = LoginPage.inputPassword.getValue();
        await LoginPage.inputEmail.setValue(LoginData.userCredentials.wrongEmail);
        await LoginPage.inputPassword.setValue(LoginData.userCredentials.wrongPassword);
        await clearInput(LoginPage.inputEmail);
        await clearInput(await LoginPage.inputPassword);

        await expect(LoginPage.inputEmail.getValue()).toEqual(emptyEmailField);
        await expect(LoginPage.inputPassword.getValue()).toEqual(emptyPasswordField);
    });

    it("TC-2: Verify if user can log in with the valid credentials", async () => {
        await LoginPage.login(LoginData.userCredentials.email, LoginData.userCredentials.password);

        await expect(PublicationPage.publicationsTitle).toBeExisting();
        await expect(PublicationPage.publicationsTitle).toHaveTextContaining('publications');
    });

});
