const webdriver = require("selenium-webdriver");
const { By } = require("selenium-webdriver");


const config = require("../conf/android.conf.js");

const LT_USERNAME = config.LT_USERNAME;
const LT_ACCESS_KEY = config.LT_ACCESS_KEY;
const caps = config.capabilities;


async function buildDriver(capabilities) {
  return new webdriver.Builder()
    .usingServer(
      `http://${LT_USERNAME}:${LT_ACCESS_KEY}@mobile-hub.lambdatest.com/wd/hub`
    )
    .withCapabilities(capabilities)
    .build();
}

describe("Mocha Android Test", function () {
  let driver;
  this.timeout(0);

  it("Should launch app and perform actions", async function () {
    
    driver = await buildDriver(caps);

    try {
      console.log("Test Started...");

      // Color Button
      await driver.findElement(By.id("com.lambdatest.proverbial:id/color")).click();
      console.log("Successfully clicked Color");

      // Text Button
      await driver.findElement(By.id("com.lambdatest.proverbial:id/Text")).click();
      console.log("Successfully clicked Text");

      // Toast Button
      await driver.findElement(By.id("com.lambdatest.proverbial:id/toast")).click();
      console.log("Successfully clicked Toast");

    } catch (err) {
      console.error("Error during test:", err.message);
      throw err;
    } finally {
      
      if (driver) {
        await driver.quit();
        console.log("Test Finished.");
      }
    }
  });
});