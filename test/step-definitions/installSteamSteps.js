import { When, Then } from '@wdio/cucumber-framework';
import { assert } from 'chai';

import Utils from '../../framework/utils/Utils.js';
import InstallSteamPage from '../page-objects/installSteamPage.js';
import AllureReporter from '@wdio/allure-reporter';

Then('The "Install Steam" page should be displayed', async () => {
    AllureReporter.addStep(`Verify that the user is on the Install Steam page`);
    await InstallSteamPage.isPageOpened();
});

When('I click the "Install" button', async () => {
    AllureReporter.addStep(`Click on the Install Steam button`);
    await InstallSteamPage.clickInstallButton();
});

Then(/^The "([^"]*)" file should be downloaded successfully$/, async (fileName) => {
    AllureReporter.addStep(`Verify that the file ${fileName} is downloaded`);
    assert.isTrue(await Utils.waitForFileToDownload(fileName, 35000), `The ${fileName} file is not downloaded`);
});