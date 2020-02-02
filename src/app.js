const weatherRetreiver = new WeatherRetriever();
const ui = new Ui();

// load the weather information when the page loads
document.addEventListener("DOMContentLoaded", updateWeatherInformation);

// Need to use jQuery to close the modal
const changeLocationButton = document.getElementById("w-change-btn");
changeLocationButton.addEventListener("click", handleChangeLocationClick);

function updateWeatherInformation() {
  weatherRetreiver
    .getWeather()
    .then(data => ui.paint(new WeatherInformation(data)))
    .catch(error => console.log(error));
}

function changeLocation() {
  const cityInput = document.getElementById("city");
  const countryCodeInput = document.getElementById("countryCode");
  weatherRetreiver.changeLocation(cityInput.value, countryCodeInput.value);
}

function handleChangeLocationClick(event) {
  event.preventDefault();

  changeLocation();
  updateWeatherInformation();

  // Close the modal
  $("#locModal").modal("hide");
}
