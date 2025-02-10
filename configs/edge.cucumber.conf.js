import { downloadDir, mainConfig } from "../framework/configs/main.wdio.conf.js";

export const config = {
    ...mainConfig,
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./test/step-definitions/**/*.js'],
    },
    specs: [
        '../test/features/**/*.feature'
    ],
    capabilities: [
        {
            browserName: "MicrosoftEdge",
            "ms:edgeOptions": {
                args: [
                    //'--headless',
                    '--disable-gpu',
                    '--start-maximized',
                    '--window-size=1920,1080',
                    '--lang=en',
                    '--no-sandbox',
                    '--disable-dev-shm-usage',
                    '--remote-debugging-port=9222'
                ],
                w3c: true,
                prefs: {
                    "download.default_directory": downloadDir,
                    "safebrowsing.enabled": true,
                    "safebrowsing.disable_download_protection": true
                }
            }
        }
    ]
};

// println "PATH: " + System.getenv("PATH")
// println new File("D:\\Drivers\\msedgedriver.exe").exists()