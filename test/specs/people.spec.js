const LoginPage = require("../pageobjects/Login.page");
const LoginData = require('../data/login.data');
const globalNavigationPage = require("../pageobjects/GlobalNavigation.page");
const PeoplePage = require("../pageobjects/People.page")
const PublicationsPage = require("../pageobjects/Publications.page");
const CompaniesPage = require('../pageobjects/Companies.page');


describe("TC1 - Login page", () => {

    before(() => {
        browser.maximizeWindow();
    })

    it("PP-1: Verify if it is the People page", async () => {
        await LoginPage.login(LoginData.userCredentials.email, LoginData.userCredentials.password);
        await globalNavigationPage.clickMenu();
        await globalNavigationPage.clickPeople()
        const titleOfPeoplePage = await PeoplePage.usersTitle.getText();
        await expect(titleOfPeoplePage).toEqual("users");
    });

    it("PP-2: Verify that globalNavigationPage navigation works from the PeoplePage: to Publication", async () => {
        await PeoplePage.menuButton.click();
        await globalNavigationPage.publicationsOption.click();
        const titleOfPublicationPage = await PublicationsPage.publicationsTitle.getText();
        await expect(titleOfPublicationPage).toEqual("publications");
        await globalNavigationPage.clickPeople();
        const titleOfPeoplePage = await PeoplePage.usersTitle.getText();
        await expect(titleOfPeoplePage).toEqual("users");
    });

    it("PP-3: Verify that globalNavigationPage navigation works from the PeoplePage: to Companies", async () => {
        await globalNavigationPage.companiesOption.click();
        const titleOfCompaniesPage = await CompaniesPage.companiesPageTitle.getText();
        await expect(titleOfCompaniesPage).toEqual("companies");
        await globalNavigationPage.clickPeople();
        const titleOfPeoplePage = await PeoplePage.usersTitle.getText();
        await expect(titleOfPeoplePage).toEqual("users");
    });

});