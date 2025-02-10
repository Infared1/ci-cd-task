import BasePage from "../../framework/page/BasePage.js";
import { Button, Label } from "../../framework/elements/index.js";

class AddAndRemovePage extends BasePage {
    constructor() {
        super(new Label('//*[@id="content"]//*[text()="Add/Remove Elements"]', 'Add/Remove title'), 'Add And Remove Page');

        this.addButton = new Button('//*[@onclick="addElement()"]', 'Add button');
        this.deleteButton = new Button('//*[@onclick="deleteElement()"]', 'Delete button');
    }

    async clickAddButton() {
        await this.addButton.click();
    }

    async clickDeleteButton() {
        await this.deleteButton.click();
    }

    async isDeleteButtonVisible() {
        return this.deleteButton.state().isDisplayed();
    }
}

export default new AddAndRemovePage();