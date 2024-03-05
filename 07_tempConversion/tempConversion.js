const convertToCelsius = function (tempFarenheit) {
  return ((tempFarenheit - 32) * 5 / 9).toFixed(1) * 1
};

const convertToFahrenheit = function (tempCelsius) {
  return ((tempCelsius * (9 / 5)) + 32).toFixed(1) * 1
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
