import { downloadDir, mainConfig } from "../framework/configs/main.wdio.conf.js";

const BROWSER = process.env.BROWSER || 'chrome';
//const RUN_ON_BROWSERSTACK = process.env.BROWSERSTACK === 'true';

const browserOptions = {
    chrome: {
        browserName: "chrome",
        "goog:chromeOptions": {
            args: [
                //'--incognito', '-private'(firefox),
                //'--headless',
                '--disable-infobars',
                '--start-maximized',
                '--window-size=1920,1080',
                '--lang=en'
            ],
            prefs: {
                "download.default_directory": downloadDir,
                'safebrowsing.enabled': true,
                'safebrowsing.disable_download_protection': true
            }
        }
    },
    edge: {
        browserName: "MicrosoftEdge",
        "ms:edgeOptions": {
            args: [
                //'--headless',
                //'--inprivate',
                '--start-maximized',
                '--window-size=1920,1080',
                '--lang=en',
                '--no-sandbox'
            ],
            prefs: {
                "download.default_directory": downloadDir,
                "safebrowsing.enabled": true,
                "safebrowsing.disable_download_protection": true
            }
        }
    },
    // browserstack: {
    //     browserName: "chrome",
    //     "bstack:options": {
    //         os: "Windows",
    //         osVersion: "10",
    //         sessionName: "WebDriverIO Cucumber Test",
    //         local: false,
    //         seleniumVersion: "4.0.0",
    //     }
    // }
};

export const config = {
    ...mainConfig,
    ...{
        framework: 'cucumber',
        cucumberOpts: {
            require: ['./test/step-definitions/**/*.js'],
        },
        specs: [
            '../test/features/**/*.feature'
        ],
        capabilities: [
            browserOptions[BROWSER] || browserOptions['chrome'],
            //RUN_ON_BROWSERSTACK ? browserOptions['browserstack'] : (browserOptions[BROWSER] || browserOptions['chrome'])
        ]
    }
};
