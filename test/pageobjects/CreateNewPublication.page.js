
const Page = require('./Page');

class CreateNewPublicationPage extends Page {

    get titleInputField() {
        return $("//input[@id='title']");
    }

    get imageInputField() {
        return $('//input[@id="image"]');
    }

    get descriptionInputField() {
        return $('//input[@id="description"]');
    }

    get imageTextField() {
        return $('//textarea[@class="w-md-editor-text-input"]');
    }

    get cancelButton() {
        return $('//button[text() = "Cancel"]');
    }

    get saveButton() {
        return $('//button[text() = "Save"]');
    }

    open() {                                      // I don't understand what we do here
        return super.open('/login');
    }
}

module.exports = new CreateNewPublicationPage();
