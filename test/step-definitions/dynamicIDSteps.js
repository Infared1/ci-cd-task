import { When, Then } from '@wdio/cucumber-framework'
import { assert } from 'chai';

import dynamicIDPage from '../page-objects/dynamicIDPage.js';
import AllureReporter from '@wdio/allure-reporter';

When('I click on the button', async () => {
    AllureReporter.addStep('Click on the button');
    await dynamicIDPage.clickDynamicButton();
});

Then('The button should not be identified using an ID', async () => {
    AllureReporter.addStep('Get the button ID attribute');
    const buttonID = await dynamicIDPage.getDynamicButtonAttribute('id');

    AllureReporter.addStep(`Button ID: ${buttonID}`);
    console.log(`Button ID: ${buttonID}`);
    
    AllureReporter.addStep('Verify the button ID attribute is not used');
    const buttonLocator = dynamicIDPage.dynamicButton.locator;
    assert.isFalse(buttonLocator.includes('@id'), `The button locator should not use ID, but got: ${buttonLocator}`);
});