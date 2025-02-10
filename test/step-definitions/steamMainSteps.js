import { Given, When } from '@wdio/cucumber-framework';
import { assert } from 'chai';

import Browser from '../../framework/browser/Browser.js';
import testData from '../../resources/testData.json' assert { type: "json" };
import SteamMainPage from '../page-objects/steamMainPage.js';
import AllureReporter from '@wdio/allure-reporter';

Given('I open the Steam main page', async () => {
    AllureReporter.addStep('Navigate to Steam main page');
    await Browser.openUrl(testData.urlSteam);
});

When('I click on the Valve link', async () => {
    AllureReporter.addStep('Click on Valve link');
    await SteamMainPage.clickValveLink();
});

When('I switch to the new tab', async () => {
    AllureReporter.addStep('Switch to the new tab');
    await Browser.switchToTab(1);
});

When(/^I click on the "Install Steam" button$/, async () => {
    AllureReporter.addStep(`Click on the Install Steam button`);
    await SteamMainPage.clickInstallSteamButton();
});

When(/^I search for the game "([^"]*)"$/, async (gameName) => {
    AllureReporter.addStep(`Search for the game ${gameName}`);
    await SteamMainPage.searchForGame(gameName);
});