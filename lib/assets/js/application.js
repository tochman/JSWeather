function initiateGeolocation() {
     navigator.geolocation.getCurrentPosition(handleGeolocationQuery);
}
 
function handleGeolocationQuery(position){
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	getWeatherByCoords(lat, lon);
	displayMap(lat, lon);
    
 }
 
 function displayMap(lat, lon){
     var image_url = "http://maps.google.com/maps/api/staticmap?sensor=false&center=" + lat + "," +
                        lon + "&zoom=14&size=300x400&markers=color:blue|label:S|" +
                        lat + ',' + lon;

        $("#map").remove();
        $(document.body).append(
            $(document.createElement("img")).attr("src", image_url).attr('id','map')
        );
 }


function getWeather(location, callback, url) {
    var url = (typeof url !== 'undefined' ? url : 'http://api.openweathermap.org/data/2.5/weather?q=');
    var api_url = url + location + "&units=metric";
    $.ajax({
        dataType: "jsonp",
        url: api_url,
        success: callback
    });
}

function getByCoord(callback, url) {
    var api_url = url;
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

function getWeatherByCoords(lat, lon) {
    getByCoord(function (response) {
		//debugger;
        $('#city').html(response.name);
        $('#city_temp').html(response.main.temp);
		displayMap(lat, lon);
    }, 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon=' + lon + "&units=metric");
}

	
	$("#q_city").geocomplete({
	  details: ".geo-details",
	  detailsAttribute: "data-geo"
	})
	.bind("geocode:result", function (event, result) {	
		//debugger;
		var lat = result.geometry.location.lat();
		var lon = result.geometry.location.lng();
		getWeatherByCoords(lat, lon);
		});
	;


function updateDisplay() {
    getWeatherForSelectedCity($("#current_city").val());
}

$(document).ready(function () {
	initiateGeolocation();
    updateDisplay();

    $('#current_city').change(function () {
        getWeatherForSelectedCity($("#current_city").val());
    });
	
	//$("#q_city").geocomplete();

	// Trigger geocoding request.
	$("#q_city").blur(function(){
	  $("q_city").trigger("geocode");
	});
});