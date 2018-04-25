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

CountryView.prototype.addCountryToBucketList = function ( country ) {
  this.bucketListCountries.push( country );
  this.renderBucketList( country );
};

CountryView.prototype.renderBucketList = function ( country ){
  const bucketList = document.querySelector('#bucket-list') ;
  const li = document.createElement('li');
  li.textContent = country.name;
  bucketList.appendChild(li);
}

module.exports = CountryView;
