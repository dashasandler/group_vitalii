const LoginPage = require("../pageobjects/Login.page");
const LoginData = require('../data/login.data');
const MenuPage = require("../pageobjects/Menu.page");
const PeoplePage = require("../pageobjects/People.page")
const PublicationsPage = require("../pageobjects/Publications.page");
const CompaniesPage = require("../pageobjects/Companies.page");
const ProfilePage = require("../pageobjects/Profile.page");
const {userCredentials} = require("../data/login.data");


describe("TC1 - Login page", () => {

    before(() => {
        browser.maximizeWindow();
    })

    it("PP-1: Verify if it is the People page", async () => {
        await LoginPage.login(LoginData.userCredentials.email, LoginData.userCredentials.password);
        await MenuPage.clickMenu();
        await MenuPage.clickPeople();

        await expect(await PeoplePage.usersTitle.getText()).toEqual("users");
    });

    it("PP-2: Verify that MenuPage navigation works from the PeoplePage: to Publication", async () => {
        await PeoplePage.menuButton.click();
        await MenuPage.publicationsOption.click();

        await expect(await PublicationsPage.publicationsTitle.getText()).toEqual("publications");
        await MenuPage.clickPeople();
        await expect(await PeoplePage.usersTitle.getText()).toEqual("users");
    });

    it("PP-3: Verify that MenuPage navigation works from the PeoplePage: to Companies", async () => {
        await MenuPage.companiesOption.click();
        await expect(await CompaniesPage.companiesPageTitle.getText()).toEqual("companies");
        await MenuPage.clickPeople();
        await expect(await PeoplePage.usersTitle.getText()).toEqual("users");
    });

    it("PP-5: Verify that MenuPage navigation works from the PeoplePage: to Profile", async () => {
        await MenuPage.profileOption.click();
        await expect(await ProfilePage.title.getText()).toEqual("user");
        await MenuPage.clickPeople();
        await expect(await PeoplePage.usersTitle.getText()).toEqual("users");
    });

});