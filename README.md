# sls nightwatch-browserstack

[Original boilerplate](https://github.com/browserstack/nightwatch-browserstack)

## Setup
* Clone the repo
* Install dependencies `npm install`

* Set things up to work locally:
  * fly
  * super

* Set things up to work on Browserstack:
  * Set your BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY env vars (I dropped mine in .bashrc).
  * Update `*.conf.js` files inside the `conf/` directory with your BrowserStack Username and Access Key(https://www.browserstack.com/accounts/settings).  These can be found by going to https://www.browserstack.com/automate/nightwatch, logging in, and search on the page for 'browserstack.user'.


## Running your tests

These commands will run all the tests under `tests/sls-react`.

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
