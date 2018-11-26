// npm install --save macaddress
// https://github.com/scravy/node-macaddress

var os = require('os');
var macaddress = require('macaddress');

// macaddress.one(function (err, mac) {
//     console.log("Mac address for this host: %s", mac);  
// });

// macaddress.one('en0', function (err, mac) {
//     console.log("Mac address for awdl0: %s", mac);  
// });

macaddress.all(function (err, all) {
    var string = JSON.stringify(all, null, 2)
    // console.log(string)
    var objectValue = JSON.parse(string)
    console.log('Mac Address: ' + objectValue['en0']['mac'])
    console.log('IP: ' + objectValue['en0']['ipv4'])
});

console.log('hostname: ' + os.hostname())