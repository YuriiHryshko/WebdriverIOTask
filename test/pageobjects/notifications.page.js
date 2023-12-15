import Page from './page.js';

class NotificationsPage extends Page {

    get title() { return $('.MuiPaper-root>h2'); }
    get listOfNotifications() { return $$('.MuiList-root[data-test="notifications-list"]>li'); }

    async getTitleText() {
        return await this.getElementText(this.title);
    };

    async getNumberOfNotifications() {
        return await this.listOfNotifications.length;
    };
}

export default new NotificationsPage();