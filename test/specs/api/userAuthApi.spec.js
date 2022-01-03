const { getActivationLinkByCreatingUser, registerActivationLink} = require('../../helpers/apiMethods');
const Data = require('../../data/login.data');

describe('USER AUTHENTICATION', () => {

    before( () => {
        browser.maximizeWindow();
    });

    let activationLink = null;
    let resultOfActivation = null;

    it('User registration', async () => {
        activationLink = await getActivationLinkByCreatingUser(
            Data.fakeCredentialsForRegistration.email, Data.fakeCredentialsForRegistration.password);

        console.log('************************************************************************');
        console.log(activationLink);
        console.log('************************************************************************');

        expect(!!activationLink.activationLinkId).toBe(true);
    })

    it('')
})