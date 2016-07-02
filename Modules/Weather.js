/**
 * Created by alebe on 02/07/2016.
 */

forecastDays = 7;

//DAQ Part

//Current Weather DAQ

var cWeather = new XMLHttpRequest();
cWeather.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + config.city + "&appid=" + config.api +"&units=" + config.unit + "&lang=" + config.language, false);
cWeather.send(null);
var currentWeather = JSON.parse(cWeather.response);

//Weather Forecast DAQ

var wForecast = new XMLHttpRequest();
wForecast.open("GET", "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + config.city + "&appid=" + config.api +"&units=" + config.unit + "&lang=" + config.language + "&cnt=" + forecastDays, false);
wForecast.send(null);
var weatherForecast = JSON.parse(wForecast.response);

//Output Part

//Prints current weather data

document.write("Meteo attuale per " + currentWeather.name + "<br />");
document.write(currentWeather.weather[0].description + "<br />");
document.write("Temperatura: " + currentWeather.main.temp + "°C" + "<br />");
document.write("Nuvole: " + currentWeather.clouds.all + "<br />");
document.write("Umidità: " + currentWeather.main.humidity + "<br />" + "<br />" + "<br />");

//Prints weather forecast data

document.write("Previsioni meteo per " + weatherForecast.city.name + "<br />");
document.write("Domani" + "<br />");
document.write(weatherForecast.list[0].weather[0].description + "<br />");
document.write(weatherForecast.list[0].temp.day + "<br />");