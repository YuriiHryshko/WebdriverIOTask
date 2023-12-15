import { expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import homePage from '../pageobjects/home.page.js'
import settingsPage from '../pageobjects/settings.page.js'
import bankAccountsPage from '../pageobjects/bankaccounts.page.js'
import notificationsPage from '../pageobjects/notifications.page.js'

const username = process.env.LOGIN_USERNAME;
const password = process.env.LOGIN_PASSWORD;

describe('Home Page testing', () => {
    beforeEach(async() => {
        await loginPage.open();
        await loginPage.login(username, password);
    });

    it('Hamburger button', async() => {
        await homePage.clickHamburgerBtn();
        await browser.pause(1000);
        expect(await homePage.sideBar.isDisplayedInViewport()).toBe(false);

        await homePage.clickHamburgerBtn();
        expect(await homePage.sideBar.isDisplayedInViewport()).toBe(true);
    });

    it('Logout', async() => {
        await homePage.clickLogoutBtn();
        await loginPage.usernameField.waitForExist({ timeout: 5000 });
        expect(await browser.getUrl()).toContain("/signin");
        expect(await loginPage.getUsernameFieldValue()).toEqual("");
        expect(await loginPage.getPasswordFieldValue()).toEqual("");
    });

    it('My Account', async() => {
        await homePage.clickMyAccountBtn();
        expect(await browser.getUrl()).toContain("/settings");
        expect(await settingsPage.getTitleText()).toEqual("User Settings");
    });

    it('Bank Accounts', async() => {
        await homePage.clickBankAccountsBtn();
        expect(await browser.getUrl()).toContain("/bankaccounts");
        expect(await bankAccountsPage.getTitleText()).toEqual("Bank Accounts");
    });

    it('Notifications', async() => {
        await homePage.clickNotificationsBtn();
        expect(await browser.getUrl()).toContain("/notifications");
        expect(await notificationsPage.getTitleText()).toEqual("Notifications");
    });

    it('Notifications Icon', async() => {
        await homePage.clickNotificationsIcon();
        expect(await browser.getUrl()).toContain("/notifications");
        expect(await notificationsPage.getNumberOfNotifications()).toEqual(await homePage.getNotificationsIconCount());
    });

    it('FRIENDS button', async() => {
        await homePage.clickFriendsBtn();
        expect(await browser.getUrl()).toContain("/contacts");
        expect(await homePage.getFriendsBtnSelected()).toEqual("true");
    });

    it('MINE button', async() => {
        await homePage.clickMineBtn();
        expect(await browser.getUrl()).toContain("/personal");
        expect(await homePage.getMineBtnSelected()).toEqual("true");
    });

    it('New transaction button', async() => {
        await homePage.clickNewBtn();
        expect(await browser.getUrl()).toContain("/new");
    });

    afterEach(async() => {
        await browser.reloadSession();
    });
});