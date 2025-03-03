import BasePage from "../../framework/page/BasePage.js";
import Browser from '../../framework/browser/Browser.js';
import {Button, Input, Label} from "../../framework/elements/index.js";

class FileUploadPage extends BasePage {
    constructor() {
        super(new Label('//*[@class="container"]//*[text()="File Upload"]', 'File Upload title'),'File Upload Page');

        this.inputForFile = new Input('//*[@type="file"]', 'Input for file upload');
        this.successMessage = new Label('//*[@class="success-file"]//*[text()=" file(s) selected"]', 'Success message');
        this.fileInfo = new Label('//*[@class="file-info"]', 'File Upload info');
        this.iframe = new Label('iframe', 'File Upload iframe');
    }

    async uploadFile(path) {
        await Browser.switchToFrame(this.iframe.locator);
        const elementExists = await Browser.executeScript("return document.getElementById('browse') !== null;", null);
        console.log("Элемент найден?", elementExists);
        await Browser.executeScript("document.getElementById('browse').removeAttribute('hidden');", null);
        await Browser.executeScript("document.getElementById('browse').style.display = 'block';", null);
        await this.inputForFile.typeText(path)
    }

    async getSuccessMessage() {
        return this.successMessage.getText();
    }

    async getFileInfo() {
        return this.fileInfo.getText();
    }
}

export default new FileUploadPage()