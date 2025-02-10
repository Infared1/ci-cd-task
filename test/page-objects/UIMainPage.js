import BasePage from '../../framework/page/BasePage.js'
import { Label } from '../../framework/elements/index.js'
import { PartialTextLocator } from '../../framework/utils/locatorHelper.js';

class UIMainPage extends BasePage {
    constructor() {
        super(new Label('//*[@class="img-fluid"]', 'UI Test Logo'), 'UI Test Main Page')

        this.navigationLink = (partialText) => new Label(PartialTextLocator(partialText), `${partialText} Navigation Link`);
    }

    async clickNavigationLink(partialText) {
        await this.navigationLink(partialText).click();
    }
}

export default new UIMainPage();