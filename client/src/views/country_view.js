const CountryView = function () {
  this.restCountries = [];
  this.bucketListCountries = [];
}

CountryView.prototype.addCountryToSelect = function ( country ) {
  this.restCountries.push( country );
  this.renderSelect( country );
};

CountryView.prototype.renderSelect = function ( country) {
  const countrySelect = document.querySelector('#country-select');
  const option = document.createElement('option');
  option.textContent = country.name;
  countrySelect.appendChild(option);
};

module.exports = CountryView;
