const Page = require('./page');

class ProblemsCreate extends Page {

    get inputTitle() {
        return $('#title');
    }

    get selectCompany() {
        return $('#company');
    }

    get inputPosition() {
        return $('#position');
    }

    get inputContent() {
        return $('//textarea[@class="class="w-md-editor-text-input"]');
    }

    get btnCancel() {
        return $('//button[text()="Cancel"]');
    }

    get btnSave() {
        return $('//button[text()="Save"]');
    }

    // TODO: Write selector for "Back Button" (btnBack())

    async createProblem (title, company, position, content) {
        await this.open();
        await this.inputTitle.setValue(title);
        await this.selectCompany.setValue(company);
        await this.inputPosition.setValue(position);
        await this.inputContent.setValue(content);
        await this.btnSave.click();
    }

    open() {
        return super.open('/problems/create');
    }
}

module.exports = new ProblemsCreate();