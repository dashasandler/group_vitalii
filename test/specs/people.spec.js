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
        await MenuPage.clickPeople(); //this line and the line below is needed to be added in method and to be replaced
        await expect(await PeoplePage.usersTitle.getText()).toEqual("users");
    });

    it("PP-3: Verify that MenuPage navigation works from the PeoplePage: to Companies", async () => {
        await MenuPage.companiesOption.click();

        await expect(await CompaniesPage.companiesPageTitle.getText()).toEqual("companies");
        await MenuPage.clickPeople();
        await expect(await PeoplePage.usersTitle.getText()).toEqual("users");
    });

    it("PP-4: Verify that MenuPage navigation works from the PeoplePage: to Problems", async () => {
            await MenuPage.problemsOption.click();
            const titleOfProblemsPage = await ProblemsPage.problemsPageTitle.getText();
            await expect(titleOfProblemsPage).toEqual("problems");
            await MenuPage.clickPeople();
            const titleOfPeoplePage = await PeoplePage.usersTitle.getText();
            await expect(titleOfPeoplePage).toEqual("users");
        });

    it("PP-5: Verify that MenuPage navigation works from the PeoplePage: to Profile", async () => {
        await MenuPage.profileOption.click();

        await expect(await ProfilePage.title.getText()).toEqual("user");
        await MenuPage.clickPeople();
        await expect(await PeoplePage.usersTitle.getText()).toEqual("users");
    });

    it("PP-6: Verify that MenuPage navigation works from the PeoplePage: to Logout", async () => {
        await MenuPage.logOutOption.click();

        await expect(await LoginPage.titleOfInputEmailBox.getText()).toEqual("Email *");
        await expect(await LoginPage.titleOfInputPasswordBox.getText()).toEqual("Password *")
        await expect(await LoginPage.btnLogin.getText()).toEqual("LOGIN")

        await LoginPage.login(userCredentials.email, userCredentials.password);
        await MenuPage.clickMenu();
        await MenuPage.clickPeople();

        await expect(await PeoplePage.usersTitle.getText()).toEqual("users");
    });
});