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
  //�����insert�H
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

    //update--��s�ƾڡH�O�d����ƲK�[�s��ơH
    //insert--���J�ƾڡH���J�ܬۦP��collection?
    //comment��id�u���@�ӡA����insert���F���������P�@��collection�H
    comment.find({}).toArray(function(err,results){
   	console.log('result:',results);
//	res.send(results); 
	//send�X�h���ɮ����p���^�b�e����ܡH
	//send�X�h���榡�H �O�¤�r���H
       
	res.send(results);
    
    });

    //�w�gfind�쪺result�N�O���n��database
    });
    //commentclick -- should be updated?
    
    app.get(__dirname + '/comment.html',function(req,res){
      // ����'/'�Ω�'/start'
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
