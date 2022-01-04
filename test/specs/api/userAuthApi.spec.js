const {
    getActivationLinkByCreatingUser,
    registerActivationLink,
    getActivationDataByCreatingUser
} = require('../../helpers/apiMethods');
const Data = require('../../data/login.data');
const Chai = require('chai');
const chaiExpect = Chai.expect;

describe('API - user authentication', () => {

    let activationLink = null;
    let activationData = null;
    let resultOfActivation = null;
    // let resultOfActivationFromData = null;

    // This is a simple assertion with getting activation link directly
    it('User registration - variant1', async () => {
        activationLink = await getActivationLinkByCreatingUser(
            Data.fakeCredentialsForRegistration.email, Data.fakeCredentialsForRegistration.password);

        expect(!!activationLink.activationLinkId).toBe(true);
    });

    it('User activation - variant1', async () => {
        resultOfActivation = await registerActivationLink(activationLink.activationLinkId);

        expect(resultOfActivation.activationString).toEqual('Activation Successful!');
    });

    // This is an assertion with getting data of the response of user activation
    // If we are getting data we can use a lot more assertions
    it('User registration - variant2', async () => {
        activationData = await getActivationDataByCreatingUser(
            Data.fakeCredentialsUser2.email, Data.fakeCredentialsUser2.password);

        // Here are two identical expects for the status of response: from WebdriverIo and chai
        expect(activationData.status).toEqual(200);
        chaiExpect(activationData.status).to.eq(200);

        // Here are two identical expects for the statusText of response: from WebdriverIo and chai
        expect(activationData.statusText).toEqual('OK');
        chaiExpect(activationData.statusText).to.be.a('string').that.is.not.empty;
        chaiExpect(activationData.statusText).to.eq('OK');

        // Below different expects from WebdriverIo and chai
        expect(!!activationData.data).toBe(true);
        chaiExpect(activationData.data).to.be.a('object');
        expect(activationData.data.data.userCreate).not.toBe('empty');
        chaiExpect(activationData.data.errors).to.be.undefined;
        chaiExpect(activationData.data.data.userCreate).to.be.a('string').that.is.not.empty;
        chaiExpect(activationData.data.data.userCreate).not.empty;
    });

    it('User activation - variant2', async () => {
       resultOfActivation = await registerActivationLink(activationData.data.data.userCreate);

       expect(resultOfActivation.activationString).toEqual('Activation Successful!');
    });
});