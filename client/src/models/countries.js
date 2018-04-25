const Request = require('../services/request.js');

const Countries = function () {
  this.countries = [];
  this.url = 'https://restcountries.eu/rest/v2/all';
}

Countries.prototype.addCountry = function ( country ) {
  this.restCountries.push( country );
};

Countries.prototype.getData = function (onComplete) {
  const request = new Request(this.url)
  request.get((countries) => {
    this.countries = countries;
    onComplete(countries);
  });
};

Countries.prototype.findByCode = function (alpha3Code) {
  return this.countries.find((country) => {
    return country.alpha3Code === alpha3Code;
  });
};

module.exports = Countries;
