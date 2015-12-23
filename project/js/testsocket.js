var socket = io(':8182');
socket.on('connect', function(){

  socket.on('begin',function(){

    socket.emit('satrt');
    socket.on('update',function(results){


      for (var i=0; i < results.length ;i++){
	console.log(i);
	$("#id_content").append("<div id="+i+">");
	$("#"+i).text(results[i]['comment']);
      }

    });
  });
  //  socket.emit('start');
  //  $('button').click(function(){

  //  socket.emit('start');
  //    console.log($("#comment"));


});

$.ajax({

  url: "/commentclick",
  data: $("#comment"),
  type:"POST",
  success: function(results){

    for (var i=0; i < results.length ;i++){
      console.log(i);
      $("#id_content").append("<div id="+i+">");
      $("#"+i).text(results[i]['comment']);
    }

  }

});


$('button').click(function(){

  $.ajax({	

    url: "/commentclick",
    data: $("#comment"),
    type:"POST",
    success: function(results){

      for (var i=0; i < results.length ;i++){
	console.log(i);
	$("#id_content").append("<div id="+i+">");
	$("#"+i).text(results[i]['comment']);
      }

    }

  });

});
