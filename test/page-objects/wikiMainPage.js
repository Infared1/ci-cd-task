import BasePage from "../../framework/page/BasePage.js";
import { Label, Dropdown, Button, Input } from "../../framework/elements/index.js";

class WikiMainPage extends BasePage {
    constructor() {
        super(new Label('//*[@class="central-featured-logo"]', 'Main page logo'), 'Main Page Wiki');

        this.dropdownMenu = new Dropdown('//*[@class="hide-arrow"]', 'Dropdown menu');
        this.dropdownMenuOptions = new Dropdown('//select[@id="searchLanguage"]', 'Dropdown menu options');
        this.input = new Input('//*[@id="searchInput"]', 'Search input');
        this.submitButton = new Button('//*[contains(@class,"pure-button")]', 'Submit button');
    }

    async selectEngLanguage() {
            await this.dropdownMenu.quickClick();
        }

    async typeTextAndSearch(text) {
        await this.input.typeText(text);
        await this.submitButton.click();
    }

}

export default new WikiMainPage();
