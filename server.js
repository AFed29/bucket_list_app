const express = require('express');
const bodyParser = require('body-parser');
const server = express();

server.use(bodyParser.json());
server.use(express.static('client/public'));

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
  if (err) {
    console.error(err);
    return;
  }
  const db = client.db('bucket_list');

  console.log('connected to DB');
  const countriesCollection = db.collection('countries');

  server.post('/api/bucketlist/countries', function (req, res) {
    const newCountry = req.body;

    countriesCollection.save(newCountry, function (err, result) {
      if(err) {
        console.error(err);
        res.status(500);
        res.send();
        return;
      }

      console.log('Saved');

      res.status(201);
      res.json(result.ops[0]);
    });
  });

  server.get('/api/bucketlist/countries', function (req, res) {
    countriesCollection.find().toArray(function (err, allCountries){
      if(err){
        console.error(err);
        res.status(500);
        res.send();
        return;
      }

      res.json(allCountries);
    });
  });

  server.delete('/api/bucketlist/countries', function (req, res) {
    countriesCollection.deleteMany(function (err, result) {
      if(err){
        console.error(err);
        res.status(500);
        res.send();
        return;
      }

      res.status(204);
      res.send();
    });
  });
});

server.listen(3000, function () {
  console.log("Listening on port 3000");
})
