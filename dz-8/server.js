const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const conf = require('./config/db');
const app = express();

const port=8080;
app.use(bodyParser.json());

MongoClient.connect(conf.url, (err, client)=>{
  if(err) return console.log(err);

  require('./app/routes')(app, client.db(conf.name));

  app.listen(port, ()=>{
    console.log('Working...');
  });
});
