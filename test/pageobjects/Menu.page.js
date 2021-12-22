const Page = require('./Page');

class MenuPage extends Page {

    get menuPublicationButton() {
        return $('//div[@id = "publications"]')
    }

    get menuPeopleButton() {
        return $('//div[@id = "people"]')
    }

    get menuCompaniesButton() {
        return $('//div[@id = "companies"]')
    }

    get menuProblemsButton() {
        return ('//div[@id = "problems"]')
    }

    get menuProfileButton() {
        return ('//div[@id = "profile"]')
    }

    get menuLogoutButton() {
        return ('//div[@id = "logout"]')
    }

}

module.exports = new MenuPage()