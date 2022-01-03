const Page = require('./Page');

class CompaniesPage extends Page {

    get companiesPageTitle() {
        return $('//h6[text()="companies"]');
    }

    get firstCompanyCard() {
        return $('.d-flex .d-flex:nth-child(1) a:nth-child(1)');
    }

    get imageFirstCompany() {
        return $('.d-flex .d-flex:nth-child(1) img');
    }

    get nameFirstCompany() {
        return $('.d-flex .d-flex:nth-child(1) h2');
    }

    get descriptionFirstCompany() {
        return $('.d-flex .d-flex:nth-child(1) p');
    }

    get problemsFirstCompany() {
        return $('.d-flex .d-flex:nth-child(1) .mt-auto');
    }

    get loadMoreBtn() {
        return $('//div[text()="Load more..."]');
    }

    get anyCompanyCard() {
        return $("//div[@class = 'MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 company-card m-3 d-flex flex-column css-aoeo82']")
    };

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

    trimString(problemString){
        let newString = '';
        for(let i = 0; i < problemString.length; i++){
            if(problemString[i] !== ' '){
                newString += problemString[i]
            } else break;
        }
        return newString;
    }

    getBoolean(numOfRes, number){
        return (numOfRes <= number) ? true : false;
    }

}

module.exports = new CompaniesPage();