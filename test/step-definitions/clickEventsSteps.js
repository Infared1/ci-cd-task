import { Given, Then, When } from '@wdio/cucumber-framework'
import { assert } from 'chai'

import { $ } from '@wdio/globals';
import Browser from "../../framework/browser/Browser.js";
import AllureReporter from '@wdio/allure-reporter';
import testData from "../../resources/testData.json" assert { type: "json" };

Given('I am on {string} page', async(page) => {
    await Browser.openUrl(testData.testUrl);
    const linkClickEvent = await $('//*[contains(@class, "wp-element-button") and contains(., "Click Events")]');
    //await linkClickEvent.waitForClickable({timeout: 5000})
    await linkClickEvent.click();
});

When('I click on Cat button', async() => {
    const buttonCat = await $('//*[@class="custom_btn btn_hover"]//*[text()="Cat"]')
    await buttonCat.click({force: true});
})

Then('I see the successful message {string}', async(message) => {
    const successfulMessage = await $('//*[@id="demo"]');
    assert.equal(await successfulMessage.getText(), message, 'Not equal');
})

