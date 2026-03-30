const LT_USERNAME = process.env.LT_USERNAME || "your_username";
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "your_key";

const commonCapabilities = {

  browserName: '',                
  platformName: 'iOS',
  'appium:isRealMobile': true,

  'lt:options': {
    user: LT_USERNAME,
    accessKey: LT_ACCESS_KEY,
   
    app: 'lt://proverbial-ios', 
    build: 'Mocha-iOS-Parallel-Final',
    tunnel: false,
    visual: false,
    network: false,
    console: true,
    w3c: true,
    
    isRealMobile: true 
  }
};

const devices = [
  {
    deviceName: 'iPhone 15.*',
    platformVersion: '17',
    testName: 'Test-iPhone-15'
  },
  {
    deviceName: 'iPhone 14.*',
    platformVersion: '16',
    testName: 'Test-iPhone-14'
  }
];

exports.capabilities = devices.map(device => ({
  ...commonCapabilities,
  'lt:options': {
    ...commonCapabilities['lt:options'],
    deviceName: device.deviceName,
    platformVersion: device.platformVersion,
    name: device.testName
  }
}));

exports.LT_USERNAME = LT_USERNAME;
exports.LT_ACCESS_KEY = LT_ACCESS_KEY;