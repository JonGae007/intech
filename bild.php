<?php
$im = imagecreatefromjpeg("bg.jpg");
$textfarbe = imagecolorallocate($im, 255, 255, 255);
$font_size = 7;
$font_path = 'sa.ttf';
imagettftext($im, $font_size, 0, 190, 40, $textfarbe, $font_path, 'Hello world!');
imagettftext($im, $font_size, 0, 170, 40, $textfarbe, $font_path, 'Hello world!');
// Gib das Bild aus
header('Content-type: image/png');
imagepng($im);

// Zerstöre das Bild, um den Speicher freizugeben
imagedestroy($im);
?>
