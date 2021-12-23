const Page = require('./Page');

class CompaniesPage extends Page {

    get companiesPageTitle () {
        return $('//h6[text()="companies"]');
    }

    get firstCompanyCard() {
        return $('//div[1]/a[1]');
    }

    get imageFirstCompany() {
        return $('//div[1]/a/div/img');
    }

    get nameFirstCompany() {
        return $('//div[1]/a/h2');
    }

    get descriptionFirstCompany() {
        return $('//div[1]/p');
    }

    get problemsFirstCompany() {
        return $('//div[1]/div[text() = "Problems: "]');
    }

    get loadMoreBtn() {
        return $('//div[text()="Load more..."]');
    }

    async openCompany() {
        await this.openCompaniesPage();
        await this.firstCompanyCard.click()
    }
    async clickLoadMore() {
        await this.openCompaniesPage();
        await this.loadMoreBtn.click()
    }

    openCompaniesPage() {
        return super.open("/companies");
    }
}

module.exports = new CompaniesPage();