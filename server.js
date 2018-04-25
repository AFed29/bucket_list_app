const express = require('express');
const bodyParser = require('body-parser');
const server = express();

server.use(bodyParser.json());
server.use(express.static('client/public'));

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

server.listen(3000, function () {
  console.log("Listening on port 3000");
})
