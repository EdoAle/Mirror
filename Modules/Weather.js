/**
 * Created by alebe on 02/07/2016.
 */

forecastDays = 6;

//Unit

    var unit;
    if (config.unit.toLowerCase() == "metric") unit = "C";
    else if (config.unit.toLowerCase() == "imperial") unit = "F";

//PrintTemp

    for (var id = 0; id != forecastDays;id++) {
        fWeather = getfWeather(6);
        document.getElementById("day" + (id + 1) + ".temp").innerHTML = Math.round(fWeather.list[id].temp.day) + "&deg;" + unit;
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