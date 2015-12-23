
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
//   $("#commentbloc1").append("<div id=A>");
//   $("#A").text(q);

   var e = parseInt(q*100);
   var x = parseFloat(e/100);
   if((q+0.005) < x){
   var k = parseInt(q*100);
   console.log(k);
   console.log('k1');
   var c = parseFloat(k/100);
   console.log(c);
   console.log('c1');
   }
   else{ 

   var k = parseInt(q*100);
   console.log(k);
   console.log('k2');
   var c = parseFloat((k+1)/100);  
   console.log(c);
   console.log('c2');
   }
  
   
   $("#commentbloc1").append("<div id=A>");
   $("#A").text(c);      
   var r = parseInt(q);
  if((q+0.5)<r){
  var w = r;
  }
  else{
  var w =r+1;
  }


   $("#commentbloc1").append("<div id=AA>");
   $("#AA").text(w);      

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
   

   var e = parseInt(q*100);
   var x = parseFloat(e/100);
   if((q+0.005) < x){
   var k = parseInt(q*100);
   console.log(k);
   console.log('k1');
   var c = parseFloat(k/100);
   console.log(c);
   console.log('c1');
   }
   else{ 

   var k = parseInt(q*100);
   console.log(k);
   console.log('k2');
   var c = parseFloat((k+1)/100);  
   console.log(c);
   console.log('c2');
   }
  
   
   $("#commentbloc2").append("<div id=B>");
   $("#B").text(c);      
   var r = parseInt(q);
  if((q+0.5)<r){
  var w = r;
  }
  else{
  var w =r+1;
  }


   $("#commentbloc2").append("<div id=BB>");
   $("#BB").text(w);      


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
     

   var e = parseInt(q*100);
   var x = parseFloat(e/100);
   if((q+0.005) < x){
   var k = parseInt(q*100);
   console.log(k);
   console.log('k1');
   var c = parseFloat(k/100);
   console.log(c);
   console.log('c1');
   }
   else{ 

   var k = parseInt(q*100);
   console.log(k);
   console.log('k2');
   var c = parseFloat((k+1)/100);  
   console.log(c);
   console.log('c2');
   }
  
   
   $("#commentbloc3").append("<div id=C>");
   $("#C").text(c);      
   var r = parseInt(q);
  if((q+0.5)<r){
  var w = r;
  }
  else{
  var w =r+1;
  }


   $("#commentbloc3").append("<div id=CC>");
   $("#CC").text(w);      

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
//   $("#commentbloc4").append("<div id=D>");
//   $("#D").text(q);      

   
   var e = parseInt(q*100);
   var x = parseFloat(e/100);
   if((q+0.005) < x){
   var k = parseInt(q*100);
   console.log(k);
   console.log('k1');
   var c = parseFloat(k/100);
   console.log(c);
   console.log('c1');
   }
   else{ 

   var k = parseInt(q*100);
   console.log(k);
   console.log('k2');
   var c = parseFloat((k+1)/100);  
   console.log(c);
   console.log('c2');
   }
  
   
   $("#commentbloc4").append("<div id=D>");
   $("#D").text(c);      
   var r = parseInt(q);
  if((q+0.5)<r){
  var w = r;
  }
  else{
  var w =r+1;
  }


   $("#commentbloc4").append("<div id=DD>");
   $("#DD").text(w);      
   
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
 //  $("#commentbloc5").append("<div id=E>");
//   $("#E").text(q);      
      
   var e = parseInt(q*100);
   var x = parseFloat(e/100);
   if((q+0.005) < x){
   var k = parseInt(q*100);
   console.log(k);
   console.log('k1');
   var c = parseFloat(k/100);
   console.log(c);
   console.log('c1');
   }
   else{ 

   var k = parseInt(q*100);
   console.log(k);
   console.log('k2');
   var c = parseFloat((k+1)/100);  
   console.log(c);
   console.log('c2');
   }
  
   
   $("#commentbloc5").append("<div id=E>");
   $("#E").text(c);      
   var r = parseInt(q);
  if((q+0.5)<r){
  var w = r;
  }
  else{
  var w =r+1;
  }


   $("#commentbloc5").append("<div id=EE>");
   $("#EE").text(w);      
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
//   $("#commentbloc6").append("<div id=F>");
//   $("#F").text(q);      
  
   var e = parseInt(q*100);
   var x = parseFloat(e/100);
   if((q+0.005) < x){
   var k = parseInt(q*100);
   console.log(k);
   console.log('k1');
   var c = parseFloat(k/100);
   console.log(c);
   console.log('c1');
   }
   else{ 

   var k = parseInt(q*100);
   console.log(k);
   console.log('k2');
   var c = parseFloat((k+1)/100);  
   console.log(c);
   console.log('c2');
   }
  
   
   $("#commentbloc6").append("<div id=F>");
   $("#F").text(c);      
   var r = parseInt(q);
  if((q+0.5)<r){
  var w = r;
  }
  else{
  var w =r+1;
  }


   $("#commentbloc6").append("<div id=FF>");
   $("#FF").text(w);      
   
   
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
 //  $("#commentbloc7").append("<div id=G>");
 //  $("#G").text(q);      
   

   var e = parseInt(q*100);
   var x = parseFloat(e/100);
   if((q+0.005) < x){
   var k = parseInt(q*100);
   console.log(k);
   console.log('k1');
   var c = parseFloat(k/100);
   console.log(c);
   console.log('c1');
   }
   else{ 

   var k = parseInt(q*100);
   console.log(k);
   console.log('k2');
   var c = parseFloat((k+1)/100);  
   console.log(c);
   console.log('c2');
   }
  
   
   $("#commentbloc7").append("<div id=G>");
   $("#G").text(c);      
   var r = parseInt(q);
  if((q+0.5)<r){
  var w = r;
  }
  else{
  var w =r+1;
  }


   $("#commentbloc7").append("<div id=GG>");
   $("#GG").text(w);      

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
 //  $("#commentbloc8").append("<div id=H>");
 //  $("#H").text(q);      
      
   var e = parseInt(q*100);
   var x = parseFloat(e/100);
   if((q+0.005) < x){
   var k = parseInt(q*100);
   console.log(k);
   console.log('k1');
   var c = parseFloat(k/100);
   console.log(c);
   console.log('c1');
   }
   else{ 

   var k = parseInt(q*100);
   console.log(k);
   console.log('k2');
   var c = parseFloat((k+1)/100);  
   console.log(c);
   console.log('c2');
   }
  
   
   $("#commentbloc8").append("<div id=H>");
   $("#H").text(c);      
   var r = parseInt(q);
  if((q+0.5)<r){
  var w = r;
  }
  else{
  var w =r+1;
  }


   $("#commentbloc8").append("<div id=HH>");
   $("#HH").text(w);      
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
//   $("#commentbloc9").append("<div id=I>");
 //  $("#I").text(q);      
   
   var e = parseInt(q*100);
   var x = parseFloat(e/100);
   if((q+0.005) < x){
   var k = parseInt(q*100);
   console.log(k);
   console.log('k1');
   var c = parseFloat(k/100);
   console.log(c);
   console.log('c1');
   }
   else{ 

   var k = parseInt(q*100);
   console.log(k);
   console.log('k2');
   var c = parseFloat((k+1)/100);  
   console.log(c);
   console.log('c2');
   }
  
   
   $("#commentbloc9").append("<div id=I>");
   $("#I").text(c);      
   var r = parseInt(q);
  if((q+0.5)<r){
  var w = r;
  }
  else{
  var w =r+1;
  }


   $("#commentbloc9").append("<div id=II>");
   $("#II").text(w);      
   
   
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
