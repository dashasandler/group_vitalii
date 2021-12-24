const LoginPage = require("../pageobjects/Login.page");
const PublicationsPage = require("../pageobjects/Publications.page")
const MenuPage = require("../pageobjects/Menu.page")
const CompaniesPage = require('../pageobjects/Companies.page')

describe("1-CompPage", () => {

    before(() => {
        browser.maximizeWindow();
    })

    it ("Verify if it is the 'Companies page' ", async () => {
        await LoginPage.login("tolik.test1@yahoo.com", "Tolik");
        await PublicationsPage.menuButton.click();
        await MenuPage.companiesOption.click();
        await new Promise(resolve => setTimeout(resolve, 5000));
    });

    it("Load More button downloaded more companies' card", async () =>{
        await CompaniesPage.loadMoreBtn.click()
        await new Promise(resolve => setTimeout(resolve, 5000));
    })

    it("Click On 1st Company Tile", async () => {
        await CompaniesPage.firstCompanyCard.scrollIntoView()
        await CompaniesPage.firstCompanyCard.click()
        await new Promise(resolve => setTimeout(resolve, 5000));
    });

})
