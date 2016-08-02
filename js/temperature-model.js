function KelvinToCelsius(int) {
  var celsius = int - 273.15;
  return celsius;
}

function KelvinToFahrenheit(int) {
  var fahrenheit = (int - 273.15) * 1.8 + 32;
  return fahrenheit;
}

module.exports.KelvinToCelsius = KelvinToCelsius;
module.exports.KelvinToFahrenheit = KelvinToFahrenheit;
