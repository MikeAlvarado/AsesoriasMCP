<?php
	header('Accept: application/json');
	header('Content-type: application/json');

	ini_set("display_errors",1);
	ini_set("display_startup_errors",1);

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

		$id = utf8_encode($_POST['pid']);
		$ml = utf8_encode($_POST['mal']);
		$us = utf8_encode($_POST['use']);
		$ti = utf8_encode($_POST['tit']);
		$co = utf8_encode($_POST['cot']);
		$fe = utf8_encode($_POST['fec']);

		$sql = "INSERT INTO Post (id, email, nombre, fecha, titulo, content) VALUES ('$id', '$ml', '$us', '$fe', '$ti', '$co')";

		print $sql;

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
