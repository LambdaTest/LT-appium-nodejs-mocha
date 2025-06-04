LT_USERNAME = process.env.LT_USERNAME || "<your username>";          //Enter your LambdaTest username here
LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "<your accessKey>";      //Enter your LambdaTest accessKey here

var config = {
  commonCapabilities: {
    build: "Mocha-iOS-Parallel-Sample", //Build name
    name: 'Mocha-iOS parallel', // Test name
    tunnel: false, // Make it true to run the localhost through tunnel
    browserName: 'safari', // Add browser name here
    app : 'lt://proverbial-ios',  // Add app (.ipa) url here
    isRealMobile : true,
    visual: false,  // To take step by step screenshot
    network:false,  // To capture network Logs
    console:false, // To capture console logs.
  },
  multiCapabilities: [
    {
      // Desired capabilities
      'platformName':'ios', // OS name
      'deviceName': 'iPhone 12', // Device name
      'platformVersion': '14', // OS version
    },
    {
        'platformName':'ios', // OS name
        'deviceName': 'iPhone 13', // Device name
        'platformVersion': '15', // OS version
    }
  ]
};

exports.capabilities = [];
// Code to support common capabilities
config.multiCapabilities.forEach(function(caps) {
  var temp_caps = JSON.parse(JSON.stringify(config.commonCapabilities));
  for (var i in caps) temp_caps[i] = caps[i];
  exports.capabilities.push(temp_caps);
});