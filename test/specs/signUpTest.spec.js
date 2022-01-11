const SignUpPage = require('../pageobjects/SignUp.page');
const LoginData = require('../data/login.data');
const LoginPage = require('../pageobjects/Login.page');


describe('Login functionality', () => {

    before(() => {
        browser.maximizeWindow();
    });

    it("Shouldn`t be able to sign up with existing email", async () => {
        await SignUpPage.fillSignUpCredentials(LoginData.userCredentials.email, LoginData.userCredentials.password);
        await SignUpPage.btnSignUp.click();
        const alertMsg = `User with ${LoginData.userCredentials.email} already exist`
        await expect(SignUpPage.alert).toHaveText(alertMsg);
    });

    it("Should redirect the user from SignUp Page to Login Page and backwards", async () => {
        await SignUpPage.loginLink.click()
        await expect(LoginPage.loginTitle).toHaveText("Login");
        await LoginPage.hrefSignup.click();
        await expect(SignUpPage.signUpTitle).toHaveText("Sign Up");
    });
});
