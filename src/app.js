const weatherRetreiver = new WeatherRetriever("London", "UK");
const ui = new Ui();

document.addEventListener("DOMContentLoaded", updateWeatherInformation);

function updateWeatherInformation() {
  weatherRetreiver
    .getWeather()
    .then(data => ui.paint(new WeatherInformation(data)))
    .catch(error => console.log(error));
}
