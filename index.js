	$(".folderText").hide();
	var box=$(".box");
	//$("h2").click(function(){
	document.getElementById('folder1').onclick = function(){ 
	box.toggleClass("openned").toggleClass("showafter");
	$(".folderText").toggle(400);
		//folderText.style.opacity = 1;
	};
	//}); 
box.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){ 
  box.toggleClass("transitionstart")
     .toggleClass("transitionend");
});
	var box_tedx=$(".box");