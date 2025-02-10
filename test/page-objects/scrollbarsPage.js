import BasePage from "../../framework/page/BasePage.js";
import { Button, Label } from "../../framework/elements/index.js";

class ScrollbarsPage extends BasePage {
    constructor() {
        super(new Label('//*[@class="container"]//*[text()="Scrollbars"]', 'Scrollbars title'), 'Scrollbars Page');

        this.hiddingButton = new Button('//*[@id="hidingButton"]', 'Hiding button');  
    }

    async scrollAndClickHidingButton() {
        await this.hiddingButton.scrollIntoView();
        await this.hiddingButton.click();
    }

    async isHiddingButtonVisible() {
        return this.hiddingButton.state().isDisplayed();
    }
}

export default new ScrollbarsPage();