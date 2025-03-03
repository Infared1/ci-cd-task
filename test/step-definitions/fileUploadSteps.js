import { When, Then } from '@wdio/cucumber-framework'
import {assert} from 'chai';

import {uploadDir} from "../../framework/configs/main.wdio.conf.js";
import path from "path";
import testData from '../../resources/testData.json' assert { type: "json" };
import fileUploadPage from "../page-objects/fileUploadPage.js";
import AllureReporter from '@wdio/allure-reporter';

When('I choose file for upload', async () => {
    const filepath = path.resolve(uploadDir, testData.fileName);
    await fileUploadPage.uploadFile(filepath);
    console.log(await fileUploadPage.getFileInfo())
});

Then('User see successful message', async () => {
    console.log((await fileUploadPage.getSuccessMessage()))
    assert.equal(await fileUploadPage.getSuccessMessage(), testData.successMessage, 'File didnt upload');
})