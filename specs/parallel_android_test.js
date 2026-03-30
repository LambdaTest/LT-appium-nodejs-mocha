const webdriver = require("selenium-webdriver");
const { By } = require("selenium-webdriver");

const config = require("../conf/parallel_android.conf.js");


const LT_USERNAME = process.env.LT_USERNAME || "your_username";
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "your_key";


const capabilities = config.capabilities;


function buildDriver(caps) {
  return new webdriver.Builder()
    .usingServer(
      "http://" +
        LT_USERNAME +
        ":" +
        LT_ACCESS_KEY +
        "@mobile-hub.lambdatest.com/wd/hub"
    )
    .withCapabilities(caps)
    .build();
}


capabilities.forEach((caps) => {

  const deviceName = caps["appium:deviceName"] || "Android Device";

  describe(`Mocha Android Parallel Test - ${deviceName}`, function () {
    let driver;

   
    this.timeout(0);

    it("Application is launched and actions performed", async function () {
      driver = buildDriver(caps);

      await driver.findElement(By.id("com.lambdatest.proverbial:id/color")).click();
      console.log("Successfully clicked Color");

      await driver.findElement(By.id("com.lambdatest.proverbial:id/Text")).click();
      console.log("Successfully clicked Text");

      await driver.findElement(By.id("com.lambdatest.proverbial:id/notification")).click();
      console.log("Successfully clicked Notification");

      await driver.findElement(By.id("com.lambdatest.proverbial:id/toast")).click();
      console.log("Successfully clicked Toast");

      await driver.quit();
    });
  });

});