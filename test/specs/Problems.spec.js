const LoginPage = require('../pageobjects/Login.page');
const LoginData = require('../data/login.data');
const NavBar = require("../pageobjects/GlobalNavigation.page");
const ProblemsPage = require('../pageobjects/Problems.page');
const ProblemsCreatePage = require('../pageobjects/ProblemsCreate.page');
const globalNavigationPage = require("../pageobjects/GlobalNavigation.page");

 describe('Positive testing', () => {
     before (async () => {
         await browser.maximizeWindow();
         await LoginPage.login(LoginData.userCredentials.email, LoginData.userCredentials.password);
     });

     it ('Verify the user is able to see the list of all submitted problems', async () => {
         await globalNavigationPage.clickMenu();
         await globalNavigationPage.clickProblems();
         await expect(ProblemsPage.problemsPageTitle).toBeExisting();
         await expect(ProblemsPage.p)
     })
 })