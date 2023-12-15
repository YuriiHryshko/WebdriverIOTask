import Page from './page.js';

class HomePage extends Page {

    get sideBar() { return $('[data-test="sidenav"]>div'); }
    get hamburgerBtn() { return $('[data-test="drawer-icon"]'); }
    get logoutBtn() { return $('[data-test="sidenav-signout"]'); }
    get myAccountBtn() { return $('[data-test="sidenav-user-settings"]'); }
    get bankAccountsBtn() { return $('[data-test="sidenav-bankaccounts"]'); }
    get notificationsBtn() { return $('[data-test="sidenav-notifications"]'); }
    get notificationsIcon() { return $('[data-test="nav-top-notifications-link"]'); }
    get notificationsCount() { return $('[data-test="nav-top-notifications-count"]>span'); }
    get everyoneHeaderBtn() { return $('[data-test="nav-public-tab"]'); }
    get friendsHeaderBtn() { return $('[data-test="nav-contacts-tab"]'); }
    get mineHeaderBtn() { return $('[data-test="nav-personal-tab"]'); }
    get newHeaderBtn() { return $('[data-test="nav-top-new-transaction"]'); }
    get sideBarUserName() { return $('[data-test="sidenav-user-full-name"]'); }

    async getEveryoneBtnSelected() {
        return await this.getElementAttribute(this.everyoneHeaderBtn, 'aria-selected');
    };

    async getFriendsBtnSelected() {
        return await this.getElementAttribute(this.friendsHeaderBtn, 'aria-selected');
    };

    async getMineBtnSelected() {
        return await this.getElementAttribute(this.mineHeaderBtn, 'aria-selected');
    };

    async clickFriendsBtn() {
        await this.clickElement(this.friendsHeaderBtn);
    };

    async clickMineBtn() {
        await this.clickElement(this.mineHeaderBtn);
    };

    async clickHamburgerBtn() {
        await this.clickElement(this.hamburgerBtn);
    };

    async clickLogoutBtn() {
        await this.clickElement(this.logoutBtn);
    };

    async clickMyAccountBtn() {
        await this.clickElement(this.myAccountBtn);
    };

    async clickBankAccountsBtn() {
        await this.clickElement(this.bankAccountsBtn);
    };

    async clickNotificationsBtn() {
        await this.clickElement(this.notificationsBtn);
    };

    async clickNotificationsIcon() {
        await this.clickElement(this.notificationsIcon);
    };

    async clickNewBtn() {
        await this.clickElement(this.newHeaderBtn);
    };

    async getNotificationsIconCount() {
        return parseInt(await this.getElementText(this.notificationsCount));
    };

    async getSideBarFirtName() {
        const fullName = await this.getElementText(this.sideBarUserName);
        const firstName = fullName.split(' ');
        return firstName[0];
    };

    async getSideBarLastName() {
        const fullName = await this.getElementText(this.sideBarUserName);
        const lastName = fullName.split(' ');
        return lastName.slice(1).join(' ');
    };
}

export default new HomePage();