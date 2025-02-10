import { Then, When } from '@wdio/cucumber-framework'
import { assert } from 'chai'

import AddRemovePage from '../page-objects/addRemovePage.js'
import AllureReporter from '@wdio/allure-reporter';

When('I click the "Add Element" button', async () => {
    AllureReporter.addStep(`Click Add Element button`);
    await AddRemovePage.clickAddButton();
});

Then('I should see a that delete button is visible', async () => {
    AllureReporter.addStep('Verify Delete button is visible');
    assert.isTrue(await AddRemovePage.isDeleteButtonVisible(), 'Delete button is not visible');
});

When("I click {string} button", async (nameButton) => {
    AllureReporter.addStep(`Click ${nameButton} button`);
    await AddRemovePage.clickDeleteButton();
});

Then("I should see that Delete button is not visible", async () => {
    AllureReporter.addStep('Verify Delete button is visible');
    assert.isFalse(await AddRemovePage.isDeleteButtonVisible(), 'Delete button is not visible');
});