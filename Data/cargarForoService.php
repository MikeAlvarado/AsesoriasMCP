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
		header("HTTP/1.1 500 Bad Connection to the DataBase");
		die("The server is down, please try again later.");
	}
	else
	{
		$sql = "SELECT id, nombre, fecha, titulo FROM post";
		
		$result = $conn -> query($sql);

		if($result -> num_rows > 0)
		{
			$foros = array();

			while ($row = $result->fetch_assoc())
			{
    				array_push($foros, array(
        				"id" => $row["id"],
        				"nombre" => $row["nombre"],
					"fecha" => $row["fecha"],
					"titulo" => $row["titulo"]));
			}

			echo json_encode($foros);
		}
		else
		{
			header("HTTP/1.1 406 Chefs not found");
			die("Please contact tech support.");
		}
	}

?>
