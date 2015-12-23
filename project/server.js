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
var URL = 'mongodb://######:#####@localhost/#####';
MongoClient.connect(URL,function(err,db){


  console.log('mongodb!');

  var userpassword = db.collection('userpassword');
  var comment = db.collection('comment');
	
  var comment1 = db.collection('comment1');
  var comment2 = db.collection('comment2');
  var comment3 = db.collection('comment3');
  var comment4 = db.collection('comment4');
  var comment5 = db.collection('comment5');
  var comment6 = db.collection('comment6');
  var comment7 = db.collection('comment7');
  var comment8 = db.collection('comment8');
  var comment9 = db.collection('comment9');



  //Websocket，建立即時更新功能
  io.on('connection',function(socket){
	console.log('socket');
    socket.on('send',function(){

      comment2.find({}).toArray(function(err,results){ 
	console.log(results);
	socket.broadcast.emit('update',results);   
      });
    });

  });  



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
 //   console.log(req.body);
    comment.insert(req.body);
//  comment.remove();
    
    
    comment.find({}).toArray(function(err,results){ 
      console.log(results);
      res.send(results);   
    });

    //已經find到的result就是抓到要的database
  });


  app.post('/enterpage',function(req,res){
    if (err) throw err;	
  
 //   console.log(req.body);
  //  comment.insert(req.body);
//  comment.remove();
     
    comment.find({}).toArray(function(err,results){ 
      console.log(results);
      res.send(results);   
    });

  });

  app.post('/enterpage1',function(req,res){
    if (err) throw err;	
  
 //   console.log(req.body);
  //  comment.insert(req.body);
//  comment.remove();
     
    comment1.find({}).toArray(function(err,results){ 
      console.log(results);
      res.send(results);   
    });

  });

  app.post('/comment1',function(req,res){
  
    if (err) throw err;
    console.log('comment1');
   comment1.insert(req.body);
    //comment1.remove();
    comment1.find({}).toArray(function(err,comment1){
    
      res.send(comment1);
    
    });
  
  });


  app.post('/enterpage2',function(req,res){
    if (err) throw err;	
  
 //   console.log(req.body);
  //  comment.insert(req.body);
//  comment.remove();
     
    comment2.find({}).toArray(function(err,results){ 
      console.log(results);
      res.send(results);   
    });

  });

  app.post('/comment2',function(req,res){
  
    if (err) throw err;
   comment2.insert(req.body);
    console.log('comment2');
    //comment1.remove();
    comment2.find({}).toArray(function(err,comment2){
    
      res.send(comment2);
    
    });
  
  });

  app.post('/enterpage3',function(req,res){
    if (err) throw err;	
  
 //   console.log(req.body);
  //  comment.insert(req.body);
//  comment.remove();
     
    comment3.find({}).toArray(function(err,results){ 
      console.log(results);
      res.send(results);   
    });

  });
  
  app.post('/comment3',function(req,res){
  
    if (err) throw err;
  
    comment3.insert(req.body);
    console.log('comment3');
    //comment1.remove();
    comment3.find({}).toArray(function(err,comment3){
    
      res.send(comment3);
    
    });
  
  });

  
  app.post('/enterpage4',function(req,res){
    if (err) throw err;	
  
 //   console.log(req.body);
  //  comment.insert(req.body);
//  comment.remove();
     
    comment4.find({}).toArray(function(err,results){ 
      console.log(results);
      res.send(results);   
    });

  });
  
  
  app.post('/comment4',function(req,res){
  
    if (err) throw err;
    console.log('comment4');
    comment4.insert(req.body);
    //comment1.remove();
    comment4.find({}).toArray(function(err,comment4){
    
      res.send(comment4);
    
    });
  
  });

  
  app.post('/enterpage5',function(req,res){
    if (err) throw err;	
  
 //   console.log(req.body);
  //  comment.insert(req.body);
//  comment.remove();
     
    comment5.find({}).toArray(function(err,results){ 
      console.log(results);
      res.send(results);   
    });

  });
  app.post('/comment5',function(req,res){
  
    if (err) throw err;

    
    comment5.insert(req.body);
    console.log('comment5');
    //comment1.remove();
    comment5.find({}).toArray(function(err,comment5){
    
      res.send(comment5);
    
    });
  
  });
 
  
  app.post('/enterpage6',function(req,res){
    if (err) throw err;	
  
 //   console.log(req.body);
  //  comment.insert(req.body);
//  comment.remove();
     
    comment6.find({}).toArray(function(err,results){ 
      console.log(results);
      res.send(results);   
    });

  });
  app.post('/comment6',function(req,res){
  
    if (err) throw err;
  
    comment6.insert(req.body);
    
    console.log('comment6');
    //comment1.remove();
    comment6.find({}).toArray(function(err,comment6){
    
      res.send(comment6);
    
    });
  
  });

  
  app.post('/enterpage7',function(req,res){
    if (err) throw err;	
  
 //   console.log(req.body);
  //  comment.insert(req.body);
//  comment.remove();
     
    comment7.find({}).toArray(function(err,results){ 
      console.log(results);
      res.send(results);   
    });

  });
  app.post('/comment7',function(req,res){
  
    if (err) throw err;
    
    
    comment7.insert(req.body);
    console.log('comment7');
    //comment1.remove();
    comment7.find({}).toArray(function(err,comment7){
    
      res.send(comment7);
    
    });
  
  });
 
  app.post('/enterpage8',function(req,res){
    if (err) throw err;	
  
 //   console.log(req.body);
  //  comment.insert(req.body);
//  comment.remove();
     
    comment8.find({}).toArray(function(err,results){ 
      console.log(results);
      res.send(results);   
    });

  });
  
  app.post('/comment8',function(req,res){
  
    if (err) throw err;
    console.log('comment8');
    comment8.insert(req.body);
    //comment1.remove();
    comment8.find({}).toArray(function(err,comment8){
    
      res.send(comment8);
    
    });
  
  });
 
  
  app.post('/enterpage9',function(req,res){
    if (err) throw err;	
  
 //   console.log(req.body);
  //  comment.insert(req.body);
//  comment.remove();
     
    comment9.find({}).toArray(function(err,results){ 
      console.log(results);
      res.send(results);   
    });

  });
  app.post('/comment9',function(req,res){
  
    if (err) throw err;
    console.log('comment9');
    comment9.insert(req.body);
    //comment1.remove();
    comment9.find({}).toArray(function(err,comment9){
    
      res.send(comment9);
    
    });
  
  });
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
