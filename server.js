const { response } = require('express');
const express = require('express');
const app = express();
const body = require('body-parser');
const bodyParser = require('body-parser');
const { Db } = require('mongodb');
const MongoClient = require('mongodb').MongoClient;


app.use(bodyParser.urlencoded({extended: true}));


app.get('/write',function(request,response){
    response.sendFile(__dirnema+'/write.html')
});

app.post('/add',function(request,response){
    response.send('post')
    Db.collection('post').insertOne({title: ' ', day : '  '}, function(){});
});

MongoClient.connect('', function(error, client){
    if (error) return console.log(error);
    app.listen('8080', function(){
      console.log('listening on 8080')
      
    });
  })
