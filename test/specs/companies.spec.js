const LoginPage = require("../pageobjects/Login.page");
const PublicationsPage = require("../pageobjects/Publications.page");
const globalNavigationPage = require("../pageobjects/GlobalNavigation.page");
const CompaniesPage = require('../pageobjects/Companies.page');
const LoginData = require('../data/login.data');

describe("CompaniesPage", () => {

    before(() => {
        browser.maximizeWindow();
    })

    it ("CP-1: Verify if it is the Companies page", async () => {
        await LoginPage.login(LoginData.userCredentials.email, LoginData.userCredentials.password);
        await globalNavigationPage.clickMenu();
        await globalNavigationPage.clickCompanies();

        await expect(await CompaniesPage.companiesPageTitle.getText()).toEqual('companies');
    })

    it  ("CP-2: Verify is there the Problems word on 1st company card", async () =>{
        const newString = CompaniesPage.trimString(await CompaniesPage.problemsFirstCompany.getText());

        await expect(newString).toEqual('Problems:');
    });
     it("CP-3: Verify that image of a company card is clickable", async () => {
         await expect (await (CompaniesPage.imageFirstCompany).isClickable()).toEqual(true);
     });

     it("Verify that a company name is clickable", async () => {
         await expect(await (CompaniesPage.nameFirstCompany).isClickable()).toEqual(true);
     });
      it("Verify that there are no more than 9 company cards on a newly loaded screen", async () => {
          //???????????????????????????????????????????????????????????????????????????????????
      })

    it("CP-3: Load More button downloaded more companies' card", async () =>{
        await CompaniesPage.loadMoreBtn.click();
    })

    it("Click On 1st Company Tile", async () => {
        await CompaniesPage.firstCompanyCard.scrollIntoView();
        await CompaniesPage.firstCompanyCard.click();
    });



})
