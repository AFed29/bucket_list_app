const CountryView = require('./views/country_view.js');
const Request = require('./services/request.js');

const countryView = new CountryView();
const restCountriesRequest = new Request('https://restcountries.eu/rest/v2/all');

const getRestCountriesComplete = function (allCountries) {
  allCountries.forEach( (country) => countryView.addCountryToSelect( country ));
}

const appStart = function () {
  restCountriesRequest.get(getRestCountriesComplete)
}

document.addEventListener('DOMContentLoaded', appStart);
