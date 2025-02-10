import { Then, When } from '@wdio/cucumber-framework'
import { assert } from 'chai';

import { downloadDir } from "../../framework/configs/main.wdio.conf.js";
import path from 'path';
import Browser from '../../framework/browser/Browser.js';
import DownloadPDFPage from '../page-objects/downloadPDFPage.js';
import AllureReporter from '@wdio/allure-reporter';

Then('The {string} page is opened', async (page) => {
    AllureReporter.addStep(`Check that ${page} page is opened`);
    assert.isTrue(await DownloadPDFPage.isPageOpened(), `${page} page is not opened`);
});

When(/^I click on the "Submit" button$/, async () => {
    AllureReporter.addStep(`Click on the Submit button`);
    await DownloadPDFPage.clickSubmitButton();
});

Then('The file should be downloaded successfully', async () => {
    AllureReporter.addStep('Check that the file is downloaded');
    const getFilePath = path.resolve(downloadDir, await DownloadPDFPage.getNameFile());; 
    assert.isTrue(await Browser.File.isFileExist(getFilePath), 'File was not downloaded');
}); 