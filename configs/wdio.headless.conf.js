import { config as sharedConfig } from '../wdio.conf.js';

export const config = {
    ...sharedConfig,
    runner: 'local',

    specs: [
        '../test/specs/**/*.js'
    ],
    suites: {
        home: [
            '../test/specs/home.spec.js',
        ],
        login: [
            '../test/specs/login.spec.js',
        ],
        settings: [
            '../test/specs/settings.js',
        ],
    },

    maxInstances: 10,

    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--disable-gpu']
        }
    }],

    logLevel: 'warn',

    bail: 0,

    baseUrl: 'http://localhost:3000/',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: [
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};