<?php
$servername = "10.35.46.113";
$user = "k131484_jonas";
$pw = "cfs*1mq67-dtvk4g";
$db = "k131484_highscore";
$con = new mysqli($servername, $user, $pw, $db);
$name = $_GET["n"];
$score = $_GET["s"];
$client_ip = $_SERVER['REMOTE_ADDR'];

if ($con->connect_error) {
    die("Alles zu spät, Rüdiger ist tot." . $con->connect_error);
}

$sql_check = "SELECT Highscore FROM highscore WHERE Name = '$name'";
$result = $con->query($sql_check);
if($name != "" && $score != 0){
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $existingHighscore = $row["Highscore"];

    if ($score > $existingHighscore) {
        $sql_update = "UPDATE highscorepig SET Highscore = '$score' WHERE Name = '$name'";
        if ($con->query($sql_update) === TRUE) {
            echo "success" . $name . $score;
        } else {
            echo "error" . $con->error;
        }
    } else {
        echo "success" . $name . $score; 
    }
} else {
    $sql_insert = "INSERT INTO highscorepig (Name, Highscore) VALUES ('$name', '$score')";
    if ($con->query($sql_insert) === TRUE) {
        echo "success" . $name . $score;
    } else {
        echo "error" . $con->error;
    }
    
}
if ($name != "" && $score != 0) {
    $sql_ip = "UPDATE highscorepig SET IP = '$client_ip' WHERE Name = '$name'";
        if ($con->query($sql_ip) === TRUE) {
            echo "success" . $name . $score;
        }
    $ip_file = "ip.txt";
    $lines = file($ip_file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

    foreach ($lines as $line) {
        list($ip, $stored_name) = explode(":", $line);
        if ($ip == $client_ip && $name == $stored_name) {
            $sql_delete = "DELETE FROM highscorepig WHERE Name = '$name'";
            if ($con->query($sql_delete) === TRUE) {
                echo "Der Spieler '$name' wurde aus der Highscore-Tabelle gelöscht.";
            } else {
                echo "Fehler beim Löschen des Spielers: " . $con->error;
            }
            $con->close();
        }
    }
}
$con->close();
}
else{
    echo "Fehler: Bitte alle Daten angeben";
}
?>
