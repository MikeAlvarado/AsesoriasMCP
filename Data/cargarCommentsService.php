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
		header("HTTP/1.1 501 Bad Connection to the DataBase");
		die("The server is down, please try again later.");
	}
	else
	{
		$idP = utf8_encode($_POST["id"]);

		$sql = "SELECT id, nombre, fecha, comentario 
				FROM Reply WHERE idpost = '$idP'";

        $result = $conn -> query($sql);

		if($result -> num_rows > 0)
		{

		while($row = $result -> fetch_assoc())
		{
			$comments[] = array(
            "rid" => utf8_decode($row["id"]),
            "rno" => utf8_decode($row["nombre"]),
            "rfe" => utf8_decode($row["fecha"]),
            "rco" => utf8_decode($row["comentario"]));
		}

			echo json_encode($comments);
		}
		else
		{
			header("HTTP/1.1 406 Comments not found");
			die("Please contact tech support.");
		}
	}

?>
