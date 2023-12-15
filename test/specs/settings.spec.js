import { expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import homePage from '../pageobjects/home.page.js'
import settingsPage from '../pageobjects/settings.page.js'

const username = process.env.LOGIN_USERNAME;
const password = process.env.LOGIN_PASSWORD;

describe('Invalid Settings Page testing', () => {
    beforeEach(async() => {
        await loginPage.open();
        await loginPage.login(username, password);
        await homePage.clickMyAccountBtn();
    });

    it('Saving empty "First Name" field', async() => {
        await settingsPage.doubleClickFirstNameField();
        await browser.keys(['Shift', 'Home', 'Delete']);
        expect(await settingsPage.getFirstNameFieldValue()).toEqual("");
        expect(await settingsPage.getFirstNameHelperText()).toEqual("Enter a first name");
        expect(await settingsPage.saveBtn.isEnabled()).toBe(false);
    });

    it('Saving empty "Last Name" field', async() => {
        await settingsPage.doubleClickLastNameField();
        await browser.keys(['Shift', 'Home', 'Delete']);
        expect(await settingsPage.getLastNameFieldValue()).toEqual("");
        expect(await settingsPage.getLastNameHelperText()).toEqual("Enter a last name");
        expect(await settingsPage.saveBtn.isEnabled()).toBe(false);
    });

    it('Saving empty "Email" field', async() => {
        await settingsPage.doubleClickEmailField();
        await browser.keys(['Shift', 'Home', 'Delete']);
        expect(await settingsPage.getEmailFieldValue()).toEqual("");
        expect(await settingsPage.getEmailHelperText()).toEqual("Enter an email address");
        expect(await settingsPage.saveBtn.isEnabled()).toBe(false);
    });

    it('Saving empty "Phone Number" field', async() => {
        await settingsPage.doubleClickPhoneNumberField();
        await browser.keys(['Shift', 'Home', 'Delete']);
        expect(await settingsPage.getPhoneNumberFieldValue()).toEqual("");
        expect(await settingsPage.getPhoneNumberHelperText()).toEqual("Enter a phone number");
        expect(await settingsPage.saveBtn.isEnabled()).toBe(false);
    });

    afterEach(async() => {
        await browser.reloadSession();
    });
});

describe('Valid Settings Page testing', () => {
    beforeEach(async() => {
        await loginPage.open();
        await loginPage.login(username, password);
        await homePage.clickMyAccountBtn();
    });

    it('Saving "First Name" field with new data', async() => {
        await settingsPage.doubleClickFirstNameField();
        await browser.keys(['Shift', 'Home', 'Delete']);
        await settingsPage.setInputFirstName("ahahah");
        expect(await settingsPage.getFirstNameFieldValue()).toEqual("ahahah");

        await settingsPage.clickSaveBtn();
        expect(await homePage.getSideBarFirtName()).toEqual("ahahah");
    });

    it('Saving "Last Name" field with new data', async() => {
        await settingsPage.doubleClickLastNameField();
        await browser.keys(['Shift', 'Home', 'Delete']);
        await settingsPage.setInputLastName("Dom");
        expect(await settingsPage.getLastNameFieldValue()).toEqual("Dom");

        await settingsPage.clickSaveBtn();
        const lastname = "Dom";
        expect(await homePage.getSideBarLastName()).toEqual(lastname.charAt(0));
    });

    afterEach(async() => {
        await browser.reloadSession();
    });
});