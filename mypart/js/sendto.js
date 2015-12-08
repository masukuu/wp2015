
  $.ajax({	
    url: "/enterpage1",
  //  data: o,
    type:"POST",
    success: function(results){
  	var n=0;   
     for(var j = 0;j < results.length;j++){
  	 var  p =parseFloat( results[j]['starvalue']);
  	 n = n  + p;
      }
    
   var q = (n/(results.length));
   $("#commentbloc1").append("<div id=A>");
   $("#A").text(q);      
    for (var i=0; i < results.length ;i++){
	console.log(i) ;

	$("#commentbloc1").append("<div id="+"a"+i+"> \
<img class='profile_pic' src=''> \
<h5>"+results[i]['user']+"</h5> \
<h6>"+results[i]['starvalue']+"</h6> \
<p>"+results[i]['comment']+"</p> \
</div>");

//$("#a"+i).text(results[i]['starvalue']+" "+results[i]['user']+" "+results[i]['comment']);
     }
    
    }
  });



  $.ajax({	
    url: "/enterpage2",
  //  data: o,
    type:"POST",
    success: function(results){
  
  	var n=0;   
     for(var j = 0;j < results.length;j++){
  	 var  p =parseFloat( results[j]['starvalue']);
  	 n = n  + p;
      }
    
   var q = (n/(results.length));
   if((q+0.005) < (q+0.01)){
   }
   else{ 
   }
   $("#commentbloc2").append("<div id=B>");
   $("#B").text(q);      
      for (var i=0; i < results.length ;i++){
	console.log(i);
	$("#commentbloc2").append("<div id="+"b"+i+"> \
<img class='profile_pic' src=''> \
<h5>"+results[i]['user']+"</h5> \
<h6>"+results[i]['starvalue']+"</h6> \
<p>"+results[i]['comment']+"</p> \
</div>");
	//$("#b"+i).text(results[i]['starvalue']+"		"+results[i]['user']+"		"+results[i]['comment']);
     }
    }
  });

  $.ajax({	
    url: "/enterpage3",
  //  data: o,
    type:"POST",
    success: function(results){
    
  	var n=0;   
     for(var j = 0;j < results.length;j++){
  	 var  p =parseFloat( results[j]['starvalue']);
  	 n = n  + p;
      }
    
   var q = (n/(results.length));
   $("#commentbloc3").append("<div id=C>");
   $("#C").text(q);      
      
      for (var i=0; i < results.length ;i++){
	console.log(i);
	$("#commentbloc3").append("<div id="+"c"+i+"> \
<img class='profile_pic' src=''> \
<h5>"+results[i]['user']+"</h5> \
<h6>"+results[i]['starvalue']+"</h6> \
<p>"+results[i]['comment']+"</p> \
</div>");
	//$("#c"+i).text(results[i]['starvalue']+"		"+results[i]['user']+"		"+results[i]['comment']);
     }
    }
  });

  $.ajax({	
    url: "/enterpage4",
  //  data: o,
    type:"POST",
    success: function(results){
    
  	var n=0;   
     for(var j = 0;j < results.length;j++){
  	 var  p =parseFloat( results[j]['starvalue']);
  	 n = n  + p;
      }
    
   var q = (n/(results.length));
   $("#commentbloc4").append("<div id=D>");
   $("#D").text(q);      
      for (var i=0; i < results.length ;i++){
	console.log(i) ;

	$("#commentbloc4").append("<div id="+"d"+i+"> \
<img class='profile_pic' src=''> \
<h5>"+results[i]['user']+"</h5> \
<h6>"+results[i]['starvalue']+"</h6> \
<p>"+results[i]['comment']+"</p> \
</div>");
	//$("#d"+i).text(results[i]['starvalue']+"		"+results[i]['user']+"		"+results[i]['comment']);
     }
    }
  });



  $.ajax({	
    url: "/enterpage5",
  //  data: o,
    type:"POST",
    success: function(results){
     
  	var n=0;   
     for(var j = 0;j < results.length;j++){
  	 var  p =parseFloat( results[j]['starvalue']);
  	 n = n  + p;
      }
    
   var q = (n/(results.length));
   $("#commentbloc5").append("<div id=E>");
   $("#E").text(q);      
      
      for (var i=0; i < results.length ;i++){
	console.log(i);
	$("#commentbloc5").append("<div id="+"e"+i+"> \
<img class='profile_pic' src=''> \
<h5>"+results[i]['user']+"</h5> \
<h6>"+results[i]['starvalue']+"</h6> \
<p>"+results[i]['comment']+"</p> \
</div>");
	//$("#e"+i).text(results[i]['starvalue']+"		"+results[i]['user']+"		"+results[i]['comment']);
     }
    }
  });

  $.ajax({	
    url: "/enterpage6",
  //  data: o,
    type:"POST",
    success: function(results){
     
      
  	var n=0;   
     for(var j = 0;j < results.length;j++){
  	 var  p =parseFloat( results[j]['starvalue']);
  	 n = n  + p;
      }
    
   var q = (n/(results.length));
   $("#commentbloc6").append("<div id=F>");
   $("#F").text(q);      
      for (var i=0; i < results.length ;i++){
	console.log(i);
	$("#commentbloc6").append("<div id="+"f"+i+"> \
<img class='profile_pic' src=''> \
<h5>"+results[i]['user']+"</h5> \
<h6>"+results[i]['starvalue']+"</h6> \
<p>"+results[i]['comment']+"</p> \
</div>");
	//$("#f"+i).text(results[i]['starvalue']+"		"+results[i]['user']+"		"+results[i]['comment']);
     }
    }
  });


  $.ajax({	
    url: "/enterpage7",
  //  data: o,
    type:"POST",
    success: function(results){
      
  	var n=0;   
     for(var j = 0;j < results.length;j++){
  	 var  p =parseFloat( results[j]['starvalue']);
  	 n = n  + p;
      }
    
   var q = (n/(results.length));
   $("#commentbloc7").append("<div id=G>");
   $("#G").text(q);      
      
      for (var i=0; i < results.length ;i++){
	console.log(i) ;

	$("#commentbloc7").append("<div id="+"g"+i+"> \
<img class='profile_pic' src=''> \
<h5>"+results[i]['user']+"</h5> \
<h6>"+results[i]['starvalue']+"</h6> \
<p>"+results[i]['comment']+"</p> \
</div>");
	//$("#g"+i).text(results[i]['starvalue']+"		"+results[i]['user']+"		"+results[i]['comment']);
     }
    }
  });



  $.ajax({	
    url: "/enterpage8",
  //  data: o,
    type:"POST",
    success: function(results){
    
  	var n=0;   
     for(var j = 0;j < results.length;j++){
  	 var  p =parseFloat( results[j]['starvalue']);
  	 n = n  + p;
      }
    
   var q = (n/(results.length));
   $("#commentbloc8").append("<div id=H>");
   $("#H").text(q);      
      
      for (var i=0; i < results.length ;i++){
	console.log(i);
	$("#commentbloc8").append("<div id="+"h"+i+"> \
<img class='profile_pic' src=''> \
<h5>"+results[i]['user']+"</h5> \
<h6>"+results[i]['starvalue']+"</h6> \
<p>"+results[i]['comment']+"</p> \
</div>");
	//$("#h"+i).text(results[i]['starvalue']+"		"+results[i]['user']+"		"+results[i]['comment']);
     }
    }
  });

  $.ajax({	
    url: "/enterpage9",
  //  data: o,
    type:"POST",
    success: function(results){
     
      
  	var n=0;   
     for(var j = 0;j < results.length;j++){
  	 var  p =parseFloat( results[j]['starvalue']);
  	 n = n  + p;
      }
    
   var q = (n/(results.length));
   $("#commentbloc9").append("<div id=I>");
   $("#I").text(q);      
      for (var i=0; i < results.length ;i++){
	console.log(i);
	$("#commentbloc9").append("<div id="+"i"+i+"> \
<img class='profile_pic' src=''> \
<h5>"+results[i]['user']+"</h5> \
<h6>"+results[i]['starvalue']+"</h6> \
<p>"+results[i]['comment']+"</p> \
</div>");
	//$("#i"+i).text(results[i]['starvalue']+"		"+results[i]['user']+"		"+results[i]['comment']);
     }
    }
  });
