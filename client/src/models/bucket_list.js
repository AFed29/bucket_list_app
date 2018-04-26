const Request = require('../services/request.js');

const BucketList = function () {
  this.countries = [];
  this.url = 'http://localhost:3000/api/bucketlist/countries';
}

BucketList.prototype.addCountry = function ( country, onComplete ) {

  const request = new Request(this.url);
  console.log(country);
  request.post(( country ) => {
    this.countries.push( country );
    onComplete(country);
  }, country);
};

BucketList.prototype.getData = function (onComplete) {
  const request = new Request(this.url);
  request.get((countries) => {
    this.countries = countries;
    onComplete(countries);
  });
};

BucketList.prototype.deleteAll = function (onComplete) {
  this.countries = [];
  const request = new Request(this.url);
  request.deleteAll(onComplete);
};

module.exports = BucketList;
