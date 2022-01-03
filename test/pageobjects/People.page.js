const Page = require('./Page');
const globalNavigationPage = require("../pageobjects/GlobalNavigation.page");

class PeoplePage extends Page {

    get menuButton(){
        return $('//button[@id = "nav-bar-toggle"]');
    }

    get usersTitle(){
        return $('//h6[text()="users"]');
    }

    get inviteButton(){
        return $('//button[text()="Invite"]');
    }
    get firstUserLink(){
        return $('//div[@class = "ml-2 user-text"]');
    }

    getToPeoplePage(){
        globalNavigationPage.clickMenu();
        globalNavigationPage.clickPeople();
    }
}

module.exports = new PeoplePage();