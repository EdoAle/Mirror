var triangulate = require('wifi-triangulate')
 
triangulate(function (err, location) {
  document.getElementById("last-box").innerHTML = "latitudine: " + location.lat + " longitudine: " + location.lng; // => { lat: 38.0690894, lng: -122.8069356, accuracy: 42 } 
})
