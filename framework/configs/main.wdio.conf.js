import path from 'node:path';
import fs from 'fs-extra';

export const downloadDir = path.resolve('./tmp');
export const uploadDir = path.resolve('./upload');
const allureResultsDir = path.resolve('./allure-results');
const BRANCH_NAME = process.env.BRANCH_NAME || 'unit_5_practice';
console.log(`Branch Name from ENV: ${BRANCH_NAME}`);

function clearAllureResults() {
    fs.emptyDirSync(allureResultsDir);
    console.log('The folder "allure-results" is cleaned');
  }

export const mainConfig = {
    runner: 'local',
    user: process.env.BROWSERSTACK_USERNAME || '',
    key: process.env.BROWSERSTACK_ACCESS_KEY || '',

    services: process.env.BROWSERSTACK_USERNAME ? ['browserstack'] : [],
    exclude: [
    ],
    maxInstances: 1,
    logLevel: 'warn',
    bail: 0,
    waitforTimeout: 0,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    reporters: ['spec',
        ['allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: true,
            },
    ]],

    baseUrl: "https://the-internet.herokuapp.com/",

    // hostname: 'localhost',
    // port: 4444,
    // path: '/',

    onPrepare: function() {
        fs.ensureDir(downloadDir);
        clearAllureResults();
    },

    after: function (result, capabilities, specs) {
        fs.emptyDir(downloadDir);
    },

    // beforeTest: function () {
    //     browser.url(this.baseUrl);
    //  },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },

}
