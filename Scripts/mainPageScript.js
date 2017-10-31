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


		//Cambiar menu si hay session activa
	$.ajax({
		url : "data/sessionService.php",
		type : "GET",
		dataType : "json",
		success : function(sessionJson){
			$(".rp").attr("href", "profilePage.html");
			$(".rp").html("Profile");
			$(".lp").attr("href", "mainPage.html");
			$(".lp").html("Logout");
			$(".lp").addClass("logout");
		},
		error : function(errorMessage){
			//nada
		}
	});

		//LOGOUT

	$(".logout").on("click",function(){
		$.ajax({
			url : "data/deleteSession.php",
			type : "GET",
			dataType : "json",
			success : function(successMessage){
				window.replace.location("mainPage.html");
			},
			error : function(errorMessage){
				window.replace.location("mainPage.html");
			}
		});
	});

});