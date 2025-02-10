import { Given } from '@wdio/cucumber-framework'

import { mainConfig } from '../../framework/configs/main.wdio.conf.js';
import Browser from '../../framework/browser/Browser.js';
import testData from '../../resources/testData.json' assert { type: "json" };
import MainPage from '../page-objects/mainPage.js';
import AllureReporter from '@wdio/allure-reporter';

Given(/^I am on the '(.*)' page$/, async (page) => {
    AllureReporter.addStep(`Navigate to ${page} page`);

    let url = mainConfig.baseUrl;

    if (page === 'Basic Auth') {
        const username = testData.username; 
        const password = testData.password;
        url = url.replace('https://', `https://${username}:${password}@`);
    }

    await Browser.openUrl(url);
    await MainPage.clickNavigationLink(page);
});