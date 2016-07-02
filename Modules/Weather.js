/**
 * Created by alebe on 02/07/2016.
 */

//Current Weather DAQ

var cWeather = new XMLHttpRequest();
cWeather.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + config.city + "&appid=" + config.api +"&units=" + config.unit, false);
cWeather.send(null);
var currentWeather = JSON.parse(cWeather.response);

//Weather Forecast DAQ

var wForecast = new XMLHttpRequest();
wForecast.open("GET", "http://api.openweathermap.org/data/2.5/forecast?q=" + config.city + "&appid=" + config.api +"&units=" + config.unit, false);
wForecast.send(null);
var weatherForecast = JSON.parse(wForecast.response);

//Prints current weather data

document.write("Current Weather for " + currentWeather.name + "<br />");
document.write(currentWeather.weather.icon + "<br />");
document.write("Temp: " + currentWeather.main.temp + "°C" + "<br />");
document.write("Cluds: " + currentWeather.clouds.all + "<br />");
document.write("Humidity: " + currentWeather.main.humidity + "<br />" + "<br />" + "<br />");

//Prints weather forecast data

document.write("Weather Forecast for " + weatherForecast.city.name);
document.write("");
