const Page = require('./Page');
const globalNavigationPage = require("../pageobjects/GlobalNavigation.page");

class PeoplePage extends Page {

    get menuButton(){
        return $('//button[@id = "nav-bar-toggle"]')
    }

    get usersTitle(){
        return $('//h6[text()="users"]')
    }

    get inviteButton(){
        return $('//button[text()="Invite"]')
    }

    getToPeoplePage(){
        globalNavigationPage.clickMenu();
        globalNavigationPage.clickPeople();
    }
}

module.exports = new PeoplePage();