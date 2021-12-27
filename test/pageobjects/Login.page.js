const Page = require('./Page');

class LoginPage extends Page {
    get inputEmail() {
        return $("#email");
    }

    get inputPassword() {
        return $("#password");
    }

    get btnLogin() {
        return $("button[type=\"submit\"]");
    }

    get titleOfInputEmailBox() {
        return $("//label[@id = 'email-label']" );
    }

    get titleOfInputPasswordBox() {
        return $("//label[@id = 'password-label'] ");
    }

    async login(useremail, password) {
        await this.open();
        await this.inputEmail.setValue(useremail);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    open() {
        return super.open("/login");
    }
}
module.exports = new LoginPage();