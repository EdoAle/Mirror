/**
 * Created by alebe on 02/07/2016.
 */

forecastDays = 6;
var cUpdateTime = 1800000;
var fUpdateTime = 7200000;

//Print WEATHER FORECAST

function printfWeather(fdays) {

//PrintfTemp

    fWeather = getfWeather(fdays);
    for (var id = 0; id != forecastDays; id++) {
        document.getElementById("day" + (id + 1) + ".temp").innerHTML = Math.round(fWeather.list[id].temp.day) + "&deg;" + getUnit(config.unit) + " " + getIcon(fWeather.list[id].weather[0].icon);
    }

//PrintDay

    var dayN = getDayNum() + 1;

    for (var id = 0; id != fdays; id++) {
        if (dayN <= fdays) {
            document.getElementById("day" + (id + 1)).innerHTML = getDayName(dayN);
            dayN++;
        }
        else {
            dayN = 0;
            document.getElementById("day" + (id + 1)).innerHTML = getDayName(dayN);
            dayN++;
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

setInterval(printcWeather(),cUpdateTime);
setInterval(printfWeather(forecastDays),fUpdateTime);