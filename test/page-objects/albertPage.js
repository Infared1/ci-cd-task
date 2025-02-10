import BasePage from "../../framework/page/BasePage.js";
import { Label } from "../../framework/elements/index.js";

class albertPage extends BasePage {
    constructor() {
        super(new Label('//*[@class="mw-page-title-main"]', 'Title of the page'), 'Albert Einstein Page');

        this.toolsDropdown = new Label('//*[@id="vector-page-tools-dropdown"]', 'Tools dropdown');
        this.downloadPdfLink = new Label('//*[contains(@id,"coll-download-as-rl")]', 'Download PDF link');
    }

    async clickToolsDropdown() {
        await this.toolsDropdown.click();
    }

    async clickDownloadPdfLink() {
        await this.downloadPdfLink.click();
    }    
}

export default new albertPage();