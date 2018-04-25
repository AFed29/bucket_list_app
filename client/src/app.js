const CountryView = require('./views/country_view.js');
const Request = require('./services/request.js');

const countryView = new CountryView();
const restCountriesRequest = new Request('https://restcountries.eu/rest/v2/all');
const bucketListCountriesRequest = new Request('http://localhost:3000/api/bucketlist/countries')

const getRestCountriesComplete = function (allCountries) {
  allCountries.forEach( (country) => countryView.addCountryToSelect( country ));
}

const addCountryRequestComplete = function (addedCountry) {
  countryView.addCountryToBucketList( addedCountry );
}

const onCountrySelect = function(event){
  // console.log(event.target.value);
  const selectedCountry = event.target.value;

  const newBucketListItem = {
    name: selectedCountry
  }
  bucketListCountriesRequest.post(addCountryRequestComplete, newBucketListItem);
}

const getBucketListCountriesComplete = function (bucketListCountries) {
  bucketListCountries.forEach( (country) => countryView.addCountryToBucketList( country ));
}

const appStart = function () {

  restCountriesRequest.get(getRestCountriesComplete);

  bucketListCountriesRequest.get(getBucketListCountriesComplete);

  const countrySelect = document.querySelector('#country-select');
  countrySelect.addEventListener('change', onCountrySelect);
}

document.addEventListener('DOMContentLoaded', appStart);
