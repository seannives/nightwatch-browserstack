// This runs using a local selenium jar rather than running up on browserstack
// It runs the sls-react tests against staging.sidelineswap.com

nightwatch_config = {
  src_folders : [ "tests/sls-react" ],
  // Uncomment this if you want .xml reports written to the reports folder
  //"output_folder" : "reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "",
  "globals_path" : "",


  "selenium" : {
    // NOTE: I haven't been able to get nightwatch to start selenium directly.
    // Instead I need to start it myself with:
    // java -jar selenium-server-sndalone-3.0.1.jar
    // after having put the chromedriver and geckodriver into a ~/WebDrivers directory
    // and adding that directory to my /etc/paths file.
    "start_process" : false,
    "server_path" : "/Users/seannives/Repos/SidelineSwap/nightwatch-browserstack/bin/selenium-server-standalone-3.0.1.jar",
    "log_path" : "",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "/Users/seannives/Repos/SidelineSwap/nightwatch-browserstack/chromedriver",
      "webdriver.gecko.driver" : "/Users/seannives/Repos/SidelineSwap/nightwatch-browserstack/geckodriver"
    }
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "https://staging.sidelineswap.com",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      // there are a mess of these, see: https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
      "desiredCapabilities": {
        "browserName": "firefox",
        "marionette": true,
        "cssSelectorsEnabled": true,
        "acceptSslCerts": true
      },
      // we can switch these to env vars if we want
      "username": "XXX",
      "access_key": "XXX"
    },

    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    },

  },

  "test_workers": {
    "enabled": true,
    "workers": "auto"
  },

  // We can change this to mocha if we want
  "test_runner": "default"
};

// Code to copy seleniumhost/port into test settings
for(var i in nightwatch_config.test_settings){
  var config = nightwatch_config.test_settings[i];
  config['selenium_host'] = nightwatch_config.selenium.host;
  config['selenium_port'] = nightwatch_config.selenium.port;
}

module.exports = nightwatch_config;
