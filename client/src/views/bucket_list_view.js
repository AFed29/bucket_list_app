const BucketListView = function () {
}

BucketListView.prototype.addCountryToBucketList = function ( country ) {
  this.renderBucketList( country );
};

BucketListView.prototype.renderBucketList = function ( countries ){
  const bucketList = document.querySelector('#bucket-list');
  bucketList.innerHTML = '';
  countries.forEach( (country) => {
    const li = document.createElement('li');
    li.textContent = country.name;
    bucketList.appendChild(li);
  });
};

BucketListView.prototype.addToBucketList = function ( country ){
  const bucketList = document.querySelector('#bucket-list');
  const li = document.createElement('li');
  li.textContent = country.name;
  bucketList.appendChild(li);
};

BucketListView.prototype.clearBucketList = function () {
  const bucketList = document.querySelector('#bucket-list');
  bucketList.innerHTML = '';
};




module.exports = BucketListView;
