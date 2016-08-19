var lat;
var lng;
navigator.geolocation.getCurrentPosition(function(position) {
     // Get the coordinates of the current position.
    lat = position.coords.latitude;
    lng = position.coords.longitude;
});