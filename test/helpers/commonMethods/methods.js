
async function clearInput(element) {
    while (await element.getValue() !== '') {
        await element.doubleClick();
        await element.keys('Delete');
    }
}

module.exports = { clearInput };