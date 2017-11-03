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
		$idP = $_POST["id"];

		$sql = "SELECT id, nombre, fecha, comentario 
				FROM Reply WHERE idpost = '$idP'";

        $result = $conn -> query($sql);

		if($result -> num_rows > 0)
		{

		while($row = $result -> fetch_assoc())
		{
			$comments[] = array(
            "rid" => $row["id"],
            "rno" => $row["nombre"],
            "rfe" => $row["fecha"],
            "rco" => $row["comentario"]);
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
