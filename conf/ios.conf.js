const LT_USERNAME = process.env.LT_USERNAME || "your_username";
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "your_key";

exports.capabilities = {
  'browserName': '',
  'platformName': 'ios',
  'appium:deviceName': 'iPhone 15',
  'appium:platformVersion': '17',
  'appium:app': 'lt://proverbial-ios',
  'appium:isRealMobile': true,

  'lt:options': {
    'w3c': true,
    'project': 'Mocha_iOS_Single',
    'build': 'Mocha-iOS-Single-Build',
    'name': 'Mocha-Single-Test',
    'user': LT_USERNAME,
    'accessKey': LT_ACCESS_KEY,
    'visual': true,
    'network': true,
    'console': true
  }
};

exports.LT_USERNAME = LT_USERNAME;
exports.LT_ACCESS_KEY = LT_ACCESS_KEY;