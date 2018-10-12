const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const conf = require('./config/db');
const app = express();

const port=8080;
app.use(bodyParser.json());
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  
  next();
});

MongoClient.connect(conf.url, (err, client)=>{
  if(err) return console.log(err);

  require('./app/routes')(app, client.db(conf.name));

  app.listen(port, ()=>{
    console.log('Working...');
  });
});
