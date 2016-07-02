/**
 * Created by alebe on 02/07/2016.
 */


//DAQ Part

function getcWeather() {

//Current Weather DAQ

    var cWeather = new XMLHttpRequest();
    cWeather.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + config.city + "&appid=" + config.api + "&units=" + config.unit + "&lang=" + config.language, false);
    cWeather.send(null);
    var currentWeather = JSON.parse(cWeather.response);
    return(currentWeather);

}

function printcWeather(curweather) {
    var currentWeather = curweather;
 }
