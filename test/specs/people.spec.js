const LoginPage = require("../pageobjects/Login.page");
const LoginData = require('../data/login.data');
const MenuPage = require("../pageobjects/Menu.page");
const PeoplePage = require("../pageobjects/People.page")
const PublicationsPage = require("../pageobjects/Publications.page");
const CompaniesPage = require('../pageobjects/Companies.page');


describe("TC1 - Login page", () => {

    before(() => {
        browser.maximizeWindow();
    })

    it("PP-1: Verify if it is the People page", async () => {
        await LoginPage.login(LoginData.userCredentials.email, LoginData.userCredentials.password);
        await MenuPage.clickMenu();
        await MenuPage.clickPeople()
        const titleOfPeoplePage = await PeoplePage.usersTitle.getText();
        await expect(titleOfPeoplePage).toEqual("users");
    });

    it("PP-2: Verify that MenuPage navigation works from the PeoplePage: to Publication", async () => {
        await PeoplePage.menuButton.click();
        await MenuPage.publicationsOption.click();
        const titleOfPublicationPage = await PublicationsPage.publicationsTitle.getText();
        await expect(titleOfPublicationPage).toEqual("publications");
        await MenuPage.clickPeople();
        const titleOfPeoplePage = await PeoplePage.usersTitle.getText();
        await expect(titleOfPeoplePage).toEqual("users");
    });

    it("PP-3: Verify that MenuPage navigation works from the PeoplePage: to Companies", async () => {
        await MenuPage.companiesOption.click();
        const titleOfCompaniesPage = await CompaniesPage.companiesPageTitle.getText();
        await expect(titleOfCompaniesPage).toEqual("companies");
        await MenuPage.clickPeople();
        const titleOfPeoplePage = await PeoplePage.usersTitle.getText();
        await expect(titleOfPeoplePage).toEqual("users");
    });

});