import {When, Then} from "@wdio/cucumber-framework";
import {assert} from "chai";

import SampleAppPage from "../page-objects/sampleAppPage.js";
import AllureReporter from "@wdio/allure-reporter";

const USER_NAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;
const SUCCESS_WELCOME_MESSAGE = `Welcome, ${USER_NAME}!`;

When('I enter the user name in User Name input', async () => {
    AllureReporter.addStep('Enter the user name in User Name input');
    console.log('USER_NAME:', process.env.USER_NAME);
    await SampleAppPage.enterUserName(USER_NAME);
});
When('I enter the password in Password input', async () => {
    AllureReporter.addStep('Enter the password in Password input');
    await SampleAppPage.enterPassword(PASSWORD);
});
When('I click the "Login" button', async () => {
    AllureReporter.addStep('Click the "Login" button');
    await SampleAppPage.clickLoginButton();
});

Then('The user should see the welcome message', async () => {
    AllureReporter.addStep('Verify the welcome message');
    assert.equal(await SampleAppPage.getSuccessMessage(), SUCCESS_WELCOME_MESSAGE, 'The welcome message is not correct');
});