var KelvinToCelsius = require('./../js/temperature-model.js').KelvinToCelsius;
var KelvinToFahrenheit = require('./../js/temperature-model.js').KelvinToFahrenheit;


$(document).ready(function(){
  $("#temperature").click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showTemperature').append("The temperature in " + city + " is " + Math.floor((parseInt(response.main.temp))) + " degrees Kelvin</br>");
      $('.showTemperature').append("The temperature in " + city + " is " + Math.floor(KelvinToCelsius(parseInt(response.main.temp))) + " degrees Celsius</br>");
      $('.showTemperature').append("The temperature in " + city + " is " + Math.floor(KelvinToFahrenheit(parseInt(response.main.temp))) + " degrees Fahrenheit</br>");
    }).fail(function(error){
      $('.showTemperature').text(error.statusText);
    });
  });
});
