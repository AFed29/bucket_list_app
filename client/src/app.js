const Countries = require('./models/countries.js');
const BucketList = require('./models/bucket_list.js');
const CountryView = require('./views/country_view.js');
const BucketListView = require('./views/bucket_list_view.js')

const countries = new Countries();
const bucketList = new BucketList();
const countryView = new CountryView();
const bucketListView = new BucketListView();


const getRestCountriesComplete = (countries) => {
  countryView.renderSelect( countries );
};

const addCountryRequestComplete = function (addedCountry) {
  countryView.addCountryToBucketList( addedCountry );
};

const onCountrySelect = function(event) {
  const selectedCountryCode = event.target.value;
  const selectedCountry = countries.findByCode(selectedCountryCode);

  bucketList.addCountry(selectedCountry, bucketListView.renderBucketList);
}

const getBucketListCountriesComplete =  (bucketListCountries) =>{
  bucketListView.renderBucketList( bucketListCountries );
};

const appStart = function () {

  countries.getData(getRestCountriesComplete);

  bucketList.getData(getBucketListCountriesComplete);

  const countrySelect = document.querySelector('#country-select');
  countrySelect.addEventListener('change', onCountrySelect);
};

document.addEventListener('DOMContentLoaded', appStart);
