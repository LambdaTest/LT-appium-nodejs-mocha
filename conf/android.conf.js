
LT_USERNAME = process.env.LT_USERNAME || "<your username>";      //Enter your LambdaTest username here
LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "<your accessKey>";  //Enter your LambdaTest accessKey here

exports.capabilities = {
  'build': 'Mocha-Appium-Sample', //Build name
  'name': 'Mocha-Android', // Test name
  'platformName':'android', // OS name
  'deviceName': 'Galaxy S10', // Device name
  'platformVersion': '11', // OS version
  'browserName' : '',
  'app' : 'lt://proverbial-android',     // Add app (.apk) url here
  'isRealMobile' : true,
  'visual': false,  // To take step by step screenshot
  'network':false,  // To capture network Logs
  'console':false, // To capture console logs.
  'tunnel': false // If you want to run the localhost than change it to true
  };