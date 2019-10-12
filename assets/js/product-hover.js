$(document).ready(function () {
	if ($(window).width() > 992) {
		$(document).on('mouseenter', '.product', function () {
		    $(this).find(":button").animate({opacity:1},200);
		}).on('mouseleave', '.product', function () {
		    $(this).find(":button").animate({opacity:0},100);
		});
	}
});