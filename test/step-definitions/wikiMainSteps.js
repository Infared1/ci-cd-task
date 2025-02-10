import { Given, Then, When } from '@wdio/cucumber-framework'

import Browser from '../../framework/browser/Browser.js';
import testData from '../../resources/testData.json' assert { type: "json" };
import WikiMainPage from '../page-objects/wikiMainPage.js';
import AllureReporter from '@wdio/allure-reporter';
import { assert } from 'chai';

Given('I am on the Wikipedia main page', async () => {
    AllureReporter.addStep(`Navigate to Wikipedia page`);
    await Browser.openUrl(testData.urlWiki);
});

Then('The Wikipedia main page should be opened', async () => {
    AllureReporter.addStep(`Check that Wikipedia page is opened`);
    assert.isTrue(await WikiMainPage.isPageOpened(), 'Wiki main page is not opened');
});

When('I select the English language', async () => {
    AllureReporter.addStep('Select English language');
    await WikiMainPage.selectEngLanguage();
});

When('I type {string} in the search input and click the search button', async (text) => {
    AllureReporter.addStep(`Type ${text} in the search input and click the search button`);
    await WikiMainPage.typeTextAndSearch(text);
});