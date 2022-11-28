<?php

$temperature = $_GET['temp'];
$lat = $_GET['lat'];
$long = $_GET['long'];
$speed = $_GET['speed'];

echo "Temperature: " . $temperature . "   lat: " . $lat. "   long: " . $long. "   speed: " . $speed;    

$config = include('config.php');

$user = $config['user'];
$password = $config['password'];
$server = $config['server'];
$database = $config['database'];
$table = $config['table'];
$raceId = $config['raceId'];

$connection = mysqli_connect( $server, $user, "") or die ("Couldn't connect to server");

$db = mysqli_select_db( $connection, $database ) or die ( "Couldn't select DB" );

$querry = "INSERT INTO ".$table." (temperature, raceId, latitude, longitude, speed) VALUES (".$temperature.", ".$raceId.",".$lat.", ".$long.", ".$speed.")";

$result = mysqli_query( $connection, $querry);

?>
