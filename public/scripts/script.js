(function(){
	var $nav = $("nav");
	$(window).scroll(scroll);
	
	function scroll(event){
		var currentHeight = $(event.target).scrollTop(); 
		
		if(currentHeight == 0)
		{
			$nav.addClass("N/A transparent");
			$nav.removeClass("grey darken-4");
		}
		else {
			 $nav.addClass("grey darken-4");
			 $nav.removeClass("N/A transparent");
		} 
	}
})();