var express = require('express');
var app = express();
//var bpp = require('express').createServer();
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var io = require('socket.io')(8182);
var ObjectId = require('mongodb').ObjectID;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(express.static('public'));

var MongoClient = require('mongodb').MongoClient;
var URL = 'mongodb://team16:hfly@localhost/team16';
MongoClient.connect(URL,function(err,db){

  //Websocket，建立即時更新功能
  io.on('connection',function(socket){

    socket.on('start',function(){

      comment.find({}).toArray(function(err,results){ 
	console.log(results);
	socket.emit('update',results);   
      });
    });

  });  

  console.log('mongodb!');

  var userpassword = db.collection('userpassword');
  var comment = db.collection('comment');

  app.post('/click',function(req,res){
    if(err) throw err; 
    console.log('click');
    console.log(req.body);
    userpassword.insert(req.body);
    userpassword.find({}).toArray(function(err, results) {
      //	console.log('result:', results);
    });
  });

  //接收到從comment.html檔中ajax發出的訊號
  //能夠在按click之後更新content的東西
  app.post('/commentclick',function(req,res){
    if (err) throw err;	
    console.log('commentclick');
    //    console.log(req.body);
    comment.insert(req.body);
    //  comment.remove();
    comment.find({}).toArray(function(err,results){ 
      res.send(results);   
    });

    //已經find到的result就是抓到要的database
  });
  //commentclick -- should be updated?
  app.get('/comment',function(req,res){
    // 應放'/'或放'/start'
    if(err) throw err;
    console.log('open it and start');	
    //   comment.insert(req.body);
    //   comment.updateOne(req.body,function(err,results){
    //    	console.log('results',results);
    //    	});    
    comment.find({}).toArray(function(err,results){
      console.log('result',results);
      res.send(results);
    });
  });
  //when open the comment.html, there are inserted comment
  // should be updated too?

  app.post('/loadagain',function(req,res){ //how to set 5s?
    if(err) throw err;
    console.log('reload');


  });
  // every 5 seconds reload 
});


app.get('/', function (req, res) {
  // require.query
  res.sendFile(__dirname+'/public/index.html');
});



var server = app.listen(8181, function () {

  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
}
)
