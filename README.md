# JS Mocha With Appium ![pw](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

<p align="center">
  <a href="https://www.lambdatest.com/blog/?utm_source=github&utm_medium=repo&utm_campaign=LT-appium-nodejs-mocha" target="_bank">Blog</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/support/docs/?utm_source=github&utm_medium=repo&utm_campaign=LT-appium-nodejs-mocha" target="_bank">Docs</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/learning-hub/?utm_source=github&utm_medium=repo&utm_campaign=LT-appium-nodejs-mocha" target="_bank">Learning Hub</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/newsletter/?utm_source=github&utm_medium=repo&utm_campaign=LT-appium-nodejs-mocha" target="_bank">Newsletter</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/certifications/?utm_source=github&utm_medium=repo&utm_campaign=LT-appium-nodejs-mocha" target="_bank">Certifications</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.youtube.com/c/LambdaTest" target="_bank">YouTube</a>
</p>
&emsp;
&emsp;
&emsp;

_Appium is a tool for automating native, mobile web, and hybrid applications on iOS, Android, and Windows platforms. It supports iOS native apps written in Objective-C or Swift and Android native apps written in Java or Kotlin. It also supports mobile web apps accessed using a mobile browser (Appium supports Safari on iOS and Chrome or the built-in 'Browser' app on Android). Perform Appium automation tests on [LambdaTest's online cloud](https://www.lambdatest.com/mobile-app-testing/?utm_source=github&utm_medium=repo&utm_campaign=LT-appium-nodejs-mocha)._

_Learn the basics of [Appium testing on the LambdaTest platform](https://www.lambdatest.com/support/docs/getting-started-with-appium-testing/)._

[<img height="53" width="200" src="https://user-images.githubusercontent.com/70570645/171866795-52c11b49-0728-4229-b073-4b704209ddde.png">](https://accounts.lambdatest.com/register)

## Table of Contents

- [Pre-requisites](#pre-requisites)
- [Run Your First Test](#run-your-first-test)
- [Executing The Tests](#executing-the-tests)

## Pre-requisites

Before you can start performing App automation testing with Appium, you would need to follow these steps:

- Download and install **NodeJS**. You should be having **NodeJS v6** or newer. Click [here](https://nodejs.org/en/) to download.
- Make sure you are using the latest version of **JavaScript**.
- Install **npm** from the official website by clicking [here](https://www.npmjs.com/).

### Clone The Sample Project

Clone the LambdaTest’s :link: [LT-appium-nodejs-mocha](https://github.com/LambdaTest/LT-appium-nodejs-mocha) repository and navigate to the code directory as shown below:

```bash
git clone https://github.com/LambdaTest/LT-appium-nodejs-mocha
cd LT-appium-nodejs-mocha
```

### Setting Up Your Authentication

Make sure you have your LambdaTest credentials with you to run test automation scripts on LambdaTest. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans/?utm_source=github&utm_medium=repo&utm_campaign=LT-appium-nodejs-mocha) or access the [Automation Dashboard](https://appautomation.lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=LT-appium-nodejs-mocha).

Set LambdaTest `Username` and `Access Key` in environment variables.

**For Linux/macOS:**

```bash
export LT_USERNAME=YOUR_LAMBDATEST_USERNAME \
export LT_ACCESS_KEY=YOUR_LAMBDATEST_ACCESS_KEY
```

**For Windows:**

```powershell
set LT_USERNAME=YOUR_LAMBDATEST_USERNAME `
set LT_ACCESS_KEY=YOUR_LAMBDATEST_ACCESS_KEY
```

### Upload Your Application

Upload your ___iOS___ application (.ipa file) or ___android___ application (.apk file) to the LambdaTest servers using our __REST API__. You need to provide your __Username__ and __AccessKey__ in the format `Username:AccessKey` in the __cURL__ command for authentication. Make sure to add the path of the __appFile__ in the cURL request. Here is an example cURL request to upload your app using our REST API:

**Using App File:**

**For Linux/macOS:**

```bash
curl -u "YOUR_LAMBDATEST_USERNAME:YOUR_LAMBDATEST_ACCESS_KEY" \
--location --request POST 'https://manual-api.lambdatest.com/app/upload/realDevice' \
--form 'name="Android_App"' \
--form 'appFile=@"/Users/macuser/Downloads/proverbial_android.apk"'
```

**For Windows:**

```powershell
curl -u "YOUR_LAMBDATEST_USERNAME:YOUR_LAMBDATEST_ACCESS_KEY" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk""
```

**Using App URL:**

**For Linux/macOS:**

```bash
curl -u "YOUR_LAMBDATEST_USERNAME:YOUR_LAMBDATEST_ACCESS_KEY" \
--location --request POST 'https://manual-api.lambdatest.com/app/upload/realDevice' \
--form 'name="Android_App"' \
--form 'url="https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk"'
```

**For Windows:**

```powershell
curl -u "YOUR_LAMBDATEST_USERNAME:YOUR_LAMBDATEST_ACCESS_KEY" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -d "{"url":"https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk","name":"sample.apk"}"
```

> **Tip:**

> - If you do not have any __.apk__ or __.ipa__ file, you can run your sample tests on LambdaTest by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).
> - Response of above cURL will be a **JSON** object containing the `App URL` of the format - <lt://APP123456789123456789> and will be used in the next step.

## Run Your First Test

Once you are done with the above-mentioned steps, you can initiate your first test on LambdaTest.

Test Scenario: Check out [android_test.js](https://github.com/LambdaTest/LT-appium-nodejs-mocha/blob/master/specs/android_test.js) file to view the sample test script for android and [ios_test.js](https://github.com/LambdaTest/LT-appium-nodejs-mocha/blob/master/specs/ios_test.js) for iOS.

### Configuring Your Test Capabilities

You can update your custom capabilities in the scripts. In our sample script, we are passing platform name, platform version, device name and app url (generated earlier) along with other capabilities like build name and test name via capabilities object. The capabilities object in the sample code for a single test are defined as:

**Android:**

```javascript
exports.capabilities = {
  'build': 'Mocha-Appium-Sample', //Build name
  'name': 'Mocha-Android', // Test name
  'platformName':'android', // OS name
  'deviceName': 'Galaxy S10', // Device name
  'platformVersion': '11', // OS version
  'app' : 'lt://proverbial-android',     // Add app (.apk) url here
  'isRealMobile' : true,
  'visual': false,  // To take step by step screenshot
  'network':false,  // To capture network Logs
  'console':false, // To capture console logs.
  'tunnel': false // If you want to run the localhost than change it to true
  };
```

**iOS:**

```javascript
exports.capabilities = {
  'build': 'Mocha-iOS-Sample', //Build name
  'name': 'Mocha-iOS', // Test name
  'platformName':'ios', // OS name
  'deviceName': 'iPhone 12 Pro', // Device name
  'platformVersion': '15', // OS version
  'app' : 'lt://proverbial-ios',     // Add app (.ipa) url here
  'isRealMobile' : true,
  'visual': false,  // To take step by step screenshot
  'network':false,  // To capture network Logs
  'console':false, // To capture console logs.
  'tunnel': false // If you want to run the localhost than change it to true
  };
```

**Info Note:**

- You must add the generated __APP_URL__ to the `"app"` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt :link: __[Capabilities Generator tool](https://www.lambdatest.com/capabilities-generator/index.html)__. A more Detailed Capability Guide is available [here :page_facing_up:](https://www.lambdatest.com/support/docs/desired-capabilities-in-appium/) .

## Executing The Tests

Installing depencies:

```js
npm i
npm run
npm install selenium-webdriver
npm i appium-android-driver
npm i appium-base-driver
npm install --save
```

Execute the following command to run your test on LambdaTest platform:

**Android:**

```js
npm run android    //to run single test
npm run parallel_android    //to run parallel tests
```

**IOS:**

```js
npm run ios    //to run single test
npm run parallel_ios    //to run parallel tests
```

__Info:__ Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on the :link: [LambdaTest App Automation Dashboard](https://appautomation.lambdatest.com/build/?utm_source=github&utm_medium=repo&utm_campaign=LT-appium-nodejs-mocha).

## Additional Links

- [Advanced Configuration for Capabilities](https://www.lambdatest.com/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](https://www.lambdatest.com/support/docs/testing-locally-hosted-pages/)
- [How to integrate LambdaTest with CI/CD](https://www.lambdatest.com/support/docs/integrations-with-ci-cd-tools/)

## Documentation & Resources :books:

Visit the following links to learn more about LambdaTest's features, setup and tutorials around test automation, mobile app testing, responsive testing, and manual testing.

- [LambdaTest Documentation](https://www.lambdatest.com/support/docs/?utm_source=github&utm_medium=repo&utm_campaign=LT-appium-nodejs-mocha)
- [LambdaTest Blog](https://www.lambdatest.com/blog/?utm_source=github&utm_medium=repo&utm_campaign=LT-appium-nodejs-mocha)
- [LambdaTest Learning Hub](https://www.lambdatest.com/learning-hub/?utm_source=github&utm_medium=repo&utm_campaign=LT-appium-nodejs-mocha)

## LambdaTest Community :busts_in_silhouette:

The [LambdaTest Community](https://community.lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=LT-appium-nodejs-mocha) allows people to interact with tech enthusiasts. Connect, ask questions, and learn from tech-savvy people. Discuss best practises in web development, testing, and DevOps with professionals from across the globe 🌎

## What's New At LambdaTest ❓

To stay updated with the latest features and product add-ons, visit [Changelog](https://changelog.lambdatest.com/)

## About LambdaTest

[LambdaTest](https://www.lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=LT-appium-nodejs-mocha) is a leading test execution and orchestration platform that is fast, reliable, scalable, and secure. It allows users to run both manual and automated testing of web and mobile apps across 3000+ different browsers, operating systems, and real device combinations. Using LambdaTest, businesses can ensure quicker developer feedback and hence achieve faster go to market. Over 500 enterprises and 1 Million + users across 130+ countries rely on LambdaTest for their testing needs.

### Features

- Run Selenium, Cypress, Puppeteer, Playwright, and Appium automation tests across 3000+ real desktop and mobile environments.
- Real-time cross browser testing on 3000+ environments.
- Test on Real device cloud
- Blazing fast test automation with HyperExecute
- Accelerate testing, shorten job times and get faster feedback on code changes with Test At Scale.
- Smart Visual Regression Testing on cloud
- 120+ third-party integrations with your favorite tool for CI/CD, Project Management, Codeless Automation, and more.
- Automated Screenshot testing across multiple browsers in a single click.
- Local testing of web and mobile apps.
- Online Accessibility Testing across 3000+ desktop and mobile browsers, browser versions, and operating systems.
- Geolocation testing of web and mobile apps across 53+ countries.
- LT Browser - for responsive testing across 50+ pre-installed mobile, tablets, desktop, and laptop viewports

[<img height="53" width="200" src="https://user-images.githubusercontent.com/70570645/171866795-52c11b49-0728-4229-b073-4b704209ddde.png">](https://accounts.lambdatest.com/register)

## We are here to help you :headphones:

- Got a query? we are available 24x7 to help. [Contact Us](mailto:support@lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=LT-appium-nodejs-mocha)
- For more info, visit - [LambdaTest](https://www.lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=LT-appium-nodejs-mocha)