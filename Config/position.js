var triangulate = require('wifi-triangulate');
 
triangulate(function (err, location) {
  latitude = location.lat;
  longitude = location.lng;
})