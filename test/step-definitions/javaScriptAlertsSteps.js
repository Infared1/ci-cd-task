import { Then, When } from '@wdio/cucumber-framework'
import { assert } from 'chai'

import JavaScriptAlertsPage from '../page-objects/javaScriptAlertsPage.js'
import AllureReporter from '@wdio/allure-reporter';

When("I open js Alert", async () => {
    AllureReporter.addStep('Click for JS Alert button');
    await JavaScriptAlertsPage.clickForJSAlertButton();
});

When('I accept Alert', async () => {
    AllureReporter.addStep('Accept JS Alert');
    await JavaScriptAlertsPage.acceptJSAlert();
});

Then('I should see the Alert message {string}', async (message) => {
    AllureReporter.addStep(`Verify the message is ${message}`);
    assert.equal(await JavaScriptAlertsPage.getResultText(), message, 'The message is not correct');
});
