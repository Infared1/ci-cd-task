import { When, Then } from "@wdio/cucumber-framework";
import { assert } from "chai";

import SearchPage from "../page-objects/searchPage.js";
import AllureReporter from "@wdio/allure-reporter";

When(/^I see that the (.*) page is displayed$/, async (page) => {
    AllureReporter.addStep(`Check that the ${page} page is displayed`);
    assert.isTrue(await SearchPage.isPageOpened(), `The ${page} page is not displayed`);
});

When(/^I see the search results are displayed$/, async () => {
    AllureReporter.addStep('Check that the search results are displayed');
    assert.isTrue(await SearchPage.areResultsDisplayed(), 'The search results are not displayed');
});

Then(/^The first result should be the "(.*)"$/, async (gameName) => {
    AllureReporter.addStep(`Check that the first result is ${gameName}`);
    const index = 1;
    assert.equal(await SearchPage.getResultTextByIndex(index), gameName, `Result is not the ${gameName}`);
});
