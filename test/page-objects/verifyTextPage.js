import BasePage from "../../framework/page/BasePage.js";
import { Label } from "../../framework/elements/index.js";

class VerifyTextPage extends BasePage {
    constructor() {
        super(new Label('//*[@class="container"]//*[text()="Scrollbars"]', 'Verify Text Page title'), 'Scrollbars Page');

        this.message = new Label('//*[@class="bg-primary"]', 'Message');
    }

    async getMessage() {
        return this.message.getText();
    }
}

export default new VerifyTextPage();