(function(){
	var $window 			= $(window), 
	    $slider 			= $(".slider"), 
	    $experienceSection 	= $("#experience"),
	    $skillsSection 		= $("#skills"),
	    $portfolioSection 	= $("#portfolio"), 
	    $educationSection	= $("#education"), 
	    $nav				= $("nav")

	$window.scroll(scroll); 
	//Set margin top experience section
	//$experienceSection.css("margin-top", $slider.outerHeight() - 60)
	function scroll(evt){
		if($window.scrollTop() > $experienceSection.offset().top)
		{
			$nav.addClass("blue lighten-1 color_transparent")
			$nav.removeClass("transparent")
		}
	 	else 
		{
			$nav.addClass("transparent")
			$nav.removeClass("blue lighten-1")
			$nav.removeClass("color_transparent")
		}

		//Get the images 
		var images = document.querySelectorAll(".icon-logo"); 
		if(images.length > 0){
			$.each(images, displayImages);
		}
	}
	
	function displayImages(index, item){
		var $item = $(item);
		var bottomWindow = $window.scrollTop() + $window.height(); 
		var bottomImage = $item.offset().top + $item.outerHeight();
		if(bottomWindow > bottomImage){
			$item.animate({'opacity':'1'},500);
		}
	}
})();