import BasePage from '../../framework/page/BasePage.js'
import { Label } from '../../framework/elements/index.js'

class newYorkPage extends BasePage {
    constructor() {
        super(new Label('//*[contains(@class,"card-header")]', 'New York page title'), 'New York Page');

        this.headerLocation = new Label('//*[@class="header-loc"]', 'Header Location');
    }

    async getHeaderLocationText() {
        return this.headerLocation.getText();
    }
}

export default new newYorkPage();