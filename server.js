const { response } = require('express');
const express = require('express');
const app = express();
const body = require('body-parser');
const bodyParser = require('body-parser');
const { Db } = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
app.set('view engine','ejs');
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
require('dotenv').config()


app.get('/write',function(request,response){
    response.sendFile(__dirnema+'/write.html')
});

app.post('/add',function(request,response){
    response.send('post')
    Db.collection('post').insertOne({_id: total+1 ,title: ' ', day : '  '}, function(){});
});


app.get('/list', function(requset,response){
    response.render('list.ejs');
});
app.listen('/list',function(requset,response){

});


app.delete('/delete',function(request,response){
    response.send('DELETE')
});

app.get('/test', function(request, response){
    response.send('<p>some html</p>')
    response.status(404).send('Sorry, we cannot find that!')
    response.sendFile('/uploads/logo.png')
    response.render('list.ejs', {  })
    response.json()
  });

MongoClient.connect('', function(error, client){
    if (error) return console.log(error);
    app.listen('8080', function(){
      console.log('listening on 8080')
      
    });
  });

  db.collection('counter').updateOne( {before} , {after} , function(error, result){
    console.log('edit')
  });

  app.get('/detail/:id', function(request, response){
    response.render('detail.ejs', {} )
  });
  
  app.put('/edit', function(request, response){
    db.collection('post').updateOne( {_id : ''}, {$set : { 제목 : '', 날짜 :  ''}}, function(){
      console.log('edit')
    });
  });


  app.get('/mypage', function(request, response){
    response.render('mypage.ejs', {} )
  });

  function loginon( request, response, next){
    if(request.user){
      next()
    }
    else{
      response.send('no login')
    }
  }