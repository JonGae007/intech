<?php
$player = $_GET["p"];
$score = $_GET["s"];
$game = $_GET["g"];
if($player != ""&&$score != ""&&$game != ""){
            file_put_contents("Daten.txt", $player." ".$score." ".$game);
        
}
echo file_get_contents('Daten.txt');
?>