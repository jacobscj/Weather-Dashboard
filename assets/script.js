$(document).ready(function(){

// API Key provided by opeanweather API
var apiKey = "a0aabd4ead254fa3fc01aaf6c28e63eb";

// establishing variables to get elements from DOM
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

$("#searchButton").on("click", function (){
  var searchedCity = citySearchEl.val();
  getCurrentWeather(searchedCity)
})

function getCurrentWeather(city) {
  var getUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";
  $.ajax({
    url:getUrl, 
    method: "GET",
  }).then(function(response) {
    console.log(response);
    cityNameEl.append(response.name)
    temperatureEl.append(response.main.temp + " °F")
    uvIndexEl.append(getUvIndex(response.coord.lat, response.coord.lon))
  });
}

function getUvIndex(lat, lon){
  var uvUrl = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
  $.ajax({
    url:uvUrl,
    method: "GET",
  }).then(function(response) {
    console.log(response.value)
  })
}

getCurrentWeather();
})


