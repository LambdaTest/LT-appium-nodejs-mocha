const webdriver = require("selenium-webdriver");
const { By } = require("selenium-webdriver");


const config = require("../conf/ios.conf.js");

// Credentials
const LT_USERNAME = config.LT_USERNAME || "your_username";
const LT_ACCESS_KEY = config.LT_ACCESS_KEY || "your_key";

const caps = config.capabilities;


async function buildDriver(capabilities) {
  return new webdriver.Builder()
    .usingServer(
      `http://${LT_USERNAME}:${LT_ACCESS_KEY}@mobile-hub.lambdatest.com/wd/hub`
    )
    .withCapabilities(capabilities)
    .build();
}

describe("Mocha Appium iOS Single Device Test", function () {
  let driver;
  this.timeout(0);

  it("Application is launched and actions performed", async function () {
   
    driver = await buildDriver(caps);

    try {
      console.log("iOS Test Started...");

      await driver.findElement(By.xpath('//XCUIElementTypeButton[@name="color"]')).click();
      console.log("Successfully clicked Color");

      await driver.findElement(By.xpath('//XCUIElementTypeStaticText[@name="Notification"]')).click();
      console.log("Successfully clicked Notification");

      await driver.findElement(By.xpath('//XCUIElementTypeStaticText[@name="Toast"]')).click();
      console.log("Successfully clicked Toast");

      await driver.findElement(By.xpath('//XCUIElementTypeButton[@name="Text"]')).click();
      console.log("Successfully clicked Text");

    } catch (err) {
      console.error("iOS Test Error: ", err.message);
      throw err;
    } finally {
      
      if (driver) {
        await driver.quit();
        console.log("iOS Session Closed.");
      }
    }
  });
});