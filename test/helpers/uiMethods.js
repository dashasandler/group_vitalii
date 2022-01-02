async function clearInput(element) {
    while (await element.getValue() !== '') {
        await element.doubleClick();
        await element.keys('Delete');
    }
}

async  function getInitials(name){
    let initials = "";
    for (let i = 0; i < name.length; i++){
        if (name[i] === " ")
            return (initials = name.charAt(name[0])+name.charAt(i + 1)).toUpperCase();
    }
}

module.exports = { clearInput, getInitials };