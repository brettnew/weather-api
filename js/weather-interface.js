// var Weather = require('./../js/weather-model.js').weatherModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $("#humidity").click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showHumidity').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error){
      $('.showHumidity').text(error.statusText);
    });
  });
});
