const Page = require('./Page');

class OneCompanyPage extends Page {

    get companyPageTitle () {
        return $('//h6[text()="companies"]');
    }

    get btnBack() {
        return $('.btn.btn-link');
    }

    get oneCompanyImage() {
        return $('//div[@class = "ant-image"]/img');
    }

    get oneCompanyName() {
        return $('.mr-3.mb-3 h2');
    }

    get oneCompanyDescription() {
        return $('.mr-3.mb-3 p');
    }

    get technicalTasksSentence() {
        return $('//h5[text()="Technical tasks given during the interview:"]');
    }

    get firstTechnicalTaskLink() {
        return $('.d-flex:nth-child(1) a:nth-child(1)');
    }

    get titleFirstTechnicalTask() {
        return $('.d-flex:nth-child(1) a:nth-child(1) h6');
    }

    get positionFirstTechnicalTask() {
        return $('a:nth-child(1) .text-truncate:nth-child(2)');
    }

    get likeBtn(){
        return $('#like-btn');
    }

    get numberOflikes(){
        return $('#like-btn .ml-1');
    }

    get accountImage(){
        return $('.d-inline-block img');
    }

    get commentBtn(){
        return $('#comment-btn');
    }

}

module.exports = new OneCompanyPage();