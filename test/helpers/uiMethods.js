async function clearInput(element) {
    while (await element.getValue() !== '') {
        await element.doubleClick();
        await element.keys('Delete');
    }
}

async function enter(element) {
    while (await element.getValue() === '') {
        await element.keys('Enter');
    }
}

async  function getInitials(name){
    let initials = "";
    for (let i = 0; i < name.length; i++){
        if (name[i] === " ")
            return (initials = name.charAt(name[0])+name.charAt(i + 1)).toUpperCase();
    }
}

async function getElements (elem) {
    const res = await browser.findElements("xpath", `${elem}`);
    return res;
}

module.exports = { clearInput, getInitials, getElements, enter };