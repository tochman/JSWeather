function getWeather(location, callback, url) {
    var url = (typeof url !== 'undefined' ? url : 'http://api.openweathermap.org/data/2.5/weather?q=');
    var api_url = url + location + "&units=metric";
    $.ajax({
        dataType: "jsonp",
        url: api_url,
        success: callback
    });
}

function getWeatherForSelectedCity(location) {
    getWeather(location, function (response) {
        $('#city').html(response.name);
        $('#city_temp').html(response.main.temp);
    });
}

function getWeatherForecastForSelectedCity(location) {
    getWeather(location, function (response) {
        $('#city').html(response.city.name);
        $('#city_temp').html(response.list[4].main.temp);
    }, 'http://api.openweathermap.org/data/2.5/forecast?q=');
}

function updateDisplay() {
    getWeatherForSelectedCity($("#current_city").val());
}

$(document).ready(function () {
    updateDisplay();

    $('#current_city').change(function () {
        getWeatherForSelectedCity($("#current_city").val());
    });
});