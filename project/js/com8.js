
$('button').click(function(){
 // console.log($("input[type=radio]:checked").val());

n = $("#user").val();
p = $("#comment").val();
v = $("input[type=radio]:checked").val();

var  o = {

   starvalue: v,
  user: n,
  comment: p

};
  console.log('hi');
  //console.log(n);
 // console.log(p);
  //console.log(v);
  //console.log(o);

  $.ajax({	
    url: "/comment8",
    data: o,
    type:"POST",
    success: function(results){
      for (var i=0; i < results.length ;i++){
	console.log(i);
	$("#id_header").append("<div id="+i+">");
	$("#"+i).text(results[i]['starvalue']+"		"+results[i]['user']+"		"+results[i]['comment']);
     }
    }
  });
});

  $.ajax({	
    url: "/enterpage8",
  //  data: o,
    type:"POST",
    success: function(results){
      for (var i=0; i < results.length ;i++){
	console.log(i);
	$("#id_header").append("<div id="+i+">");
	$("#"+i).text(results[i]['starvalue']+"		"+results[i]['user']+"		"+results[i]['comment']);
     }
    }
  });
