import BasePage from "../../framework/page/BasePage.js";
import { Button, Label } from "../../framework/elements/index.js";

class DownloadPDFPage extends BasePage {
    constructor() {
        super(new Label('//*[@id="firstHeading"]', 'Download PDF Page title'), 'Download PDF Page');

        this.submitButton = new Button('//*[@type="submit"]', 'Download button');
        this.nameFile = new Label('//*[contains(@class,"selection-label-desc")]', 'Name file');
    }

    async getNameFile() {
        return this.nameFile.getText();
    }

    async clickSubmitButton() {
        await this.submitButton.click();
    }
}

export default new DownloadPDFPage();