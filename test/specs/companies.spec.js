const LoginPage = require("../pageobjects/Login.page");
const PublicationsPage = require("../pageobjects/Publications.page");
const MenuPage = require("../pageobjects/Menu.page");
const CompaniesPage = require('../pageobjects/Companies.page');
const LoginData = require('../data/login.data');

describe("CompaniesPage", () => {

    before(() => {
        browser.maximizeWindow();
    })

    it ("CP-1: Verify if it is the Companies page", async () => {
        await LoginPage.login(LoginData.userCredentials.email, LoginData.userCredentials.password);
        await MenuPage.clickMenu();
        await MenuPage.companiesOption.click();
        const title = await CompaniesPage.companiesPageTitle.getText();
        await expect(title).toEqual('companies');
    })

    it  ("CP-2: Verify is there the Problems word on 1st company card", async () =>{
        const problemString = await CompaniesPage.problemsFirstCompany.getText();
        const newString = CompaniesPage.trimString(problemString);
        await expect(newString).toEqual('Problems:');
    });

    it("CP-3: Load More button downloaded more companies' card", async () =>{
        await CompaniesPage.loadMoreBtn.click();
    })

    it("Click On 1st Company Tile", async () => {
        await CompaniesPage.firstCompanyCard.scrollIntoView();
        await CompaniesPage.firstCompanyCard.click();
    });


})
