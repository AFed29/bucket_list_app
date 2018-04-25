const CountryView = function () {
}

CountryView.prototype.renderSelect = ( countries ) => {
  countries.forEach( (country) => {
    const countrySelect = document.querySelector('#country-select');
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = country.alpha3Code;
    countrySelect.appendChild(option);
  });
};

module.exports = CountryView;
