/**
 * Created by alebe on 02/07/2016.
 */
//DAQ Part CURRENT WEATHER

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

//DAQ Part WEATHER FORECAST


function getfWeather(Days) {

//Weather Forecast DAQ

    var wForecast = new XMLHttpRequest();
    wForecast.open("GET", "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + config.city + "&appid=" + config.api + "&units=" + config.unit + "&lang=" + config.language + "&cnt=" + Days, false);
    wForecast.send(null);
    var weatherForecast = JSON.parse(wForecast.response);
    return(weatherForecast);

}

//Icon Part

function getIcon(icon){
    switch (icon) {
        
        //Day Icons
        
        case "01d": return('<i class= "wi wi-day-sunny"></i>');
        case "02d":return('<i class= "wi wi-day-cloudy"></i>');
        case "03d":return('<i class= "wi wi-cloud"></i>');
        case "04d":return('<i class= "wi wi-cloudy"></i>');
        case "09d":return('<i class= "wi wi-rain"></i>');
        case "10d":return('<i class= "wi wi-day-rain"></i>');
        case "11d":return('<i class= "wi wi-day-thunderstorm"></i>');
        case "13d":return('<i class= "wi wi-day-snow"></i>');
        case "50d":return('<i class= "wi wi-day-fog"></i>');
        
        //Night Icons

        case "01n": return('<i class= "wi wi-night-clear"></i>');
        case "02n":return('<i class= "wi wi-night-alt-cloudy"></i>');
        case "03n":return('<i class= "wi wi-cloud"></i>');
        case "04n":return('<i class= "wi wi-cloudy"></i>');
        case "09n":return('<i class= "wi wi-rain"></i>');
        case "10n":return('<i class= "wi wi-night-alt-rain"></i>');
        case "11n":return('<i class= "wi wi-thunderstorm"></i>');
        case "13n":return('<i class= "wi wi-night-alt-snow"></i>');
        case "50n":return('<i class= "wi wi-night-fog"></i>');
    }
}

/**
 * Created by alebe on 02/07/2016.
 */
