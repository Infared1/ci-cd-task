import { Then } from "@wdio/cucumber-framework";
import { assert } from "chai";

import verifyTextPage from "../page-objects/verifyTextPage.js";
import AllureReporter from "@wdio/allure-reporter";

Then("I should see that the text is {string}", async (message) => {
    AllureReporter.addStep(`Verify the message ${message}`);
    assert.include(await verifyTextPage.getMessage(), message, `The message is ${message}`);
});