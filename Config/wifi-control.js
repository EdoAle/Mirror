/*var WiFiControl = require('wifi-control');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
  var _ap = {
    ssid: "",
    password: ""
  };
 
  //  Initialize wifi-control package with verbose output 
  WiFiControl.init({
    debug: true
  });

  //  Try scanning for access points: 
  WiFiControl.scanForWiFi( function(err, response) {
    if (err) console.log(err);
    console.log(response.networks[9].ssid);
  });

rl.question("What's your wifi? ", (answer) => {
  _ap.ssid = answer;
  rl.question("What's the wifi password? ", (answer) => {
    _ap.password = answer;
    var results = WiFiControl.connectToAP( _ap, function(err, response) {
      if (err) console.log(err);
      console.log(response);
  });
  });
});*/

var wifi = require('node-wifi');

//Initialize wifi module
wifi.init({
    debug : true,
    iface : null
    // the OS will find the right network interface if it is null  
});

//Scan networks
wifi.scan(function(err, networks) {

    if (err) {
        console.log(err);
    } else {
        console.log(networks);
    }
});

//Connect to a network
wifi.connect({ ssid : "ssid", password : "password"}, function(err) {
    if (err) {
        console.log(err);
    }
    console.log('Connected');
}); 
  