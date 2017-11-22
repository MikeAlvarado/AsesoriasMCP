<?php
	header('Accept: application/json');
	header('Content-type: application/json');

	$servername = "localhost";
	$username = "root";
	$password = "root";
	$dbname = "AsesoriasMCP";

	$conn = new mysqli($servername, $username, $password, $dbname);

	if ($conn -> connect_error)
	{
		header("HTTP/1.1 502 Bad Connection to the DataBase");
		die("The server is down, please try again later.");
	}
	else
	{
		$idP = utf8_encode($_POST["id"]);

		$sql = "SELECT id, email, nombre, fecha, titulo, content FROM Post WHERE id = '$idP'";
		
		$result = $conn -> query($sql);

		if($result -> num_rows > 0)
		{

		while($row = $result -> fetch_assoc()){
			$posted[] = array(
            "rid" => utf8_decode($row["id"]),
		 "rem" => utf8_decode($row["email"]),
            "rno" => utf8_decode($row["nombre"]),
            "rfe" => utf8_decode($row["fecha"]),
		  "rti" => utf8_decode($row["titulo"]),
            "rco" => utf8_decode($row["content"]));
        }

			echo json_encode($posted);
		}
		else
		{
			header("HTTP/1.1 406 Post not found");
			die("Please contact tech support.");
		}
	}

?>
