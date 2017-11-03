        

        var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

        var username = <<usernamer>>;
        var postid = <<usernamer>> + datetime;

        var jsonObjeto = {
            "pid" : postid
            "use" : username,
            "tit" : $('#titulo').val(),
            "cot" : $('#content').val(),
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





        var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

        var username = <<usernamer>>;

        var jsonObjeto = {
            "id" : postid,
            "idp" : postid,
            "use" : username
            "com" : $('#comentario').val(),
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