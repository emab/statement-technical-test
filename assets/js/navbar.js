$(document).ready(function(){
  $('#nav-toggle').click(function() {
    $('#nav-items').slideToggle();
    if ($('#menu-toggle').attr("src") == "assets/img/svg/cross-white.svg") {
      $('#menu-toggle').attr("src","assets/img/svg/menu.svg");
    } else {
      $('#menu-toggle').attr("src","assets/img/svg/cross-white.svg");
    }
    $('#nav-toggle').attr("id", "close-toggle");
  });
});