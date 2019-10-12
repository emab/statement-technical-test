

$(document).ready(function() {

	$("#popupmodal").fadeIn(1000);
	if($(window).width() < 991) {
		$("#popup").fadeIn(1000);

	} else {
		$("#popup").css("display","flex");
		$("#popup").animate({opacity: 1}, 1000);
	}

  	$('#close-popup').click(function() {
    	$('#popup').fadeOut();
		$("#popupmodal").fadeOut();
  	});
});