const LoginPage = require('../pageobjects/Login.page');
const LoginData = require('../data/login.data');
const ProblemsPage = require('../pageobjects/Problems.page');
const ProblemsCreatePage = require('../pageobjects/ProblemsCreate.page');
const globalNavigationPage = require("../pageobjects/GlobalNavigation.page");
const OneProblemProfilePage = require("../pageobjects/OneProblemProfile.page")
 describe('Positive testing', () => {
     before (async () => {
          browser.maximizeWindow();
          await LoginPage.login(LoginData.userCredentials.email, LoginData.userCredentials.password);
          await globalNavigationPage.clickMenu();
          await globalNavigationPage.clickProblems();
          await ProblemsPage.filterFilters.waitForDisplayed({timeout:7000})
     });

     it ('should problemsTitle be exist and has text problems', async () => {
         await globalNavigationPage.clickMenu();
         await globalNavigationPage.clickProblems();
         await expect(ProblemsPage.problemsPageTitle).toBeExisting();
         await expect(await ProblemsPage.problemsPageTitle).toHaveTextContaining('problems');
     })

     it ('Verify that user is redirected to problemsCreate page', async () => {
         await ProblemsPage.newProblem.click();
         await expect(await ProblemsCreatePage.inputTitle).toBeExisting();
         await expect(await ProblemsCreatePage.selectCompany).toBeExisting();
         await expect(await ProblemsCreatePage.inputPosition).toBeExisting();
         await expect(await ProblemsCreatePage.inputContent).toBeExisting();
     })

      it ('Verify that user can get back from the OneProblemProfile page to the Problem page', async () => {
         await OneProblemProfilePage.btnArrowBack.click();
         await expect(ProblemsPage.problemsPageTitle).toHaveTextContaining("problems");
         await expect(ProblemsPage.newProblem).toBeExisting();
         await expect(ProblemsPage.filterColumns).toBeExisting();
         await expect(ProblemsPage.filterDensity).toBeExisting();
         await expect(ProblemsPage.filterFilters).toBeExisting();
      })

     it.only ('Search company by name "Google"', async () => {
         await ProblemsPage.filterFilters.click();
         await ProblemsPage.filterColumnDropDownMenu.selectByVisibleText("Company") ;
         await ProblemsPage.filterOperatorsDropDownMenu.click();
         await ProblemsPage.filterOperatorsDropDownMenu.selectByVisibleText("equals");
         await ProblemsPage.filterValue.click();
         await ProblemsPage.filterValue.waitForDisplayed({timeout:7000})
         await ProblemsPage.filterValue.setValue("Google");
         const Loader = ProblemsPage.filterLoader;
         await expect(Loader).not.toBeDisplayed();
         await ProblemsPage.filterFilters.click();
         const countProblems = await ProblemsPage.problemRowsContainTextInColumn("Google","Company");
         await expect (countProblems).toHaveLength(10)
     })

     it.only ('Count company by name "Google" on all page', async () => {

     })

})