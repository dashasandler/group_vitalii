const LoginPage = require("../pageobjects/Login.page");
const globalNavigationPage = require("../pageobjects/GlobalNavigation.page");
const CompaniesPage = require('../pageobjects/Companies.page');
const LoginData = require('../data/login.data');
const FirstCompanyPage = require('../pageobjects/OneCompany.page');
const  countElements = require('../helpers/uiMethods');



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

     it("CP-4: Verify that a company name is clickable", async () => {
         await expect(await (CompaniesPage.nameFirstCompany).isClickable()).toEqual(true);
     });

      it("CP-5: Verify that there are no more than 9 company cards on a newly loaded screen", async () => {
          const res = await browser.findElements("xpath",CompaniesPage.anyCompanyCardXPath);
          // const res = await browser.findElements("xpath","//div[@id='root']/div/div/div/p");
          const numOfRes = res.length;

          await expect(CompaniesPage.getBooleanNoMoreThan9(numOfRes,9)).toEqual(true);
      })

    it("CP-6: By clicking the Load More button more companies' cards were downloaded", async () => {
       const res1 = await browser.$$("//div[@id='root']/div/div/div/p");
        const numOfRes1 = res1.length;
        await CompaniesPage.loadMoreBtn.scrollIntoView();
        await CompaniesPage.loadMoreBtn.click();
        await new Promise(resolve => setTimeout(resolve, 3000));
        const res2 = await browser.$$(CompaniesPage.anyCompanyCardXPath);
        const numOfRes2 = res2.length;

        await expect(numOfRes1 < numOfRes2).toEqual(true);
    });

    it("CP-7: No more than 9 new cards were downloaded", async () => {
        const res3 =  await browser.$$(CompaniesPage.anyCompanyCardXPath);
        const numOfRes3 = res3.length;

        await expect(CompaniesPage.getBooleanNoMoreThan18(numOfRes3, 18)).toEqual(true);
    })

    it("CP-8: Verify that a user is redirected to FirstCompanyCard by clicking on it", async () => {
        await CompaniesPage.firstCompanyCard.scrollIntoView();
        await CompaniesPage.firstCompanyCard.click();

        await expect(await FirstCompanyPage.companyPageTitle.getText()).toEqual('companies');
        await browser.pause(3000);
        await expect(await FirstCompanyPage.btnBack.isExisting()).toEqual(true);

        await FirstCompanyPage.btnBack.click();
        const number = await browser.$$(CompaniesPage.anyCompanyCardXPath).length;
        await expect(number > 1).toEqual(true);
    });

    it("CP-8: Verify that companies cards are shown by ascendant order by name", async () => {

        const arr = countElements;
        console.log(arr + "++++++++++++++++++++++++++++++++")

    })
})
