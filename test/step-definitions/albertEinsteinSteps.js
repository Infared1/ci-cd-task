import { Then, When } from '@wdio/cucumber-framework'
import { assert } from 'chai';

import AlbertPage from '../page-objects/albertPage.js';
import AllureReporter from '@wdio/allure-reporter';

Then(/^The (.*) webpage is opened$/, async (page) => {
    AllureReporter.addStep(`Check that ${page} page is opened`);
    assert.isTrue(await AlbertPage.isPageOpened(), `${page} page is not opened`);
}); 

When('I click on the Tools dropdown', async () => {
    AllureReporter.addStep('Click on the Tools dropdown');
    await AlbertPage.clickToolsDropdown();
});

When(/^I click on the "([^"]*)" link$/, async (link) => {
    AllureReporter.addStep(`Click on the ${link} link`);
    await AlbertPage.clickDownloadPdfLink();
});

