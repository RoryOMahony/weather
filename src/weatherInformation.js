class WeatherInformation {
  constructor(weatherJson) {
    this.location = weatherJson.name;
    this.country = weatherJson.sys.country;

    this.overview = weatherJson.weather[0].main;
    this.description = weatherJson.weather[0].description;
    this.icon = weatherJson.weather[0].icon;

    this.temp = weatherJson.main.temp;
    this.tempMin = weatherJson.main.temp_min;
    this.tempMax = weatherJson.main.temp_max;
    this.tempDescription = weatherJson.main.feels_like;
    this.pressure = weatherJson.main.pressure;
    this.humidity = weatherJson.main.humidity;

    this.visibility = weatherJson.visibility;

    this.windSpeed = weatherJson.wind.speed;
    this.windDegree = weatherJson.wind.deg;
  }

  getLocation() {
    return `${this.location}, ${this.country}`;
  }

  getOverview() {
    return `${this.overview}`;
  }

  getDescription() {
    return `${this.description}`;
  }

  getTemperature() {
    const tempCelcius = (parseFloat(this.temp) - 273.15).toFixed(2);
    return `${tempCelcius}`;
  }

  getIcon() {
    return `${this.icon}`;
  }

  getIconUrl() {
    return `https://openweathermap.org/img/wn/${this.icon}@2x.png`;
  }

  getHumidity() {
    return `${this.humidity}`;
  }

  getPressure() {
    return `${this.pressure}`;
  }

  getVisibility() {
    return `${this.visibility}`;
  }

  getWindSpeed() {
    return `${this.windSpeed}`;
  }

  getWindDegree() {
    return `${this.windDegree}`;
  }

  getWindDegreeInformation() {
    let direction;

    const degree = parseFloat(this.windDegree);
    if (degree <= 45) {
      direction = "North";
    } else if (degree <= 135) {
      direction = "East";
    } else if (degree <= 225) {
      direction = "South";
    } else {
      direction = "West";
    }

    return `${direction} (${this.windDegree})`;
  }

  getTemperatureDescription() {
    const tempCelcius = (parseFloat(this.tempDescription) - 273.15).toFixed(2);
    return `${tempCelcius}`;
  }
}
