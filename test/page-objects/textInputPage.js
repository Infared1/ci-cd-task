import BasePage from "../../framework/page/BasePage.js";
import { Button, Input, Label } from "../../framework/elements/index.js";

class TextInputPage extends BasePage {
    constructor() {
        super(new Label('//*[@class="container"]//*[text()="Text Input"]', 'Text Input title'), 'Text Input Page');

        this.input = new Input('//*[@id="newButtonName"]', 'Text Input');
        this.updatingButton = new Button('//*[@id="updatingButton"]', 'Updating button');
    }

    async enterText(text) {
        await this.input.typeText(text);
    }

    async clickUpdatingButton() {
        await this.updatingButton.click();
    }

    async getButtonName() {
        return this.updatingButton.getText();
    }
}

export default new TextInputPage();