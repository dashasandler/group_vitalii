const Page = require ("./Page");

    class PublicationsPage extends Page {

        get publicationsTitle() {return $("//h6[text()='publications']")}

        get btnAddPost(){return $('//button[text()=\'Add Publication\']')}

        get first_btnLike(){return $('(//button[@id=\'like-btn\'])[1]')}

        get btnComment(){return $('#comment-btn')}

        get inputComment(){return $('#comment-input')}

        get sendComment(){return $('#send-btn')}

        get publications (){return $('div.pb-4>div:nth-child(2)>div>a>div')}





        get btnLoadMore(){return $('//div[@class=\'btn-link\']')}

        findPublication(title) {
            return this.publicationsList.find(async (publication) =>
                await publication.$("div>a[href*='/publication/']").getText() === title);
        }

        async getPublicationTitle(publication) {
            let title = typeof publication === 'string' ?
                await this.findPublication(publication).$("div>a[href*='/publication/']").getText() :
                await publication.$("div>a[href*='/publication/']").getText();
            return title;
        }

    open() {
        return super.open('/publications');
    }
}

module.exports = new PublicationsPage();