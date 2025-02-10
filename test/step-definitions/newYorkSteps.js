import { When, Then } from "@wdio/cucumber-framework";
import { assert } from "chai";

import NewYorkPage from "../page-objects/newYorkPage.js";
import AllureReporter from "@wdio/allure-reporter";

Then(/^I should see the weather page for "([^"]*)"$/, async (cityName) => {
    AllureReporter.addStep(`I should see the weather page for ${cityName} is opened`);
    assert.isTrue(await NewYorkPage.isPageOpened(), `${cityName} weather page is not opened`);
});

When(/^I see the header location should be "([^"]*)"$/, async (header) => {
    AllureReporter.addStep(`I should see the weather page for "${header}"`);
    const headerText = await NewYorkPage.getHeaderLocationText();
    assert.include(headerText, header, `The header is not "${header}"`);
});