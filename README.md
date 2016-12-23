# sls nightwatch-browserstack

[Original boilerplate](https://github.com/browserstack/nightwatch-browserstack)

## Setup
* Clone the repo
* Install dependencies `npm install`

* Set things up to work locally:
  * Get Selenium from here: http://selenium-release.storage.googleapis.com/index.html
  * Make a {repo}/bin directory and dump the `selenium-server-standalone-WHATEVERVERSION.jar` therein
  * Get the chromedriver here: https://sites.google.com/a/chromium.org/chromedriver/downloads
  * Get the firefox driver (called geckodriver) here: https://github.com/mozilla/geckodriver/releases
  * Make a directory wherever you like, drop the two drivers therein, uncompress them, and add that directory to your path (on a mac, edit your `/etc/paths` file)
  * Fire up selenium by running `java -jar selenium-server-sndalone-3.0.1.jar`

* Set things up to work on Browserstack:
  * Set your BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY env vars (I dropped mine in .bashrc).  These can be found by going to https://www.browserstack.com/automate/nightwatch, logging in, and search on the page for 'browserstack.user'.
  * Understand that we have a limited number of minutes on browserstack so don't go nuts.  Otherwise, you're all set and can run the tests (see below).


## Running your tests

These commands will run all the tests under `tests/sls-react`.
As a reminder, if you're going to run the tests locally you have to have Selenium running too.

- To run tests with firefox (default) locally, run `npm run react_dev`
- To run tests with firefox and chrome locally, run `npm run react_parallel_dev`
- To run tests with chrome on a random OS on browserstack, run `npm run react_browserstack`
- To run tests with chrome, firefox, safari, and ie on random OS's on browserstack, run `npm run react_browserstack_multi`

## Notes
* You can view your test results on the [BrowserStack automate dashboard](https://www.browserstack.com/automate)
* To test on a different set of browsers, check out our [platform configurator](https://www.browserstack.com/automate/node#setting-os-and-browser)

  
## Additional Resources
* [Documentation for writing automate test scripts in Node](https://www.browserstack.com/automate/node)
* [Customizing your tests on BrowserStack](https://www.browserstack.com/automate/capabilities)
* [Browsers & mobile devices for selenium testing on BrowserStack](https://www.browserstack.com/list-of-browsers-and-platforms?product=automate)
* [Using REST API to access information about your tests via the command-line interface](https://www.browserstack.com/automate/rest-api)
* [Example to update the Browserstack session status based on the test results](https://github.com/blueimp/nightwatch-browserstack)
