import { When, Then } from '@wdio/cucumber-framework'
import { assert } from 'chai';

import TextInputPage from '../page-objects/textInputPage.js';
import AllureReporter from '@wdio/allure-reporter';

When('I enter {string} into the text input', async (text) => {
    AllureReporter.addStep(`Enter text: ${text}`);
    await TextInputPage.enterText(text);
});

When('I click the updating button', async () => {
    AllureReporter.addStep('Click the updating button');
    await TextInputPage.clickUpdatingButton();
});

Then('I should see that button name is changed to {string}', async (buttonName) => {
    AllureReporter.addStep('Get the button name');
    const actualButtonName = await TextInputPage.getButtonName();
    
    AllureReporter.addStep(`Button name: ${actualButtonName}`);
    console.log(`Button name: ${actualButtonName}`);
    
    AllureReporter.addStep('Verify the button name');
    assert.strictEqual(actualButtonName, buttonName, `Expected button name: ${buttonName}, but got: ${actualButtonName}`);
});