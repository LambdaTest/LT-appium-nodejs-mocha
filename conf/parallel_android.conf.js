const LT_USERNAME = process.env.LT_USERNAME || "your_username";
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "your_key";

const commonCapabilities = {
  browserName: '', 
  platformName: 'Android',
  'appium:app': 'lt://proverbial-android',
  'appium:isRealMobile': true,

  'lt:options': {
    user: LT_USERNAME,
    accessKey: LT_ACCESS_KEY,
    build: 'Android-Real-Device-Parallel',
    name: 'Mocha-Android-Parallel',
    tunnel: false,
    visual: false,
    network: false,
    console: true,
    w3c: true 
  }
};

const devices = [
  { name: 'Galaxy.*', ver: '12' },
  { name: 'Galaxy.*', ver: '11' }
];

exports.capabilities = devices.map(device => ({
  ...commonCapabilities,
 
  'lt:options': {
    ...commonCapabilities['lt:options'],
    deviceName: device.name,
    platformVersion: device.ver
  }
}));

exports.LT_USERNAME = LT_USERNAME;
exports.LT_ACCESS_KEY = LT_ACCESS_KEY;