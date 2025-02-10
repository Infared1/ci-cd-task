import { Given, When } from '@wdio/cucumber-framework';
import { assert } from 'chai';

import Browser from '../../framework/browser/Browser.js';
import testData from '../../resources/testData.json' assert { type: "json" };
import WeatherMainPage from '../page-objects/weatherMainPage.js';
import AllureReporter from '@wdio/allure-reporter';

Given(/^I am on the main page$/, async () => {
    await Browser.openUrl(testData.urlWeather);
});

When(/^I accept the policy$/, async () => {
    await WeatherMainPage.isPolicyButtonVisible();
    await WeatherMainPage.acceptPolicy();
});

When(/^I search for "([^"]*)" city$/, async (text) => {
    await WeatherMainPage.addSearchText(text);
});

When(/^I select the first search result$/, async () => {
    await WeatherMainPage.areDisplayedSearchResults();
    await WeatherMainPage.clickSearchResult(0);
});

