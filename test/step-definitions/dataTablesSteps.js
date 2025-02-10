import { Then } from '@wdio/cucumber-framework'
import { assert } from 'chai'
import AllureReporter from "@wdio/allure-reporter";

import DataTablesPage from '../page-objects/dataTablesPage.js'

Then(/^Sum of Due column values should be (\d+)$/, async(expectedSum) => {
    AllureReporter.addStep(`Sum of Due column values should be ${expectedSum}`);
    assert.equal(await DataTablesPage.countSumOfColumnValues(), expectedSum, 'The sum of Due column values is not correct');
});