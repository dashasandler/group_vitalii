const Page = require('./Page');

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

}

module.exports = new PeoplePage();