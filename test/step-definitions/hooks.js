// import { Before, After, BeforeAll, AfterAll } from '@wdio/cucumber-framework';
// import Browser from '../../framework/browser/Browser.js';
// import testData from '../../resources/testData.json' assert {type: "json"};
// import { assert } from 'chai';

// Before(async () => {
//     await Browser.openUrl(testData.urlSteam);
// });

// After(async () => {
//     await Browser.deleteAllCookies()
// })

import { Before, After } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals';
import fs from 'fs';
import path from 'path';
import { addAttachment } from '@wdio/allure-reporter';
import testData from "../../resources/testData.json" assert { type: "json" };

// Before(async () => {
//     await browser.url(testData.urlSteam);
// });

After(async function (scenario) {
    if (scenario.result.status === 'FAILED') {
        console.log(`Test "${scenario.pickle.name}" is failed, taking screenshot`);

        const screenshot = await browser.takeScreenshot();
        const screenshotPath = path.join(process.cwd(), 'allure-results', `${scenario.pickle.name.replace(/\s+/g, '_')}.png`);

        fs.writeFileSync(screenshotPath, screenshot, 'base64');
        console.log(`Screenshot saved: ${screenshotPath}`);

        addAttachment('Screenshot on failure', Buffer.from(screenshot, 'base64'), 'image/png');
    }
});

