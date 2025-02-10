import { Given } from '@wdio/cucumber-framework'

import Browser from '../../framework/browser/Browser.js';
import testData from '../../resources/testData.json' assert { type: "json" };
import UIMainPage from '../page-objects/UIMainPage.js';
import AllureReporter from '@wdio/allure-reporter';

Given('I am on the {string} webpage', async (webpage) => {
    AllureReporter.addStep(`Navigate to ${webpage} page`);
    await Browser.openUrl(testData.urlUITest);
    await UIMainPage.clickNavigationLink(webpage);
});