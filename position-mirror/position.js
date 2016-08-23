var requirePosition = function(){
//console.log("sono nella funzione di posizione");
var triangulate = require('wifi-triangulate');
var locations1 = 0;
var item1 = 0;

function foo(){
  //document.write("sono nella funzione");
  //while (item == 0){
    //console.log("sono nel loop");

    triangulate(function (err, location){
      //dcoument.write("sono nella funzione per la posizione");
      //console.log(location);
    //document.getElementById("demo").innerHTML = (location.lat);
    //console.log(location);
      item1 = location;
    });
    return(item1);
}

var ciclo = setInterval(abc, 2000);

function abc(){
  locations1 = foo();
  if (locations1 != 0){
    //document.write("sono nell'if");
    clearInterval(ciclo);
    //document.write(location.lat + "<br />" + location.lng);
    config.lat = locations1.lat;
    config.lng = locations1.lng;
    //alert(config.lat + " " + config.lng);
    printcWeather();
    printfWeather();
  }
}
};

module.exports.requirePosition = requirePosition;