$(document).ready(function(){
	//$("#tit").text(getUrlParameter("id"));	
	//CARGAR COMMENTS
	$("#submitButton").on("click", comentar);
	var jsonID = {
		"id" : getUrlParameter("id")
	};
	$.ajax({
		url : "data/cargarForoSpecificService.php",
		type : "POST",
		dataType : "json",
		data: jsonID,
		contentType : "application/x-www-form-urlencoded",
		success : function(posted){
			
			var agregarhtml;

			for(var i = 0; i < posted.length; i++)
			{
				agregarhtml += '<div class="row">' +
				'<div class="col s12 m12">' +
				'<div class="card yellow accent-3">' +
				'<div class="card-content black-text">' +
				'<span class="card-title">' + 
				posted[i].rti + '</span>' + '<p>' +
				posted[i].rco + '</p>' +
				'</div>' + '</div>' + '</div>' + '</div>';
			}
			$("#posted").append(agregarhtml);
		},
		error : function(errorMessage){
			console.log(errorMessage.responseText);
		}

	});

	$.ajax({
		url : "data/cargarCommentsService.php",
		type : "POST",
		dataType : "json",
		data: jsonID,
		contentType : "application/x-www-form-urlencoded",
		success : function(comments){
			
			var agregarhtml;

			for(var i = 0; i < comments.length; i++)
			{
				agregarhtml += '<div class="row">' +
				'<div class="col s12 m8">' +
				'<div class="card yellow accent-3">' +
				'<div class="card-content black-text">' +
				'<span class="card-title">' + 
				comments[i].rno + ' - ' + 
				comments[i].rfe + '</span>' + '<p>' +
				comments[i].rco + '</p>' +
				'</div>' + '</div>' + '</div>' + '</div>';
			}
			$("#comments").append(agregarhtml);
		},
		error : function(errorMessage){
			console.log(errorMessage.responseText);
		}

	});
});

function comentar()
{
	  var datetime = getActualFullDate();
	  var datetime2 = new Date();
	  var username = "Bifi";
	  var pid = getUrlParameter("id");
	  var cid = pid + datetime;


	  var jsonObjeto = {
            "id" : cid,
            "idp" : pid,
            "use" : username,
            "com" : $('#comentario').val(),
            "fec" : datetime2
        };

        $.ajax({
            type: "POST",
            url: "Data/createComment.php",
            data : jsonObjeto,
            dataType : "json",
            contentType : "application/x-www-form-urlencoded",
            success: function(jsonData) {
                console.log("COMMENT ADDED TO DB SUCCESFULL");
                //window.location.replace("File.html");
			location.reload();

            },
            error: function(errorMsg){
                console.log("Can't add comment");
                //alert(errorMsg.statusText);
            }
        });
	Materialize.updateTextFields();
}

function getUrlParameter(paramName){
				var results = new RegExp('[\?&]' + paramName + '=([^&#]*)').exec(window.location.href);
				return results[1] || 0;
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

