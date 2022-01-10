const LoginPage = require('../pageobjects/Login.page');
const PublicationsPage = require('../pageobjects/Publications.page');
const LoginData = require('../data/login.data');
const PublicationCreationPage = require("../pageobjects/PublicationCreation.page")
const NovBar = require("../pageobjects/GlobalNavigation.page")

describe('Positive testing', () => {
    let charactets = Array.from(Array(89).keys()).toString();

    before(async () => {
        await browser.maximizeWindow();
        await LoginPage.login(LoginData.userCredentials.email, LoginData.userCredentials.password);
    });

    it("should publicationsTitle be exist and has text publications ", async () => {
        await expect(PublicationsPage.publicationsTitle).toBeExisting();
        await expect(PublicationsPage.publicationsTitle).toHaveTextContaining('publications');
    });

    it('Verify post is created', async () => {
        for (let i = 1; i <= 3; i++) {
            await PublicationsPage.btnAddPost.click();
            await PublicationCreationPage.inputPostTittle.setValue(`Maine!!!! ${i}`);
            await PublicationCreationPage.inputDescription.setValue(`New Position ${i}`);
            await PublicationCreationPage.inputContent.setValue(`Minimum qualifications ${i}`);
            await PublicationCreationPage.btnSavePost.click();
            let tempTitle = await PublicationsPage.publications.getText();
            await expect(tempTitle).toEqual(`Maine!!!! ${i}`);
        }
    });

    it("should publicationsTitle be exist and has text publications ", async () => {
        await PublicationsPage.btnAddPost.click();
        await PublicationCreationPage.inputPostTittle.setValue(charactets);
        await PublicationCreationPage.inputDescription.setValue(charactets);
        await PublicationCreationPage.inputContent.setValue("any text")
        await PublicationCreationPage.btnSavePost.click();
        await expect(PublicationCreationPage.warningLimitCharacters).toHaveText("ValidationError: title: Max length is 255 characters, description: Max length is 255 characters")
    });

    it("Verify placeholders on the creation page", async () => {
        await browser.refresh();
        await expect(PublicationCreationPage.titlePlaceholder).toHaveTextContaining("Title *");
        await expect(PublicationCreationPage.imagePlaceholder).toHaveTextContaining("Image link");
        await expect(PublicationCreationPage.DescriptionPlaceholder).toHaveTextContaining("Description *");
        await expect(PublicationCreationPage.ContentPlaceholder).toHaveTextContaining("Content *");
    });

    it("After clicking on the arrow back, the user returned on the publication page", async () => {
        await PublicationCreationPage.arrowBack.click()
        await expect(PublicationsPage.publicationsTitle).toHaveTextContaining("publications")
    });

    it("Verify comment is created ", async () => {
        await PublicationsPage.publications.click();
        await PublicationsPage.btnComment.click();
        await PublicationsPage.inputComment.setValue('Hello world');
        await PublicationsPage.sendComment.click();
        let temp = await PublicationsPage.comments.getText();
        await expect(temp).toEqual('Hello world');
    });

    it("Verify 3 comments is created ", async () => {
        await PublicationsPage.open();
        await PublicationsPage.publications.click();
        await PublicationsPage.btnComment.click();
        await PublicationsPage.createComments();
    });

    it ("Verify the like is created", async () => {
        let beforeLike = await PublicationsPage.mlCountLike.getText();
        await PublicationsPage.btnLike.click();
        await browser.pause(2000);
        let afterLike = await PublicationsPage.mlCountLike.getText();
        await expect(beforeLike !== afterLike).toEqual(true);
    });
});




