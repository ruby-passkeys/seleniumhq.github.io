const Chrome = require('selenium-webdriver/chrome');
const {suite} = require('selenium-webdriver/testing');
const options = new Chrome.Options();

suite(function (env) {
  describe('Should be able to Test Command line arguments', function () {
    it('headless', async function () {
      let driver = await env
        .builder()
        .setChromeOptions(options.addArguments('headless'))
        .build();

      await driver.get('https://www.google.com');
      await driver.quit();
    });

    it('exclude switches', async function () {
      let driver = await env
        .builder()
        .setChromeOptions(options.excludeSwitches('enable-automation'))
        .build();

      await driver.get('https://www.google.com');
      await driver.quit();
    });
  });
});