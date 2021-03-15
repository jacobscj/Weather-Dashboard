// API Key provided by opeanweather API
var apiKey = "a0aabd4ead254fa3fc01aaf6c28e63eb";

// establishing variables to get elements from HTML
var citySearchEl = $("#citySearch");
var searchEl = $("#searchButton");
var clearHistoryEl = $("#clearHistory");
var displayHistoryEl = $("#history");
var cityNameEl = $("#cityName");
var pictureEl = $("#picture");
var temperatureEl = $("#temperature");
var humidityEl = $("#humidity");
var windSpeedEl = $("#windSpeed");
var uvIndexEl = $("#uvIndex");
var city = "";

function getCurrentWeather(city) {
  var getUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + "raleigh" + "&appid=" + apiKey;
  $.ajax({
    url:getUrl, 
    method: "GET",
  }).then(function(response) {
    console.log(response);
  });
}

getCurrentWeather();

