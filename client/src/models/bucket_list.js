const Request = require('../services/request.js');

const BucketList = function () {
  this.countries = [];
  this.url = 'http://localhost:3000/api/bucketlist/countries';
}

BucketList.prototype.addCountry = function ( country, callback ) {
  this.countries.push( country );
  callback( this.countries );
};

BucketList.prototype.getData = function (onComplete) {
  const request = new Request(this.url)
  request.get((countries) => {
    this.countries = countries;
    onComplete(countries);
  });
};

module.exports = BucketList;
