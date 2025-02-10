import { Then, When } from "@wdio/cucumber-framework";

import ValvePage from "../page-objects/valvePage.js";
import AllureReporter from "@wdio/allure-reporter";
import Browser from "../../framework/browser/Browser.js";

Then('The Valve page should be displayed', async () => {
    AllureReporter.addStep(`Verify that the user is on the Valve page`);
    await ValvePage.isPageOpened(); 
});

When('I switch back to the previous tab', async () => {
    AllureReporter.addStep('Switch back to the previous tab');
    await Browser.switchToTab(0);
});
