const { response } = require('express');
const express = require('express');
const app = express();
const body = require('body-parser');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;


app.use(bodyParser.urlencoded({extended: true}));

app.listen(8080, function() {
    console.log('listening on 8080')
});


app.get('/write',function(request,response){
    response.sendFile(__dirnema+'/write.html')
});

app.post('/add',function(request,response){
    response.send('post')
});