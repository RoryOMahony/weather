class Storage {
  constructor() {
    this.defaultCity = "London";
    this.defaultCountryCode = "UK";
  }

  // could have a method that returns both bits of informatin in an object literal

  getCity() {
    const city = localStorage.getItem("city");
    return city || this.defaultCity;
  }

  getCountryCode() {
    const countryCode = localStorage.getItem("country-code");
    return countryCode || this.defaultCountryCode;
  }

  setCity(city) {
    localStorage.setItem("city", city);
  }

  setCountryCode(countryCode) {
    localStorage.setItem("country-code", countryCode);
  }
}
