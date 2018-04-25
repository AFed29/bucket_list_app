const Request = function (url) {
  this.url = url;
}

Request.prototype.get = function (onComplete) {
  const request = new XMLHttpRequest();
  request.open('GET', this.url);
  request.addEventListener('load', function () {
    if ( request.status !== 200 ) return;

    const response = JSON.parse( request.responseText );

    onComplete( response );
  });
  request.send();
};

module.exports = Request;
