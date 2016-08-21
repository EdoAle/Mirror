var triangulate = require('wifi-triangulate');
var latitude;
var longitude;
 
triangulate(function (err, location) {
  latitude = location.lat;
  longitude = location.lng;
})
document.getElementById("last-box").innerHTML = "latitudine: " + latitude + "<br /> longitudine: " + latitude; // => { lat: 38.0690894, lng: -122.8069356, accuracy: 42 } 
