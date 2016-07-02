/**
 * Created by alebe on 02/07/2016.
 */



//DAQ Part

function getfWeather(Days) {

//Weather Forecast DAQ

    var wForecast = new XMLHttpRequest();
    wForecast.open("GET", "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + config.city + "&appid=" + config.api + "&units=" + config.unit + "&lang=" + config.language + "&cnt=" + Days, false);
    wForecast.send(null);
    var weatherForecast = JSON.parse(wForecast.response);
    return(weatherForecast);

}

//Output Part
//Prints current weather data



var weatherForecast = getfWeather(forecastDays);
var currentWeather = getcWeather();

printfWeather(weatherForecast);
