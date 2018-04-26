const Request = require('../services/request.js');

const BucketList = function () {
  this.countries = [];
  this.url = 'http://localhost:3000/api/bucketlist/countries';
}

BucketList.prototype.addCountry = function ( country, onComplete ) {
  this.countries.push( country );
  const request = new Request(this.url);
  request.post(onComplete, country);
  console.log(this.countries);
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
