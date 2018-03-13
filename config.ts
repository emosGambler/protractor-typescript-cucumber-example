import { browser, Config } from 'protractor';

export let config: Config = {
    baseUrl: 'https://angularjs.org/',
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: [
                '--start-maximized'
            ]
        }
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        'features/*.feature'
    ],
    cucumberOpts: {
        require: [
            'steps/*.js'
        ]
    },
    SELENIUM_PROMISE_MANAGER: false
};