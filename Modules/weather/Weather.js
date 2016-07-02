/**
 * Created by alebe on 02/07/2016.
 */

forecastDays = 6;

//Print WEATHER FORECAST

//Unit

    var unit;
    if (config.unit.toLowerCase() == "metric") unit = "C";
    else if (config.unit.toLowerCase() == "imperial") unit = "F";


//PrintfTemp

fWeather = getfWeather(6);
    for (var id = 0; id != forecastDays;id++) {
        document.getElementById("day" + (id + 1) + ".temp").innerHTML = Math.round(fWeather.list[id].temp.day) + "&deg;" + unit + " " + getIcon(fWeather.list[id].weather[0].icon);
    }

//DayName

var dayName = new Date();
var day = dayName.getDay();
var dayOfTheWeek = ["Domenica", "Luned&igrave;", "Marted&igrave;", "Mercoled&igrave;", "Gioved&igrave;", "Venerd&igrave;", "Sabato"];

//PrintDay

var dayN = day+1;

for (var id = 0; id != 6; id++) {
    if (dayN <= 6) {
        document.getElementById("day" + (id+1)).innerHTML = dayOfTheWeek[dayN];
        dayN++;
    }
    else {
        dayN = 0;
        document.getElementById("day" + (id+1)).innerHTML = dayOfTheWeek[dayN];
        dayN++;
    }
}


//Print CURRENT WEATHER

cweather = getcWeather();
document.getElementById("name").innerHTML = cweather.name;
document.getElementById("icond").innerHTML = getIcon(cweather.weather[0].icon);

//Print CURRENT TEMP
document.getElementById("temp").innerHTML = Math.round(cweather.main.temp_min) + "&deg;" + unit + " - " +  Math.round(cweather.main.temp_max) + "&deg;" + unit + "<br />"  + Math.round(cweather.main.temp) + "&deg;" + unit + "<br/>" + "Hum: " + cweather.main.humidity + "%";
