const LoginPage = require('../pageobjects/Login.page');
const ProfilePage = require('../pageobjects/Profile.page');
const GlobalNavigation = require("../pageobjects/GlobalNavigation.page");
const { getInitials} = require("../helpers/uiMethods");
const LoginData = require('../data/login.data');
const Publications = require('../pageobjects/Publications.page');

describe("Profile", () => {

    before(async () => {
        await browser.maximizeWindow();
        await LoginPage.login(LoginData.userCredentials.email, LoginData.userCredentials.password);
        await GlobalNavigation.btnMenu.click();
        await GlobalNavigation.profileOption.click();
    })

    it('Should redirect on Profile Page', async () => {
        const titleText = await ProfilePage.title.getText();
        await expect(titleText).toEqual("user");
    });

    it("ImageLetter should match FullName", async () => {
        const fullName = ProfilePage.profileName.getText();
        const nameInit = getInitials(fullName);
        const imageInit = ProfilePage.profileImageInitials.getText();
        await expect(nameInit).toEqual(imageInit);
    });

    it('Button back should redirect on Publication Page ', async () => {
        await ProfilePage.btnBack.click();
        await browser.pause(2000);
        const addPublication = Publications.btnAddPost;
        console.log("+++++++++++++++++++++++++++++++++++++++++");
        console.log(addPublication);
        console.log("+++++++++++++++++++++++++++++++++++++++++");
        await expect(addPublication).toHaveText('ADD PUBLICATION');
    });
});

