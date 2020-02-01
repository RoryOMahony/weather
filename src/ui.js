class Ui {
  constructor() {
    this.location = document.getElementById("w-location");
    this.overview = document.getElementById("w-overview");
    this.description = document.getElementById("w-desc");
    this.temperature = document.getElementById("w-temp-info");
    this.weatherIcon = document.getElementById("w-icon");
    this.humidity = document.getElementById("humidity");
    this.pressure = document.getElementById("pressure");
    this.visibility = document.getElementById("visibility");
    this.windSpeed = document.getElementById("wind-speed");
    this.windDegree = document.getElementById("wind-degree");
    this.descriptionTemperature = document.getElementById("feels-like-temp");
  }

  paint(weatherInformation) {
    this.location.textContent = weatherInformation.getLocation();
    this.overview.textContent = weatherInformation.getOverview();
    this.description.textContent = weatherInformation.getDescription();
    this.temperature.textContent = weatherInformation.getTemperature();
    this.weatherIcon.src = weatherInformation.getIconUrl();
    this.humidity.textContent = weatherInformation.getHumidity();
    this.pressure.textContent = weatherInformation.getPressure();
    this.visibility.textContent = weatherInformation.getVisibility();
    this.windSpeed.textContent = weatherInformation.getWindSpeed();
    this.windDegree.textContent = weatherInformation.getWindDegreeInformation();
    this.descriptionTemperature.textContent = weatherInformation.getTemperatureDescription();
  }
}
