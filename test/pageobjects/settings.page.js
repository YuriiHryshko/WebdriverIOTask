import Page from './page.js';

class SettingsPage extends Page {

    get title() { return $('.MuiPaper-root>h2'); }
    get firstNameField() { return $('#user-settings-firstName-input'); }
    get lastNameField() { return $('#user-settings-lastName-input'); }
    get emailField() { return $('#user-settings-email-input'); }
    get phoneNumberField() { return $('#user-settings-phoneNumber-input'); }
    get firstNameHelper() { return $('#user-settings-firstName-input-helper-text'); }
    get lastNameHelper() { return $('#user-settings-lastName-input-helper-text'); }
    get emailHelper() { return $('#user-settings-email-input-helper-text'); }
    get phoneNumberHelper() { return $('#user-settings-phoneNumber-input-helper-text'); }
    get saveBtn() { return $('[data-test="user-settings-submit"]'); }

    async getTitleText() {
        return await this.getElementText(this.title);
    };

    async getFirstNameFieldValue() {
        return await this.getInputValue(this.firstNameField);
    };

    async getLastNameFieldValue() {
        return await this.getInputValue(this.lastNameField);
    };

    async getEmailFieldValue() {
        return await this.getInputValue(this.emailField);
    };

    async getPhoneNumberFieldValue() {
        return await this.getInputValue(this.phoneNumberField);
    };

    async getFirstNameHelperText() {
        return await this.getElementText(this.firstNameHelper);
    };

    async getLastNameHelperText() {
        return await this.getElementText(this.lastNameHelper);
    };

    async getEmailHelperText() {
        return await this.getElementText(this.emailHelper);
    };

    async getPhoneNumberHelperText() {
        return await this.getElementText(this.phoneNumberHelper);
    };

    async clickSaveBtn() {
        await this.clickElement(this.saveBtn);
    };

    async doubleClickFirstNameField() {
        await this.doubleClickElement(this.firstNameField);
    };

    async doubleClickLastNameField() {
        await this.doubleClickElement(this.lastNameField);
    };

    async doubleClickEmailField() {
        await this.doubleClickElement(this.emailField);
    };

    async doubleClickPhoneNumberField() {
        await this.doubleClickElement(this.phoneNumberField);
    };

    async setInputFirstName(firstName) {
        await this.setInputValue(this.firstNameField, firstName);
    };

    async setInputLastName(lastName) {
        await this.setInputValue(this.lastNameField, lastName);
    };
}

export default new SettingsPage();