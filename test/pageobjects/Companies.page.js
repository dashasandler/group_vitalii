const Page = require('./page');

class CompaniesPage extends Page {

    get menuButton() {
        return $('//button[@id = "nav-bar-toggle"]');
    }

    get companiesTitle() {
        return $('//h6')
    }

    get loadMoreButton() {
        return $("//div[text() = 'Load more...']")
    }

    get firstCompanyCard() {
        return $('//div[1]/a/h2[text() = "Apple Inc."]')
    }

}

module.exports = new CompaniesPage();