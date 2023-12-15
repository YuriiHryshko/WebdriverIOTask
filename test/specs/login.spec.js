import { expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import homePage from '../pageobjects/home.page.js'

const username = process.env.LOGIN_USERNAME;
const password = process.env.LOGIN_PASSWORD;

describe('Valid Login Page testing', () => {
    beforeEach(async() => {
        await loginPage.open();
    });

    it('Valid Login', async() => {
        await loginPage.setInputUsername(username);
        expect(await loginPage.getUsernameFieldValue()).toEqual(username);

        await loginPage.setInputPassword(password);
        expect(await loginPage.getPasswordFieldValue()).toEqual(password);
        expect(await loginPage.getPasswordFieldType()).toEqual("password");

        await loginPage.clickSignInBtn();
        await homePage.sideBar.waitForExist({ timeout: 5000 });
        expect(await browser.getUrl()).toEqual("http://localhost:3000/");
        expect(await homePage.sideBar.isDisplayedInViewport()).toBe(true);
        expect(await homePage.getEveryoneBtnSelected()).toEqual("true");
    });

    afterEach(async() => {
        await browser.reloadSession();
    });
});

describe('Invalid Login Page testing', () => {
    beforeEach(async() => {
        loginPage.open();
    });

    it('Login with empty password field', async() => {
        await loginPage.setInputUsername(username);
        expect(await loginPage.getUsernameFieldValue()).toEqual(username);
        expect(await loginPage.signInBtn.isEnabled()).toBe(false);
    });

    it('Login with empty username field', async() => {
        await loginPage.setInputPassword(password);
        expect(await loginPage.getPasswordFieldValue()).toEqual(password);
        expect(await loginPage.getPasswordFieldType()).toEqual("password");
        expect(await loginPage.signInBtn.isEnabled()).toBe(false);
    });

    it('Login with empty fields', async() => {
        await loginPage.signInBtn.waitForExist({ timeout: 5000 });
        expect(await loginPage.signInBtn.isEnabled()).toBe(true);

        await loginPage.clickSignInBtn();
        expect(await loginPage.getUsernameHelperText()).toEqual("Username is required");
    });

    it('Login with invalid username and password', async() => {
        await loginPage.setInputUsername("Katharina");
        expect(await loginPage.getUsernameFieldValue()).toEqual("Katharina");

        await loginPage.setInputPassword("secret");
        expect(await loginPage.getPasswordFieldValue()).toEqual("secret");
        expect(await loginPage.getPasswordFieldType()).toEqual("password");

        await loginPage.clickSignInBtn();
        expect(await loginPage.getSignInErrorText()).toEqual("Username or password is invalid");
    });

    afterEach(async() => {
        await browser.reloadSession();
    });
});