import { Given, Then, When } from '@wdio/cucumber-framework'
import { assert } from 'chai'

import { $ } from '@wdio/globals';
import Browser from "../../framework/browser/Browser.js";
import AllureReporter from '@wdio/allure-reporter';
import testData from "../../resources/testData.json" assert { type: "json" };
import browser from "../../framework/browser/Browser.js";

Given('User is on the (.*) page', async(page) => {
    await Browser.openUrl(testData.testUrl);
})

When('User enters login {string} and password {string}', async(email, password) => {

})

Then('User is redirected to the homepage with greeting {string}', async(page) => {

})

Given('User is on the (.*) page', async(page) => {
    await Browser.openUrl(testData.testUrl);
})

When('User enters wrong credentials', async() => {

})

Then('User sees the error message {string}' , async(wrongMessage) => {

})