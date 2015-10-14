//window bounce
	$(window).fancy_scroll({
	animation: "bounce"
	});
	
	
//nyan voice
	var aud = document.getElementById("nyan_voice");
	$("#mouseImg").hover(function(){
		aud.play();
		}, function(){
		aud.pause();
	});


//folder animation
	$(".folderText").hide();
	
	var box=$(".box");
	$("#folder1").click(function(){ box.toggleClass("openned").toggleClass("showafter");
		$(".folderText").toggle(400);
		//folderText.style.opacity = 1;
	}); 
	//document.getElementById('folder1').onclick = function(){}; 
	
	box.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){ 
	box.toggleClass("transitionstart")
    .toggleClass("transitionend");
	});
	var box_tedx=$(".box");