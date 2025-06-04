const { By } = require("selenium-webdriver");
const wd = require('wd');
const path = require('path');

var conf_file = process.argv[3] || "conf/parallel_android.conf.js";
var capabilities = require("../" + conf_file).capabilities;
const LT_USERNAME = process.env.LT_USERNAME || "LT_USERNAME";
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "LT_ACCESS_KEY";

var buildDriver = function(caps) {
  return wd.promiseChainRemote(
    `https://${LT_USERNAME}:${LT_ACCESS_KEY}@mobile-hub.lambdatest.com/wd/hub`
  );
};

describe("Mocha Parallel Test", function() {
  this.timeout(0);

  it('Application is launched on all devices', async function() {
    const testPromises = capabilities.map(async (caps) => {
      const driver = buildDriver(caps);
      await driver.init(caps);
      
      await driver.elementById('com.lambdatest.proverbial:id/color').click();
      console.log(`Successfully clicked Color on ${caps.deviceName}`);
      
      await driver.elementById('com.lambdatest.proverbial:id/Text').click();
      console.log(`Successfully clicked Text on ${caps.deviceName}`);
      
      await driver.elementById('com.lambdatest.proverbial:id/notification').click();
      console.log(`Successfully clicked Notification on ${caps.deviceName}`);
      
      await driver.elementById('com.lambdatest.proverbial:id/toast').click();
      console.log(`Successfully clicked Toast on ${caps.deviceName}`);
      
      await driver.quit();
    });

    await Promise.all(testPromises);
  });
});
      