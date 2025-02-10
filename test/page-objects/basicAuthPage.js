import BasePage from "../../framework/page/BasePage.js";
import { Label } from "../../framework/elements/index.js";

class BasicAuthPage extends BasePage {
    constructor() {
        super(new Label('//*[@id="content"]//*[text()="Basic Auth"]', 'Basic Auth title'), 'Basic Auth Page');

        this.succesMessage = new Label('//*[contains(text(),"Congratulations")]', 'Succes message');
    }

    async getSuccesMessage() {
        return this.succesMessage.getText();
    }
}

export default new BasicAuthPage();