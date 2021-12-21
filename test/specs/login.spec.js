const LoginPage = require("../pageobjects/Login.page");

describe("TC1 - Login page", () => {
    it("should login with valid credentials", async () => {
        await LoginPage.login("tolik.test1@yahoo.com", "Tolik");
    });

});
