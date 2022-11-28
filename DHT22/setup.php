<?php
$config = include('config.php');

$user = $config['user'];
$password = $config['password'];
$server = $config['server'];
$database = $config['database'];
$table = $config['table'];

$connection = mysqli_connect( $server, $user, $password ) or die ("Couldn't connect to server");

$db = mysqli_select_db( $connection, $database ) or die ( "Couldn't select DB" );


try{
    $result = mysqli_query( $connection, "SELECT id FROM ".$table." LIMIT 1;");
}
catch(Exception $e)
{ 
    echo 'Message: ' .$e->getMessage();
    $querry = "
            CREATE TABLE ".$table." (
                id INT PRIMARY KEY AUTO_INCREMENT, 
                date TIMESTAMP NOT NULL, 
                raceId INT NOT NULL,
                temperature FLOAT, 
                latitude DOUBLE, 
                longitude DOUBLE,
                altitude DOUBLE,
                speed DOUBLE,
                FOREIGN KEY (raceId) REFERENCES races(id)
                );";

    $result = mysqli_query( $connection, $querry );
    echo "Table created";
}
?>