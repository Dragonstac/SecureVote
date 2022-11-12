const mongoose = require('mongoose');


 mongoose.connect('mongodb://localhost:27017/');

 const db = mongoose.connection;

 db.on('error', console.error.bind(console, "Error connecting te MongoD8"));

 db.once('open',function(){

    console.log('connected to data base');
  });

  module.exports= db;