import { Then } from "@wdio/cucumber-framework";
import { assert } from "chai";

import scrollbarsPage from "../page-objects/scrollbarsPage.js";
import AllureReporter from "@wdio/allure-reporter";

Then("I should see that the hiding button is visible", async () => {
    AllureReporter.addStep("Scroll and click the hiding button");
    await scrollbarsPage.scrollAndClickHidingButton();

    AllureReporter.addStep("Verify the hiding button is visible");
    assert.isTrue(await scrollbarsPage.isHiddingButtonVisible(), "The hiding button is not visible");
});
