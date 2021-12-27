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

    open() {
        return super.open('/problems');
    }
}

module.exports = new ProblemsPage();