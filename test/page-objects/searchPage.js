import BasePage from "../../framework/page/BasePage.js";
import { Label } from "../../framework/elements/index.js";

class SearchPage extends BasePage {
    constructor() {
        super(new Label('//*[@class="label" and contains(text(),"Counter-Strike")]', 'Game Label'), 'Search Page');

        this.resultContainer = new Label('//*[@id="search_results"]', 'Search Results Container');
        this.resultByIndex = (index) => new Label(`(//*[@class="title"])[${index}]`, `Result by index ${index}`);
    }

    async areResultsDisplayed() {
        return this.resultContainer.state().isDisplayed();
    }

    async getResultTextByIndex(index) {
        return this.resultByIndex(index).getText();
    }
}

export default new SearchPage();