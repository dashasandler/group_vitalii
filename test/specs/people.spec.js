const LoginPage = require("../pageobjects/Login.page");
const LoginData = require('../data/login.data');
const globalNavigationPage = require("../pageobjects/GlobalNavigation.page");
const PeoplePage = require("../pageobjects/People.page")
const PublicationsPage = require("../pageobjects/Publications.page");
const CompaniesPage = require("../pageobjects/Companies.page");
const ProfilePage = require("../pageobjects/Profile.page");
const {userCredentials} = require("../data/login.data");
const ProblemsPage = require("../pageobjects/Problems.page");

describe("TC1 - People page", () => {

    before(() => {
        browser.maximizeWindow();
    });

    it("PP-1: Verify if it is the People page", async () => {
        await LoginPage.login(LoginData.userCredentials.email, LoginData.userCredentials.password);
        await globalNavigationPage.clickMenu();
        await globalNavigationPage.clickPeople();

        await expect(await PeoplePage.usersTitle.getText()).toEqual("users");
    });

    it("PP-2: Verify that MenuButton navigation works from the PeoplePage: to Publications", async () => {
        await globalNavigationPage.clickMenu();
        await globalNavigationPage.clickPublications();

        await expect(await PublicationsPage.publicationsTitle.getText()).toEqual("publications");
    });

    it("Verify that user can get back from the Publication page to the People page", async () => {
        await PeoplePage.getToPeoplePage();
        await expect(await PeoplePage.usersTitle.getText()).toEqual("users");
    });

    it("PP-3: Verify that MenuButton navigation works from the PeoplePage: to Companies", async () => {
        await globalNavigationPage.clickMenu();
        await globalNavigationPage.clickCompanies();

        await expect(await CompaniesPage.companiesPageTitle.getText()).toEqual("companies");
    });

    it("Verify that user can get back from the Companies page to the People page", async () => {
        await PeoplePage.getToPeoplePage();
        await expect(await PeoplePage.usersTitle.getText()).toEqual("users");
    });

    it("PP-4: Verify that MenuButton navigation works from the PeoplePage: to Problems", async () => {
        await globalNavigationPage.clickMenu();
        await globalNavigationPage.clickProblems();

        await expect(await ProblemsPage.problemsPageTitle.getText()).toEqual("problems");
        });

    it("Verify that user can get back from the Problems page to the People page", async () => {
        await PeoplePage.getToPeoplePage();
        await expect(await PeoplePage.usersTitle.getText()).toEqual("users");
    });

    it("PP-5: Verify that MenuButton navigation works from the PeoplePage: to Profile", async () => {
        await globalNavigationPage.clickMenu();
        await globalNavigationPage.clickProfile();

        await expect(await ProfilePage.title.getText()).toEqual("user");
    });

    it("Verify that user can get back from the Profile page to the People page", async () => {
        await PeoplePage.getToPeoplePage();

        await expect(await PeoplePage.usersTitle.getText()).toEqual("users");
    });

    it("PP-6: Verify that MenuButton navigation works from the PeoplePage: to Logout", async () => {
        await globalNavigationPage.clickMenu();
        await globalNavigationPage.clickLogOut();

        await expect(await LoginPage.titleOfInputEmailBox.getText()).toEqual("Email *");
        await expect(await LoginPage.titleOfInputPasswordBox.getText()).toEqual("Password *");
        await expect(await LoginPage.btnLogin.getText()).toEqual("LOGIN");
    });

    it("Verify that the user again can be logged in and gotten back to the People page", async () => {
        await LoginPage.login(LoginData.userCredentials.email,LoginData.userCredentials.password);
        await PeoplePage.getToPeoplePage();

        await expect(await PeoplePage.usersTitle.getText()).toEqual("users");
    });

});