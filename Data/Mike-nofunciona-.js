        var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

        var postid = usernamer + datetime;

        var jsonObjeto = {
            "pid" : postid
            "use" : $('#usernamer').val(),
            "tit" : $('#titulor').val(),
            "cot" : $('#contenidor').val(),
            "fec" : datetime
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