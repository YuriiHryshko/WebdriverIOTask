import Page from './page.js';

class LoginPage extends Page {

    get usernameField() { return $('#username'); }
    get passwordField() { return $('#password'); }
    get signInBtn() { return $('button[data-test="signin-submit"]'); }
    get usernameHelper() { return $('#username-helper-text'); }
    get signInError() { return $('[data-test="signin-error"]'); }

    async login(username, password) {
        await this.setInputUsername(username);
        await this.setInputPassword(password);
        await this.clickSignInBtn();
    };

    async setInputUsername(username) {
        await this.setInputValue(this.usernameField, username);
    };

    async setInputPassword(password) {
        await this.setInputValue(this.passwordField, password);
    };

    async clickSignInBtn() {
        await this.clickElement(this.signInBtn);
    };

    async getUsernameFieldValue() {
        return await this.getInputValue(this.usernameField);
    };

    async getPasswordFieldValue() {
        return await this.getInputValue(this.passwordField);
    };

    async getPasswordFieldType() {
        return await this.getElementAttribute(this.passwordField, 'type');
    };

    async getUsernameHelperText() {
        return await this.getElementText(this.usernameHelper);
    };

    async getSignInErrorText() {
        return await this.getElementText(this.signInError);
    };

    async open() {
        return super.open('signin');
    };
}

export default new LoginPage();