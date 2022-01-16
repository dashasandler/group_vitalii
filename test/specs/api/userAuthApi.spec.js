const {
    getActivationLinkByCreatingUser,
    registerActivationLink,
    getActivationDataByCreatingUser,
    userLogin
} = require('../../pageobjectAPI/userAuthApi');
const Data = require('../../data/login.data');
const Chai = require('chai');
const chaiExpect = Chai.expect;

describe('API - user authentication', () => {

    let activationLink = null;
    let activationData = null;
    let resultOfActivation = null;
    let accessTokenData = null;       let userID = null;
    let errorMessage = null;

    // This is a simple assertion with getting activation link directly
    it('The user get activation link ID', async () => {
        activationLink = await getActivationLinkByCreatingUser(Data.fakeCredentialsForRegistration.email, Data.fakeCredentialsForRegistration.password);
        expect(!!activationLink.activationLinkId).toBe(true);
    });

    it('#1 method The user Activation Successful!', async () => {
        resultOfActivation = await registerActivationLink(activationLink.activationLinkId);
        expect(resultOfActivation.activationString).toEqual('Activation Successful!');
    });

    it(' #2 method The user Activation Successful!', async () => {
        activationData = await getActivationDataByCreatingUser(Data.fakeCredentialsUser2.email, Data.fakeCredentialsUser2.password);
        resultOfActivation = await registerActivationLink(activationData.data.data.userCreate);
        expect(resultOfActivation.activationString).toEqual('Activation Successful!');
    });

    //This is an assertion with getting data of the response of user activation
    //If we are getting data we can use a lot more assertions:
    it('User registration - variant2', async () => {
        activationData = await getActivationDataByCreatingUser(
            Data.fakeCredentialsUser2.email, Data.fakeCredentialsUser2.password);

        // Here are two identical expects for the status of response: from WebdriverIO and chai
        expect(activationData.status).toEqual(200);
        chaiExpect(activationData.status).to.eq(200);

        // Here are two identical expects for the statusText of response: from WebdriverIO and chai
        expect(activationData.statusText).toEqual('OK');
        chaiExpect(activationData.statusText).to.be.a('string').that.is.not.empty;
        chaiExpect(activationData.statusText).to.eq('OK');

        // Below different expects from WebdriverIO and chai
        expect(!!activationData.data).toBe(true);
        chaiExpect(activationData.data).to.be.a('object');
        expect(activationData.data.data.userCreate).not.toBe('empty');
        chaiExpect(activationData.data.errors).to.be.undefined;
        chaiExpect(activationData.data.data.userCreate).to.be.a('string').that.is.not.empty;
        chaiExpect(activationData.data.data.userCreate).not.empty;
    });

    it('User Login', async () => {
        accessTokenData  = await userLogin(Data.userCredentials.email, Data.userCredentials.password);
        userID = await userLogin(Data.userCredentials.email, Data.userCredentials.password);
        expect(!!accessTokenData.accessToken).toBe(true);
        expect(!!userID.userID).toBe(false)
    });

    it('User Login negative test', async () => {
        errorMessage =  await userLogin(Data.userCredentials.wrongEmail, Data.userCredentials.password);
        expect(errorMessage.message).toEqual("Error: User with provided email does not exist");
    });
});