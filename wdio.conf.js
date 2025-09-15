import * as path from "path";
import { setGlobalDispatcher, ProxyAgent } from "undici";

const build_name = process.env.BROWSERSTACK_BUILD_NAME || "Green Testbed";

const config = {
  //
  // ====================
  // Runner Configuration
  // ====================
  // WebdriverIO supports running e2e tests as well as unit and component tests.
  runner: "local",
  tsConfigPath: "./tsconfig.json",

  //
  // =================
  // Service Providers
  // =================
  // WebdriverIO supports Sauce Labs, Browserstack, Testing Bot and LambdaTest (other cloud providers
  // should work too though). These services define specific user and key (or access key)
  // values you need to put in here in order to connect to these services.
  //
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  //
  // If you run your tests on Sauce Labs you can specify the region you want to run your tests
  // in via the `region` property. Available short handles for regions are `us` (default) and `eu`.
  // These regions are used for the Sauce Labs VM cloud and the Sauce Labs Real Device Cloud.
  // If you don't provide the region it will default for the `us`

  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // of the configuration file being run.
  //
  // The specs are defined as an array of spec files (optionally using wildcards
  // that will be expanded). The test for each spec file will be run in a separate
  // worker process. In order to have a group of spec files run in the same worker
  // process simply enclose them in an array within the specs array.
  //
  // The path of the spec files will be resolved relative from the directory of
  // of the config file unless it's absolute.
  //
  specs: ["./test/specs/**/*.ts"],

  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],

  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: 10,
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://saucelabs.com/platform/platform-configurator
  //

  capabilities: [
    {
      browserName: "Chrome",
      browserVersion: "latest",
      "bstack:options": {
        os: "Windows",
        osVersion: "10",
      },
    },
    {
      browserName: "Firefox",
      browserVersion: "latest",
      "bstack:options": {
        os: "Windows",
        osVersion: "10",
      },
    },
    {
      browserName: "Edge",
      browserVersion: "latest",
      "bstack:options": {
        os: "Windows",
        osVersion: "10",
      },
    },
    {
      browserName: "Safari",
      browserVersion: "17.3",
      "bstack:options": {
        osVersion: "Sonoma",
        os: "OS X",
      },
    },
    {
      browserName: "Chrome",
      browserVersion: "latest",
      "bstack:options": {
        deviceName: "Samsung Galaxy S23",
        osVersion: "13.0",
      },
    },
    {
      browserVersion: "15",
      "bstack:options": {
        deviceName: "iPhone 13",
        platformName: "ios",
      },
    },
    {
      browserVersion: "16",
      "bstack:options": {
        deviceName: "iPhone 14",
        platformName: "ios",
      },
    },
    {
      browserVersion: "17",
      "bstack:options": {
        deviceName: "iPhone 15",
        platformName: "ios",
      },
    },
    {
      "bstack:options": {
        deviceName: "iPhone 16",
        platformVersion: "18",
        platformName: "ios",
      },
    },
  ],
  commonCapabilities: {
    "bstack:options": {
      projectName: "Green Design System",
      buildName: build_name,
      debug: true,
      networkLogs: true,
    },
  },

  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "info",
  //
  // Set specific log levels per logger
  // loggers:
  // - webdriver, webdriverio
  // - @wdio/browserstack-service, @wdio/lighthouse-service, @wdio/sauce-service
  // - @wdio/mocha-framework, @wdio/jasmine-framework
  // - @wdio/local-runner
  // - @wdio/sumologic-reporter
  // - @wdio/cli, @wdio/config, @wdio/utils
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  // logLevels: {
  //     webdriver: 'info',
  //     '@wdio/appium-service': 'info'
  // },

  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,

  // Default timeout for all waitFor* commands.
  waitforTimeout: 10000,

  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 120000,

  // Default request retries count
  connectionRetryCount: 3,

  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: [
    [
      "browserstack",
      { browserstackLocal: true, opts: { forcelocal: false } },
      {
        testObservabilityOptions: {
          buildName: build_name,
          projectName: "Green Design System",
          //buildTag: 'Any build tag goes here. For e.g. ["Tag1","Tag2"]',
        },
      },
    ],
    [
      "visual",
      {
        // Some options, see the docs for more
        baselineFolder: path.join(process.cwd(), "test", "baselines"),
        formatImageName: "{platformName}-{tag}-{logName}",
        screenshotPath: path.join(process.cwd(), "tmp"),
        savePerInstance: true,
        autoSaveBaseline: true,
        tolerance: 0.5, // Set the accepted tolerance (0.5% threshold)
        failedThreshold: 0.01, // The percentage of pixels allowed to differ
        failedThresholdType: "percent",
        compareOptions: {
          ignoreAntialiasing: true,
          rawMisMatchPercentage: true,
          misMatchTolerance: 0.005,
        },
        // ... more options
      },
    ],
  ],

  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: https://webdriver.io/docs/frameworks
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: "mocha",

  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: https://webdriver.io/docs/dot-reporter
  reporters: ["spec"],

  // Options to be passed to Mocha.
  // See the full list at http://mochajs.org/
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};

config.capabilities.forEach(function (caps) {
  for (let i in config.commonCapabilities)
    caps[i] = { ...caps[i], ...config.commonCapabilities[i] };
});

export { config };
