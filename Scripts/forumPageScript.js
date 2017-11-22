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
	//CARGAR FORO
	$("#submitButton").on("click", postear);
	$.ajax({
		url : "data/cargarForoService.php",
		type : "GET",
		dataType : "json",
		success : function(foros){
			
			var agregarhtml;
			var largo = ((foros.length)-1);

			for(var i = largo; i >= 0; i--)
			{
				agregarhtml += '<tr id="forox2">' + '<td>' + '<a  href="ForumPageID.html?id=' + foros[i].id + '">' + (i+1) + '</td>' + '<td>' + foros[i].titulo + '</td>' + '<td>' + foros[i].nombre + '</td>' + '<td>' + foros[i].fecha + '</td>' + '</tr>';
			}
			$("#forito").append(agregarhtml);
		},
		error : function(errorMessage){
			console.log(errorMessage.responseText);
		}

	});

	$('.tr').click(function() {
        var href = $(this).find("a").attr("href");
            window.location = href;
    });
	
	$('.modal').modal({
      dismissible: true,
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) {
        console.log(modal, trigger);
      },
      complete: function() {  }
	});
});

function postear()
{
	  var datetime = getActualFullDate();
	  var datetime2 = new Date();
/*
        var datetime = currentdate.getDay() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
*/
	  var botonsito = $("#submitButton");
        var username = $("#submitButton").attr('usu');
	   var email = $("#submitButton").attr('mail');
	   //var username = "NoFunciona";
	   //var email = "nofunciona@itesm.mx";
        var postid = username + datetime;

        var jsonObjeto = {
            "pid" : postid,
		 "mal" : email,
            "use" : username,
            "tit" : $('#titulo').val(),
            "cot" : $('#content').val(),
            "fec" : datetime2
        };

        $.ajax({
            type: "POST",
            url: "Data/createPost.php",
            data : jsonObjeto,
            dataType : "json",
            contentType : "application/x-www-form-urlencoded",
            success: function(jsonData) {
                console.log("COMMENT ADDED TO DB SUCCESFULL");
                //window.location.replace("File.html");

            },
            error: function(errorMsg){
                console.log("Can't add comment");
                //alert(errorMsg.statusText);
            }
        });
	Materialize.updateTextFields();
	location.reload();
}
function getActualFullDate() {
    var d = new Date();
    var day = addZero(d.getDate());
    var month = addZero(d.getMonth()+1);
    var year = addZero(d.getFullYear());
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    return day + "." + month + "." + year + "(" + h + ":" + m + ")";
}
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
