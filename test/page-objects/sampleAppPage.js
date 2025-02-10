import BasePage from "../../framework/page/BasePage.js";
import { Button, Input, Label } from "../../framework/elements/index.js";

class SampleAppPage extends BasePage {
    constructor() {
        super(new Label('//*[@class="container"]//*[text()="Sample App"]', 'Sample App title'), 'Sample App Page')

        this.userNameInput = new Input('//*[@name="UserName"]', 'User Name Input');
        this.passwordInput = new Input('//*[@name="Password"]', 'Password Input');
        this.loginButton = new Button('//*[@id="login"]', 'Login Button');
        this.successMessage = new Label('//*[@id="loginstatus"]', 'Success Message');
    }

    async enterUserName(userName) {
        await this.userNameInput.typeText(userName);
    }

    async enterPassword(password) {
        await this.passwordInput.typeText(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async getSuccessMessage() {
        return this.successMessage.getText();
    }
}

export default new SampleAppPage();