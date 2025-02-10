import BasePage from "../../framework/page/BasePage.js";
import { Button, Label } from "../../framework/elements/index.js";

class DynamicIDPage extends BasePage {
    constructor() {
        super(new Label('//*[@class="container"]//*[text()="Dynamic ID"]', 'Title of Dynmaic ID Page'), 'Dynamic ID Page')

        this.dynamicButton = new Button('//*[@class="container"]//*[@type="button"]', 'Dynamic Button');
    }

    async clickDynamicButton() {
        await this.dynamicButton.click();
    }

    async getDynamicButtonAttribute(attribute) {
        return this.dynamicButton.getAttribute(attribute);
    }
}

export default new DynamicIDPage();