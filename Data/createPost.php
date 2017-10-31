<?php
	header('Accept: application/json');
	header('Content-type: application/json');

	$servername = "localhost";
	$username = "root";
	$password = "root";
	$dbname = "AsesoriasMCP";

	// Check connection
	if ($conn->connect_error)
	{
	    header('HTTP/1.1 500 Bad connection to Database');
	    die("The server is down, we couldn't establish the DB connection");
	}
	else
	{

		$id = $_POST['pid'];
		$us = $_POST['use'];
		$ti = $_POST['tit'];
		$co = $_POST['cot'];
		$fe = $_POST['fec'];



		$sql = "INSERT INTO Post (id, nombre, fecha, titulo, content) VALUES ('$id', '$us', '$fe', '$ti', $'co')";

		if (mysqli_query($conn, $sql))
		{
			
			echo json_encode("Post addedederino");
		}
		else
		{
			header('HTTP/1.1 500 Bad connection, something went wrong while saving your data, please try again later');
			die("Error: " . $sql . "\n" . mysqli_error($conn));
		}
	}

?>
