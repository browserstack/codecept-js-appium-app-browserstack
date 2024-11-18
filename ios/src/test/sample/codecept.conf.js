const browserstack = require("browserstack-local");
const util = require('util');
require('dotenv').config()

const BROWSERSTACK_USERNAME = process.env.BROWSERSTACK_USERNAME
const BROWSERSTACK_ACCESS_KEY = process.env.BROWSERSTACK_ACCESS_KEY

exports.config = {
    tests: './*_test.js',
    output: './output',
    timeout: 120,
    helpers: {
        Appium: {
            url: 'https://bstackdemo.com',
            app: "../BStackSampleApp.ipa",
            user: BROWSERSTACK_USERNAME,
            key: BROWSERSTACK_ACCESS_KEY,
            host: "hub.browserstack.com",
            port: 4444,
            platform: "iOS",
            desiredCapabilities: {
                'appiumV2': true, // Enable Appium 2.x
                'browserstack.debug': true,
                'browserstack.networkLogs': true,
            }
        }
    },
    include: {
        I: './steps_file.js'
    },
    mocha: {},
    name: 'CodeceptJS-Appium-BrowserStack',
    plugins: {
        pauseOnFail: {},
        retryFailedStep: {
            enabled: true
        },
        tryTo: {
            enabled: true
        },
        screenshotOnFail: {
            enabled: true
        }
    }
}
