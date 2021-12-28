const { createUser, registerActivationLink, userLogin} = require("../API/Axios")


async function createANDLoginAPI(email, password){
    const userCreateRes = createUser(email, password);
    if(userCreateRes.errors) console.log(userCreateRes.errors);

    const userActiveLink = registerActivationLink(activationLinkId);
    if(userActiveLink.errors) console.log(userActiveLink.errors);

    const userLoginRes = userLogin(email, password);
    if(userLoginRes.errors) console.log(userLoginRes.errors);

    return  userLoginRes.accessToken;
}

module.exports = { createANDLoginAPI };