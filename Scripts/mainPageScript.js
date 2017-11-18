$(document).ready(function(){
	$(".button-collapse").sideNav();
	$('.parallax').parallax();
	$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false,
      hover: true,
      gutter: 0,
      belowOrigin: true,
      alignment: 'left',
      stopPropagation: false
    });
});