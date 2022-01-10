const LoginPage = require('../pageobjects/Login.page');
const ProfilePage = require('../pageobjects/Profile.page');
const GlobalNavigation = require("../pageobjects/GlobalNavigation.page");
const ProfileEditPage = require("../pageobjects/ProfileEdit.page");
const LoginData = require('../data/login.data');
const { getElements } = require("../helpers/uiMethods");
const langFromDropdown = "//ul[@id='languages-listbox']/li";
const selectedLangs = "//span[@class='MuiChip-label MuiChip-labelSmall css-1pjtbja']";

describe("Profile", async () => {

    before(async () => {
        await browser.maximizeWindow();
        await LoginPage.login(LoginData.userCredentials.email, LoginData.userCredentials.password);
        await GlobalNavigation.btnMenu.click();
        await GlobalNavigation.profileOption.click();
        await ProfilePage.editBtn.click();
        const aboutLabel = await ProfileEditPage.labelAbout.getText();
        expect(aboutLabel).toEqual("About");
    });

    it("Should be able to clean the form", async () => {
        await ProfileEditPage.cleanForm();
        await ProfileEditPage.expectClearForm();
    });

    it("Should be able to count languages in the dropdown", async () => {
        await expect((await getElements(langFromDropdown)).length).toEqual(18);
    });

    it("Should be able to count selected languages in the languages field", async () => {
        await ProfileEditPage.selectLanguage();
        await expect(((await getElements(selectedLangs)).length) === 18);
    });

    it("Should compare Languages in Dropdown and Selected Languages", async () => {
        await expect(getElements(langFromDropdown)).toEqual(getElements(selectedLangs));
    });

    it("Should be able to fill the form and save", async () => {
        await ProfileEditPage.fillForm("Mary", "Star", "QA Lead", "https://static7.depositphotos.com/1297553/795/i/600/depositphotos_7951909-stock-photo-team-of-lifting-it-information.jpg", "the best");
        await ProfileEditPage.btnSave.click();
        const titleText = await ProfilePage.title.getText();
        expect(titleText).toEqual("user");
    });
});

