(function(){ 
	var $menu 	 = $("#menu"),
		$button  = $("#show-menu"),
		$a 		 = $("#menu ul li a"), 
		$chart 	 = $(".chart");
		
		$(".submit").attr('disabled', 'disabled');

		function ShowMenu(e){
			e.preventDefault();
			$menu.slideToggle(); 
		}

		function ShowLink(){
			$menu.slideToggle(); 
		}

		$button.on('click', ShowMenu);
		$a.on('click', ShowLink);
		$chart.easyPieChart({
			easing: 'easeOutBounce',
			barColor:  '#DB6107',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
})();