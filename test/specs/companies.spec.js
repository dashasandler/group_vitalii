const LoginPage = require("../pageobjects/Login.page");
const globalNavigationPage = require("../pageobjects/GlobalNavigation.page");
const CompaniesPage = require('../pageobjects/Companies.page');
const LoginData = require('../data/login.data');
const FirstCompanyPage = require('../pageobjects/OneCompany.page');
const uiMethods = require('../helpers/uiMethods');
const {expect} = require("chai");
const PublicationsPage = require("../pageobjects/Publications.page");
const PeoplePage = require("../pageobjects/People.page");
const ProblemsPage = require("../pageobjects/Problems.page");
const ProfilePage = require("../pageobjects/Profile.page");



describe("CompaniesPage", () => {

    before(() => {
        browser.maximizeWindow();
    })

    it ("CP-1: Verify if it is the Companies page", async () => {
        await LoginPage.login(LoginData.userCredentials.email, LoginData.userCredentials.password);
        await globalNavigationPage.clickMenu();
        await globalNavigationPage.clickCompanies();

        await expect(await CompaniesPage.companiesPageTitle.getText()).equal('companies');
    })

    it("CP-2: Verify that MenuButton navigation works from the Companies Page: to Publications", async () => {
        await globalNavigationPage.clickMenu();
        await globalNavigationPage.clickPublications();

        await expect(await PublicationsPage.publicationsTitle.getText()).equal("publications");
    });

    it("CP-3: Verify that user can get back from the Publications Page to the Companies page", async () => {
        await CompaniesPage.getToCompaniesPage()

        await expect(await CompaniesPage.companiesPageTitle.getText()).equal("companies");
    });

    it("CP-4: Verify that MenuButton navigation works from the Companies Page: to People Page", async () => {
        await globalNavigationPage.clickMenu();
        await globalNavigationPage.clickPeople();

        await expect(await PeoplePage.usersTitle.getText()).equal("users");
    });

    it("CP-5: Verify that user can get back from the People Page to the Companies page", async () => {
        await CompaniesPage.getToCompaniesPage();

        await expect(await CompaniesPage.companiesPageTitle.getText()).equal("companies");
    });

    it("CP-6: Verify that MenuButton navigation works from the Companies to Problems", async () => {
        await globalNavigationPage.clickMenu();
        await globalNavigationPage.clickProblems();

        await expect(await ProblemsPage.problemsPageTitle.getText()).equal("problems");
    });

    it("CP-7: Verify that user can get back from the Problems page to the Companies page", async () => {
        await CompaniesPage.getToCompaniesPage()

        await expect(await CompaniesPage.companiesPageTitle.getText()).equal("companies");
    });

    it("CP-8: Verify that MenuButton navigation works from the Companies Page: to Profile", async () => {
        await globalNavigationPage.clickMenu();
        await globalNavigationPage.clickProfile();

        await expect(await ProfilePage.title.getText()).equal("user");
    });

    it("CP-9: Verify that user can get back from the Profile page to the Companies page", async () => {
        await globalNavigationPage.clickMenu();
        await globalNavigationPage.clickCompanies();

        await expect(await CompaniesPage.companiesPageTitle.getText()).equal("companies");
    });

    it("CP-10: Verify that MenuButton navigation works from the Companies Page: to Logout", async () => {
        await globalNavigationPage.clickMenu();
        await globalNavigationPage.clickLogOut();

        await expect(await LoginPage.titleOfInputEmailBox.getText()).equal("Email *");
        await expect(await LoginPage.titleOfInputPasswordBox.getText()).equal("Password *");
        await expect(await LoginPage.btnLogin.getText()).equal("LOGIN");
    });

    it("CP-11: Verify that the user again can be logged in and gotten back to the Companies page", async () => {
        await LoginPage.login(LoginData.userCredentials.email,LoginData.userCredentials.password);
        await CompaniesPage.getToCompaniesPage();

        await expect(await CompaniesPage.companiesPageTitle.getText()).equal("companies");
    });

    it  ("CP-12: Verify is there the Problems word on 1st company card", async () =>{
        const newString = CompaniesPage.trimString(await CompaniesPage.problemsFirstCompany.getText());

        await expect(newString).equal('Problems:');
    });
     it("CP-13: Verify that image of a company card is clickable", async () => {
         await expect (await (CompaniesPage.imageFirstCompany).isClickable()).equal(true);
     });

     it("CP-14: Verify that a company name is clickable", async () => {
         await expect(await (CompaniesPage.nameFirstCompany).isClickable()).equal(true);
     });

      it("CP-15: Verify that there are no more than 9 company cards on a newly loaded screen", async () => {
          const res = await browser.findElements("xpath",CompaniesPage.anyCompanyCardXPath);
          // const res = await browser.findElements("xpath","//div[@id='root']/div/div/div/p");
          const numOfRes = res.length;

          await expect(CompaniesPage.getBooleanNoMoreThan9(numOfRes,9)).equal(true);
      })

    it("CP-16: By clicking the Load More button more companies' cards were downloaded", async () => {
        const res1 = await browser.$$("//div[@id='root']/div/div/div/p");
        const numOfRes1 = res1.length;
        await CompaniesPage.loadMoreBtn.scrollIntoView();
        await CompaniesPage.loadMoreBtn.click();
        await new Promise(resolve => setTimeout(resolve, 3000));
        const res2 = await browser.$$(CompaniesPage.anyCompanyCardXPath);
        const numOfRes2 = res2.length;

        await expect(numOfRes1 < numOfRes2).equal(true);
    });

    it("CP-17: No more than 9 new cards were downloaded", async () => {
        const res3 =  await browser.$$(CompaniesPage.anyCompanyCardXPath);
        const numOfRes3 = res3.length;

        await expect(CompaniesPage.getBooleanNoMoreThan18(numOfRes3, 18)).equal(true);
    })

    it("CP-18: Verify that a user is redirected to FirstCompanyCard by clicking on it", async () => {
        await CompaniesPage.firstCompanyCard.scrollIntoView();
        await CompaniesPage.firstCompanyCard.click();

        await expect(await FirstCompanyPage.companyPageTitle.getText()).equal('companies');
        await browser.pause(3000);
        await expect(await FirstCompanyPage.btnBack.isExisting()).equal(true);

        await FirstCompanyPage.btnBack.click();
        const number = await browser.$$(CompaniesPage.anyCompanyCardXPath).length;
        await expect(number > 1).equal(true);
    });

    it("CP-19: Verify that companies cards are shown by ascendant order by name", async () => {

        const arrOfElements = await uiMethods.getElements(CompaniesPage.anyCompanyCardXPath);
        console.log(arrOfElements.length);
        const arrOfNames = [];
        for(let i = 1; i <= arrOfElements.length; i++){
            const companyTitleForArray = await $(`(//h2[@title])[${i}]`).getText();
            arrOfNames.push(companyTitleForArray);
        }
        const duplicateOfArrOfNames = [...arrOfNames];
        const reverseArrDuplicateOfArrOfNames = duplicateOfArrOfNames.reverse();
        const sortReverseOfArrDuplicateOfArrOfNames = [...reverseArrDuplicateOfArrOfNames].sort();

        await expect(reverseArrDuplicateOfArrOfNames.toString() !== arrOfNames.toString()).equal(true);
        await expect( sortReverseOfArrDuplicateOfArrOfNames.toString() === arrOfNames.toString()).equal(true);

    })

})
