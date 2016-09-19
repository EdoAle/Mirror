/**
 * Created by alebe on 02/07/2016.
 */
function printGeolocation(){
    var positions = require("position-mirror/position.js");
    positions.requirePosition();
    //alert("mi sono avviato");
}
forecastDays = 6;

var cUpdateTime = 1800000;
var fUpdateTime = 7200000;

//Print WEATHER FORECAST

function printfWeather(fdays1) { 

    //PrintfTemp

    fWeather = getfWeather(fdays1);
    for (var id = 0; id != forecastDays; id++) {
        document.getElementById("day" + (id + 1) + ".temp").innerHTML = Math.round(fWeather.list[id].temp.day) + "&deg;" + getUnit(config.unit) + " " + getIcon(fWeather.list[id].weather[0].icon);
    }

    //PrintDay

    /*var dayN12 = getDayNum() + 1;

    for (var id1 = 0; id1 != fdays1; id1++) {
        if (dayN12 <= fdays1) {
            document.getElementById("day" + (id1 + 1)).innerHTML = getDayName(dayN12);
            dayN12++;
        } else {
            dayN12 = 0;
            document.getElementById("day" + (id1 + 1)).innerHTML = getDayName(dayN12);
            dayN12++;
        }
    }*/

}

//Print CURRENT WEATHER

function printcWeather() {

    cweather = getcWeather();
    var str1 = cweather.name;
    var res1 = "";
    if (str1.length > 10){
        res1 = str1.slice(0, 9);
        res1 = res1.trim();
        res1 = res1 + "...";
        document.getElementById("temp").style.left = "6%";
        document.getElementById("icond").style.left = "0%";
        //alert(res1);
    }else{
        res1 = str1;
        if (str1.lenght > 8){
            document.getElementById("temp").style.left = "9%";
            document.getElementById("icond").style.left = "-3%";
        }
    }
    document.getElementById("name").innerHTML = res1;
    document.getElementById("icond").innerHTML = getIcon(cweather.weather[0].icon);

    //Print CURRENT TEMP
    document.getElementById("temp-const").innerHTML = Math.round(cweather.main.temp_min) + "&deg;" + getUnit(config.unit) + " - " + Math.round(cweather.main.temp_max) + "&deg;" + getUnit(config.unit);
    document.getElementById("temp-norm").innerHTML = Math.round(cweather.main.temp) + "&deg;" + getUnit(config.unit);
    document.getElementById("hum").innerHTML = "Hum: " + cweather.main.humidity + "%";
}

//printGeolocation();
setInterval(printGeolocation(), cUpdateTime);
printcWeather();
printfWeather();