/**
 * Created by alebe on 02/07/2016.
 */
var positions = require("/Users/Administrator/Desktop/Mirror/Modules/weather/position.js");
positions.requirePosition();
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

    var dayN12 = getDayNum() + 1;

    for (var id1 = 0; id1 != fdays1; id1++) {
        if (dayN12 <= fdays1) {
            document.getElementById("day" + (id1 + 1)).innerHTML = getDayName(dayN12);
            dayN12++;
        } else {
            dayN12 = 0;
            document.getElementById("day" + (id1 + 1)).innerHTML = getDayName(dayN12);
            dayN12++;
        }
    }

}

//Print CURRENT WEATHER

function printcWeather() {

    cweather = getcWeather();
    document.getElementById("name").innerHTML = cweather.name;
    document.getElementById("icond").innerHTML = getIcon(cweather.weather[0].icon);

    //Print CURRENT TEMP
    document.getElementById("temp-const").innerHTML = Math.round(cweather.main.temp_min) + "&deg;" + getUnit(config.unit) + " - " + Math.round(cweather.main.temp_max) + "&deg;" + getUnit(config.unit);
    document.getElementById("temp-norm").innerHTML = Math.round(cweather.main.temp) + "&deg;" + getUnit(config.unit);
    document.getElementById("hum").innerHTML = "Hum: " + cweather.main.humidity + "%";
}

setInterval(printcWeather(), cUpdateTime);
setInterval(printfWeather(forecastDays), fUpdateTime);