const { By } = require("selenium-webdriver");
const wd = require('wd');
const path = require('path');

var conf_file = process.argv[3] || "conf/ios.conf.js";
var caps = require("../" + conf_file).capabilities;
const LT_USERNAME = process.env.LT_USERNAME || "LT_USERNAME";
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "LT_ACCESS_KEY";

var buildDriver = function(caps) {
  return wd.promiseChainRemote(
    `https://${LT_USERNAME}:${LT_ACCESS_KEY}@mobile-hub.lambdatest.com/wd/hub`
  );
};

describe("Mocha Appium iOS Test", function() {
  var driver;
  this.timeout(0);

  it('Application is launched', async function() { 
    driver = buildDriver(caps);
    await driver.init(caps);
    
    await driver.elementById('color').click();
    console.log("Successfully clicked Color");
    
    await driver.elementById('Text').click();
    console.log("Successfully clicked Text");
    
    await driver.elementById('notification').click();
    console.log("Successfully clicked Notification");
    
    await driver.elementById('toast').click();
    console.log("Successfully clicked Toast");
    
    await driver.quit();
  });
});


    
