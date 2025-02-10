import { Then } from '@wdio/cucumber-framework'
import { assert } from 'chai'

import BasicAuthPage from '../page-objects/basicAuthPage.js'
import AllureReporter from '@wdio/allure-reporter';

Then('I should see the message {string}', async (message) => {
    AllureReporter.addStep(`Verify the message is ${message}`);
    assert.equal(await BasicAuthPage.getSuccesMessage(), message, 'The message is not correct');
});
