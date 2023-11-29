<?php
$servername = "10.35.46.113";
$user = "k131484_jonas";
$pw = "cfs*1mq67-dtvk4g";
$db = "k131484_highscore";
$sql = "SELECT * FROM highscorepig ORDER BY Highscore DESC LIMIT 7";
$con = new mysqli($servername, $user, $pw, $db);
$im = imagecreatefromjpeg("bg.jpg");
$textfarbe = imagecolorallocate($im, 255, 255, 255);
$font_size = 13;
$font_path = 'sa.ttf';

if ($con->connect_error) {
    die("Verbindung zur Datenbank fehlgeschlagen: " . $con->connect_error);
}
$result = $con->query($sql);
if ($result) {
    $y = 250;
    $line_height = 30;
    $platz = 1;

    while ($row = $result->fetch_assoc()) {
        $name = $row["Name"];
        $highscore = $row["Highscore"];
    
        imagettftext($im, $font_size, 0, 190, $y, $textfarbe, $font_path,"$platz."."$name");
        imagettftext($im, $font_size, 0, 420, $y, $textfarbe, $font_path, "$highscore");
    
        $y += $line_height;
        $platz++;
    }

    header('Content-type: image/png');
    imagepng($im);
    imagedestroy($im);
} else {
    echo "Fehler beim Ausführen der SQL-Abfrage: " . $con->error;
}
?>
