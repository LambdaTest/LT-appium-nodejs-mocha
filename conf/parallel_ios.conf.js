LT_USERNAME = process.env.LT_USERNAME || "<your username>";          //Enter your LambdaTest username here
LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "<your accessKey>";      //Enter your LambdaTest accessKey here

var config = {
  commanCapabilities: {
    'build': 'Mocha-iOS-Parallel-Sample', //Build name
    'name': 'Mocha-iOS-Parallel', // Test name
    'app' : 'lt://proverbial-ios',   //Add app (.ipa) url here 
    'isRealMobile' : true,
    'visual': false,  // To take step by step screenshot
    'network':false,  // To capture network Logs
    'console':false, // To capture console logs.
    'tunnel': false 
  },
  multiCapabilities: [
    {
      // Desired capabilities
      'platformName':'ios', // OS name
      'deviceName': 'iPhone XS', // Device name
      'platformVersion': '13', // OS version
      'browserName' : '',
    },
    {
        'platformName':'ios', // OS name
    'deviceName': 'iPhone 13 Pro', // Device name
    'platformVersion': '15', // OS version
    'browserName' : '',
    }
  ]
};

exports.capabilities = [];
// Code to support common capabilities
config.multiCapabilities.forEach(function(caps) {
  var temp_caps = JSON.parse(JSON.stringify(config.commanCapabilities));
  for (var i in caps) temp_caps[i] = caps[i];
  exports.capabilities.push(temp_caps);
});