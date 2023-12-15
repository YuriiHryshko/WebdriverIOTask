export default class Page {
    async open(path) {
        await browser.url(path);
    };

    async setInputValue(selector, value) {
        await selector.setValue(value);
    };

    async clickElement(selector) {
        await selector.click();
    };

    async getInputValue(selector) {
        return await selector.getValue();
    };

    async getElementAttribute(selector, attr) {
        return await selector.getAttribute(attr);
    };

    async getElementText(selector) {
        return await selector.getText();
    };

    async doubleClickElement(selector) {
        await selector.doubleClick();
    };
};