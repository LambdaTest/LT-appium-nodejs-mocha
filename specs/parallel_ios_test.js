const webdriver = require("selenium-webdriver");
const { By, until } = require("selenium-webdriver");


const conf_file = process.argv.find(arg => arg.includes('.conf.js')) || "conf/parallel_ios.conf.js";
const path = require("path");
const config = require(path.resolve(process.cwd(), conf_file));


const LT_USERNAME = config.LT_USERNAME;
const LT_ACCESS_KEY = config.LT_ACCESS_KEY;
const capabilities = config.capabilities;


async function buildDriver(caps) {
  return new webdriver.Builder()
    .usingServer(
      `https://${LT_USERNAME}:${LT_ACCESS_KEY}@mobile-hub.lambdatest.com/wd/hub`
    )
    .withCapabilities(caps)
    .build();
}


capabilities.forEach((caps) => {
  
  const deviceDisplayName = caps['lt:options'].deviceName || "iOS Device";

  describe(`Mocha iOS Parallel Test - ${deviceDisplayName}`, function () {
    let driver;
    this.timeout(0); 

    it("Application is launched and actions performed", async function () {
      
      driver = await buildDriver(caps);

      try {
        console.log(`[${deviceDisplayName}] Starting Test...`);

       
        await driver.findElement(By.xpath('//XCUIElementTypeButton[@name="color"]')).click();
        console.log(`[${deviceDisplayName}] Successfully clicked Color`);

        
        await driver.findElement(By.xpath('//XCUIElementTypeStaticText[@name="Notification"]')).click();
        console.log(`[${deviceDisplayName}] Successfully clicked Notification`);

        
        await driver.findElement(By.xpath('//XCUIElementTypeStaticText[@name="Toast"]')).click();
        console.log(`[${deviceDisplayName}] Successfully clicked Toast`);

        
        const geoBtn = await driver.wait(
          until.elementLocated(By.xpath('//XCUIElementTypeStaticText[@name="GeoLocation"]')),
          15000
        );
        await geoBtn.click();
        console.log(`[${deviceDisplayName}] Successfully clicked GeoLocation`);

      } catch (error) {
        console.error(`[${deviceDisplayName}] Test failed:`, error.message);
        throw error;
      } finally {
       
        if (driver) {
          await driver.quit();
        }
      }
    });
  });
});