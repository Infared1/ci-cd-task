import BasePage from '../../framework/page/BasePage.js'
import { Label, Input, ElementsList, Button} from '../../framework/elements/index.js'

class WeatherMainPage extends BasePage {
    constructor() {
        super(new Label('//*[contains(@class,"page-hero-content__left")]', "Weather Main Page's hero content"), 'Weather Main Page')

        this.btnPolicy = new Label('//*[contains(@class,"policy-accept")]', 'Policy Accept Button');
        this.searchInput = new Input('//*[@name="query"]', 'Search Input');
        this.searchResults = new Label('//*[@class="results-container"]', 'Search Results');
        this.allSearchResults = new Label('search-bar-result', 'All Search Results');
        this.searchResultsList = new ElementsList(Button, '//*[@class="results-container"]/*', 'Search Results');
    }

    async isPolicyButtonVisible() {
        return this.btnPolicy.state().waitForDisplayed();
    }

    async acceptPolicy() {
        await this.btnPolicy.quickClick()
    }

    async addSearchText(text) {
        await this.searchInput.typeText(text)
    }

    async areDisplayedSearchResults() {
        await this.searchResults.state().waitForDisplayed();
        return this.searchResults.state().isDisplayed();
    }

    async clickSearchResult(index) {
        const citiesList = await this.searchResultsList.getListOfElements();
        const cityNameButton = citiesList[index];
        await cityNameButton.click();
    }
}

export default new WeatherMainPage();