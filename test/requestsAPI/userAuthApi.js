const axios = require('axios');
const {attachConsoleLogs} = require("@wdio/allure-reporter/build/utils");
const API_URL = "https://enduring-server.herokuapp.com/v3/graphql"
const data = require("../data/login.data")

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

async function getActivationDataByCreatingUser(email, password) {
    const reqData = JSON.stringify({
        query: `mutation userCreate ($email: String!, $password: String!) {
    userCreate (email: $email, password: $password)
}`,
        variables: {"email": email, "password": password}
    });

    const userData = await axios({
        method: 'post',
        url: API_URL,
        data: reqData,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (userData.data.errors) {
        return {errors: userData.data.errors}
    } else {
        return userData;
    }
}

async function userLogin (email, password) {
    const reqData = JSON.stringify({
        query: `query login ($email: String!, $password: String!) {
    login (email: $email, password: $password) {
        accessToken
        user {
            _id
        }
    }
}`,
        variables: {"email":email,"password":password}
    });

    const userLogin = await axios({
        method: 'post',
        url: API_URL,
        data: reqData,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    //console.log((userLogin.data.errors)[0].message); example how to find only message
    if (userLogin.data.errors) {
        const message = (userLogin.data.errors)[0].message;
        return { message };
    } else {
        const accessToken = userLogin.data.data.login.accessToken;
        const userID = userLogin.data.data.login.user;
        return { accessToken, userID };
    }
}

module.exports = {
    getActivationLinkByCreatingUser,
    registerActivationLink,
    getActivationDataByCreatingUser,
    userLogin
}
