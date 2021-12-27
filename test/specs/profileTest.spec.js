const LoginPage = require('../pageobjects/Login.page');
const ProfilePage = require('../pageobjects/Profile.page');
const GlobalNavigationPage = require("../pageobjects/GlobalNavigation.page");
const { clearInput, getInitials } = require("../../test/helpers/commonMethods/methods");
const ProfileEditPage = require("../pageobjects/ProfileEdit.page");
const LoginData = require('../data/login.data');

describe("Profile", () => {

    before(async () => {
        await browser.maximizeWindow();
    })

    it('Should redirect on Profile Page', async () => {
        await LoginPage.login(LoginData.userCredentials.email, LoginData.userCredentials.password);
        await GlobalNavigationPage.btnMenu.click();
        await GlobalNavigationPage.profileOption.click();
        const titleText = await ProfilePage.title.getText();
        await expect(titleText).toEqual("user");
    });

    it("ImageLetter should match FullName", async () => {
        const fullName = ProfilePage.profileName.getText();
        const nameInit = getInitials(fullName);
        const imageInit = ProfilePage.profileImageInitials.getText();
        await expect(nameInit).toEqual(imageInit);
    });
});