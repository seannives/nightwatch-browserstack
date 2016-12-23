module.exports = {
  'Testing Insecure React Routes' : function (browser) {
    browser
      // homepage
      .url('https://staging.sidelineswap.com')
      .waitForElementVisible('body', 1000)
      .assert.containsText('h1', 'WHERE ATHLETES BUY AND SELL THEIR GEAR')
      // login
      .url('https://staging.sidelineswap.com/login')
      .waitForElementVisible('body', 1000)
      .assert.containsText('h2', 'Welcome Back')
      // register
      .url('https://staging.sidelineswap.com/register')
      .waitForElementVisible('body', 1000)
      .assert.containsText('h2', 'Create your SidelineSwap Account')
      // pw reset
      .url('https://staging.sidelineswap.com/password/reset/2345')
      .waitForElementVisible('body', 1000)
      .assert.containsText('h1', 'Reset Your Password')
      // about
      .url('https://staging.sidelineswap.com/about')
      .waitForElementVisible('body', 1000)
      .assert.containsText('h2', 'SidelineSwap was founded in 2012 by former college athletes and coaches')
      // privacy policy
      .url('https://staging.sidelineswap.com/privacy')
      .waitForElementVisible('body', 1000)
      .assert.containsText('h1', 'Privacy Policy')
      // Terms
      .url('https://staging.sidelineswap.com/terms')
      .waitForElementVisible('body', 1000)
      .assert.containsText('h1', 'Terms of Use')
      .end();
  }
};
