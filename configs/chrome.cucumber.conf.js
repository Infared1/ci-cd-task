import { downloadDir, mainConfig } from "../framework/configs/main.wdio.conf.js";

const BROWSER = process.env.BROWSER || 'chrome';

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
};

export const config = {
    ...mainConfig,
    ...{
        framework: 'cucumber',
        cucumberOpts: {
            require: ['./test/step-definitions/**/*.js'],
            backtrace: false,
            requireModule: [],
            dryRun: false,
            failFast: false,
            snippets: true,
            source: true,
            profile: [],
            strict: false,
            tagExpression: '',
            timeout: 60000,
            ignoreUndefinedDefinitions: false
        },
        specs: [
            '../test/features/**/*.feature'
        ],
        capabilities: [
            browserOptions[BROWSER] || browserOptions['chrome']
        ]
    }
};
