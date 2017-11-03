<?php
	header('Accept: application/json');
	header('Content-type: application/json');

	$servername = "localhost";
	$username = "root";
	$password = "root";
	$dbname = "AsesoriasMCP";

	$conn = new mysqli($servername, $username, $password, $dbname);

	// Check connection
	if ($conn->connect_error)
	{
	    header('HTTP/1.1 500 Bad connection to Database');
	    die("The server is down, we couldn't establish the DB connection");
	}
	else
	{

		$id = $_POST['id'];
		$ip = $_POST['idp'];
		$us = $_POST['use'];
		$co = $_POST['com'];
		$fe = $_POST['fec'];

		$sql = "INSERT INTO Reply (id, idpost, nombre, fecha, comentario) VALUES ('$id', '$ip', '$us', '$fe', '$co')";

		if (mysqli_query($conn, $sql))
		{
			
			echo json_encode("Post added");
		}
		else
		{
			header('HTTP/1.1 500 Bad connection, something went wrong while saving your data, please try again later');
			die("Error: " . $sql . "\n" . mysqli_error($conn));
		}
	}

?>
