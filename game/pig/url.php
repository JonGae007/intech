<?php
$servername = "10.35.46.113";
$user = "k131484_jonas";
$pw = "cfs*1mq67-dtvk4g";
$db = "k131484_highscore";
$con = new mysqli($servername, $user, $pw, $db);
$name = $_GET["n"];
$score = $_GET["s"];

if ($con->connect_error) {
    die("Alles zu spät, Rüdiger ist tot." . $con->connect_error);
}

$sql_check = "SELECT Highscore FROM highscore WHERE Name = '$name'";
$result = $con->query($sql_check);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $existingHighscore = $row["Highscore"];

    if ($score > $existingHighscore) {
        $sql_update = "UPDATE highscore SET Highscore = '$score' WHERE Name = '$name'";
        if ($con->query($sql_update) === TRUE) {
            echo "success" . $name . $score;
        } else {
            echo "error" . $con->error;
        }
    } else {
        echo "success" . $name . $score; 
    }
} else {
    $sql_insert = "INSERT INTO highscore (Name, Highscore) VALUES ('$name', '$score')";
    if ($con->query($sql_insert) === TRUE) {
        echo "success" . $name . $score;
    } else {
        echo "error" . $con->error;
    }
}

    $sql_top_players = "SELECT Name, Highscore FROM highscore ORDER BY Highscore DESC LIMIT 5";
    $result_top_players = $con->query($sql_top_players);
    
    $top_players = array();
    while ($row = $result_top_players->fetch_assoc()) {
        $top_players[] = $row;
    }
    
    header('Content-Type: application/json');
    echo json_encode($top_players);


$con->close();
?>
