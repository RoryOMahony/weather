const storage = new Storage();

class WeatherRetriever {
  constructor() {
    this.apiKey = "06c81211b61031c0d8c68bcedae7ca7a";
    this.loadFromStorage();
  }

  // returns a promise
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&APPID=${this.apiKey}`
    );

    const responseData = await response.json();
    return responseData;
  }

  changeLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;

    this.storeInStorage();
  }

  loadFromStorage() {
    this.changeLocation(storage.getCity(), storage.getCountryCode());
  }

  storeInStorage() {
    storage.setCity(this.city);
    storage.setCountryCode(this.countryCode);
  }
}
