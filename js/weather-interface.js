var Weather = require('./../js/weather-model.js').weatherModule;
var apiKey = require('./../.env').apiKey;
var displayHumidity = function(city, humidityData) {
  $('.showHumidity').text("The humidity in " + city + " is " + humidity + "%");
};

$(document).ready(function(){
  var currentWeatherObject = new Weather();
  $("#humidity").click(function(){
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity);
  });
});
