var triangulate = require('wifi-triangulate')

var latitude1 = 0;
var longitude1 = 0;
 
triangulate(function (err, location) {
  //if (err) throw err
  var latitude = location.lat;
  var longitude = location.lng;
  latitude1 = latitude;
  longitude1 = longitude;
  console.log(latitude1 + " " + longitude1); 
});