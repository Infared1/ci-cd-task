import BasePage from '../../framework/page/BasePage.js'
import { Label} from '../../framework/elements/index.js'

class InstallSteamPage extends BasePage {
    constructor() {
        super(new Label('//*[@class="steam_logo"]', 'Install Steam Logo'), 'Install Steam Page')

        this.installBtn = new Label('(//*[@class="about_install_steam_link"])[1]', 'Install Steam Button');
    }

    async clickInstallButton() {
        await this.installBtn.click();
    }
}

export default new InstallSteamPage();