(function(){

	var $window = $(window);
	$window.scroll(scroll); 
	
	function scroll(evt){
		//Get the images 
		var images = document.querySelectorAll(".icon-logo"); 
		console.log(images.length);
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