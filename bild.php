<?php
$im = imagecreatefromjpeg("bg.jpg");
$textfarbe = imagecolorallocate($im, 255, 255, 255);
$font_size = 7;
$font_path = 'sa.ttf';
imagettftext($im, $font_size, 0,190, 190, $textfarbe, $font_path, 'Hello world!');
imagettftext($im, $font_size, 0,190, 200, $textfarbe, $font_path, 'Hello world!');
header('Content-type: image/png');
imagepng($im);
imagedestroy($im);
?>
