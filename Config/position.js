var triangulate = require('wifi-triangulate');
var location = 0;
var item = 0;

//function foo(){
  //console.log("sono nella funzione");
  //while (item == 0){
    //console.log("sono nel loop");

    triangulate(function (err, location){
      //console.log("sono nella funzione dentro il loop");
      //console.log(location);
    document.getElementById("demo").innerHTML = (location.lat);
      //item = location.lat;
    });
    //while(item == 0){
      //console.log("foo" + item);
    //}
    //return(item);
//}
/*var ciclo = setInterval(abc, 2000);
function abc(){
  location = foo();
  if (location != 0){
    clearInterval(ciclo);
    document.getElementById("demo").innerHTML = (location);
  }
}*/
