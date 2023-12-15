import Page from './page.js';

class BankAccountsPage extends Page {

    get title() { return $('.MuiGrid-root .MuiGrid-item>h2'); }

    async getTitleText() {
        return await this.getElementText(this.title);
    };
}

export default new BankAccountsPage();