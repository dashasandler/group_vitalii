const LoginPage = require('../pageobjects/Login.page');
const LoginData = require('../data/login.data');
const ProblemsPage = require('../pageobjects/Problems.page');
const ProblemsCreatePage = require('../pageobjects/ProblemsCreate.page');
const globalNavigationPage = require("../pageobjects/GlobalNavigation.page");

 describe('Positive testing', () => {
     before (async () => {
         await browser.maximizeWindow();
         await LoginPage.login(LoginData.userCredentials.email, LoginData.userCredentials.password);
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
 })