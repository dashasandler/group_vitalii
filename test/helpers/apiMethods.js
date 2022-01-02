const axios = require('axios');
const {attachConsoleLogs} = require("@wdio/allure-reporter/build/utils");
const API_URL = "https://enduring-server.herokuapp.com/v3/graphql"

async function getActivationLinkByCreatingUser(email, password) {
    const reqData = JSON.stringify({
        query: `mutation userCreate ($email: String!, $password: String!) {
    userCreate (email: $email, password: $password)
}`,
        variables: {"email": email, "password": password}
    });

    const { data } = await axios({
        method: 'post',
        url: API_URL,
        data: reqData,
        headers: {
            // This is an example how to use bearer token if it needs to be used. Don't delete it!
            //'Authorization' : `Bearer $(token)`,
            'Content-Type': 'application/json'
        }
    });

    if (data.errors) {
        return {errors: data.errors}
    } else {
        const activationLinkId = data.data.userCreate;
        return { activationLinkId };
    }
}

async function registerActivationLink(activationLinkId) {
    const dataUserActivate = JSON.stringify({
        query: `mutation userActivate ($activationLinkId: String!) {
    userActivate (activationLinkId: $activationLinkId)
}`,
        variables: { activationLinkId }
    });
    const {data} = await axios({
        method: 'post',
        url: API_URL,
        data: dataUserActivate,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (data.errors) {
        return {errors: data.errors}
    } else {
        const activationString = data.data.userActivate;
        return { activationString: activationString };
    }
}

// Todo: check if userLogin works
// async function userLogin(email, password){
//     const  reqLoginData = JSON.stringify({
//         query: `query login ($email: String!, $password: String!) {
//     login (email: $email, password: $password) {
//         accessToken
//         user {
//             _id
//         }
//     }
// }`,
//         //variables: {"email":"Ma4546n45565678ya111@test.com","password":"Manya111@"}
//         variables: {"email":email,"password":password}
//     });
//
//     const {data} = await axios({
//         method: 'post',
//         url: API_URL,
//         data: reqLoginData,
//         headers: {
//             //'Authorization' : `Bearer $(token)`,
//             'Content-Type': 'application/json'
//         }
//     });
//     //console.log(data.data.login.accessToken)
//     if (data.errors) {
//         return {errors: data.errors}
//     } else {
//         const accessToken = data.data.login.accessToken;
//         return { accessToken };
//     }
// }
//


// Todo: finish function createCompany
// async function createCompany(
//     {
//         title = 'Maine',
//         description = 'Hello everyone!',
//         image = 'https://en.wikipedia.org/wiki/Decibel',
//         link = 'https://en.wikipedia.org/wiki/Decibel',
//         accessToken
//     }
// ) {
//     const getCompanyID = JSON.stringify({
//         query: `mutation companyCreate ($data: CompanyInput) {
//         companyCreate (data: $data)
// }`,
//         variables: {
//             data:
//                 {
//                     title,
//                     description,
//                     image,
//                     link
//                 }
//         }
//     });
//     const { data } = await axios({
//         method: 'post',
//         url: API_URL,
//         data: getCompanyID,
//         headers: {
//             'Authorization' : `Bearer ${ accessToken }`,
//             'Content-Type': 'application/json'
//         }
//     });
//     console.log(data.data.companyCreate)
//
// }
// createCompany();
//
//

// Todo: check if need this function createANDLoginAPI and if it works
// async function createANDLoginAPI(email, password){
//     const userCreateRes = createUser(email, password);
//     if(userCreateRes.errors) console.log(userCreateRes.errors);
//
//     const userActiveLink = registerActivationLink(activationLinkId);
//     if(userActiveLink.errors) console.log(userActiveLink.errors);
//
//     const userLoginRes = userLogin(email, password);
//     if(userLoginRes.errors) console.log(userLoginRes.errors);
//
//     return  userLoginRes.accessToken;
// }

module.exports = {
    getActivationLinkByCreatingUser,
    registerActivationLink,
    // userLogin,
    // createCompany
}
