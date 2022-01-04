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
    get firstUserTitle(){
        return $('//div[@id="root"]/div/div/div[1]/div/div/a/div[1]/b');
    }

    get firstUserJobTitle() {
        return $('//div[@id="root"]/div/div/div[1]/div/div/a/div[2]');
    }

    get firstUserImage() {
        return $('//div[@id="root"]/div/div/div[1]/div/a');
    }

    getToPeoplePage(){
        globalNavigationPage.clickMenu();
        globalNavigationPage.clickPeople();
    }
}

module.exports = new PeoplePage();