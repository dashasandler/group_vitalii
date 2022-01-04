const Page = require ("./Page");

    class PublicationsPage extends Page {

        get publicationsTitle() {return $("//h6[text()='publications']")}

        get btnAddPost(){return $('//button[text()=\'Add Publication\']')}

        get first_btnLike(){return $('(//button[@id=\'like-btn\'])[1]')}

        get btnComment(){return $('#comment-btn')}

        get inputComment(){return $('#comment-input')}

        get sendComment(){return $('#send-btn')}

        get publications (){return $('div.pb-4>div:nth-child(2)>div>a>div')}

        get comments (){return $('div[class=\'bg-light p-2\'] div:nth-child(2)')}

        get btnLoadMore(){return $('//div[@class=\'btn-link\']')}

        get btnLike(){return $('#like-btn')}

        get mlCountLike(){return '//div[2]//div[2]//div[2]//button[1]//span[1]'}

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

        async  createComments() {
            for (let i = 1; i <= 3; i++) {
                await this.inputComment.click();
                await this.inputComment.setValue(`Group Vitalii ${i}`);
                await this.sendComment.click();
                await new Promise(resolve => setTimeout(resolve, 2000));
                let temp = await this.comments.getText();
                await expect(temp).toEqual(`Group Vitalii ${i}`);
            }
        }

    open() {
        return super.open('/publications');
    }
}

module.exports = new PublicationsPage();