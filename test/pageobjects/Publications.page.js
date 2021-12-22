const Page = require('./Page');

class PublicationsPage extends Page {

    get menuButton() {
        return $('//button[@id = "nav-bar-toggle"]')
    }

    get publicationsTitle() {
        return $('//h6')
    }

    get addPublicationButton() {
        return $('//button[text()= "Add Publication"]')
    }

    get loadMoreButton() {
        return $('//div[text()="Load more..."]')
    }

    get firstPublicationTile() {
        return $('//div[@class = "MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 mb-4 css-aoeo82"][1]')
    }

}


module.exports = new PublicationsPage()