const Page = require('./page');

class ProblemsPage extends Page {

    get newProblem() {
        return $('//button[text()="New Problem"]');
    }

    get filterColumns() {
        return $('//button[@aria-label="Select columns"]');
    }

    get filterFilters() {
        return $('//button[@aria-label="Show filters"]');
    }

    get filterColumnDropDownMenu() {
        return $("//label[text()=\"Columns\"]/..//select");
    }

    get filterOperatorsDropDownMenu() {
        return $("(//label[text()=\"Operators\"]/..//select)[2]");
    }

    get filterValue() {
        return $("//label[text()='Value']/..//input");
    }

    get filterLoader() {
        return $("//*[contains(@data-testid,'LoadIcon')]");
    }


    get filterDensity() {
        return $('//button[@aria-label="Density"]');
    }

    get filterExport() {
        return $('//button[@aria-label="Export"]');
    }

    get columnsFind() {
        return $('//input[@class="MuiInput-input MuiInputBase-input css-mnn31"]');
    }

    get filtersColumns() {
        return $('#mui-922114006');
    }

    get filtersOperators() {
        return $('#mui-772506109');
    }

    get filtersValue() {
        return $('#mui-135881090');
    }

    get paginationBack() {
        return $('button[@aria-label="Go to previous page"]');
    }

    get paginationForward() {
        return $('button[@aria-label="Go to next page"]');
    }

    get problemsPageTitle() {
        return $('//h6[text()="problems"]')
    }

    open() {
        return super.open('/problems');
    }

    problemRowsContainTextInColumn(text, nameOfColumn){
        return $$(`//*[contains(text(), '${text}') and @data-field='${nameOfColumn}']`);

    }
}

module.exports = new ProblemsPage();