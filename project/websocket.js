var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var io = require('socket.io')(server);
var ObjectId = require('mongodb').ObjectID;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(express.static('public'));

var MongoClient = require('mongodb').MongoClient;
var URL = 'mongodb://team16:hfly@localhost/team16';
MongoClient.connect(URL,function(err,db){

  //Websocket
   app.get('/',function(req,res){   
     res.sendfile(__dirname + '/socket.html');
   });
   io.on('connection',function(socket){
   socket.emit('news',{hello:'world'});
   socket.on('my other event',function(data){
   console.log(data);
   });
   });

    assert.equal(null,err);
    console.log('mongodb!');

    var userpassword = db.collection('userpassword');
    var comment = db.collection('comment');

   // comment.insert(); //comment's database should be inserted first?
  //不能先insert？
    app.post('/click',function(req,res){
      if(err) throw err; 
      console.log('click');
      console.log(req.body);
      userpassword.insert(req.body);
      userpassword.find({}).toArray(function(err, results) {
//	console.log('result:', results);
      });
    });
    //user
    app.post('/commentclick',function(req,res){
   if (err) throw err;
    console.log('commentclick');
//    console.log(req.body);
    comment.insert(req.body);
//   comment.updateOne(req.body,function(err,results){
//    	console.log('results',results);
//    	});

    //update--更新數據？保留元資料添加新資料？
    //insert--插入數據？插入至相同的collection?
    //comment的id只有一個，全部insert的東西應都為同一個collection？
    comment.find({}).toArray(function(err,results){
   	console.log('result:',results);
//	res.send(results); 
	//send出去的檔案應如何鑲在前端顯示？
	//send出去的格式？ 是純文字嘛？
       
	res.send(results);
    
    });

    //已經find到的result就是抓到要的database
    });
    //commentclick -- should be updated?
    
    app.get(__dirname + '/comment.html',function(req,res){
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



var server = app.listen(8182, function () {

  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
}
)
