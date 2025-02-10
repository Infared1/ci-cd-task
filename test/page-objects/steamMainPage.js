import BasePage from '../../framework/page/BasePage.js'
import { Input, Label } from '../../framework/elements/index.js'
import Browser from '../../framework/browser/Browser.js';

const ABOUT_URL = 'http://www.valvesoftware.com/about';

class SteamMainPage extends BasePage {
    constructor() {
        super(new Label('//*[@id="store_header"]', 'Steam Header'), 'Steam Main Page')

        this.valveLink = new Label(`//*[@href="${ABOUT_URL}"]`, 'Valve Link');
        this.btnInstallSteam = new Label('//*[contains(@class,"btn_content")]', 'Install Steam Button');
        this.searchInput = new Input('//*[@id="store_nav_search_term"]', 'Search Input');
    }

   async clickValveLink() {
        await this.valveLink.scrollIntoView();
        await this.valveLink.click()
    }

    async clickInstallSteamButton() {
        await this.btnInstallSteam.click();
    }

    async searchForGame(gameName) {
        await this.searchInput.typeText(gameName);
        await Browser.pressKeys('Enter');
    }
}

export default new SteamMainPage();