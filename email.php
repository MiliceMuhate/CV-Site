<?php 
include_once('index.html');

$to = "milicemuhate@gmail.com";
$subject = $_GET['assunto'];
$mensagem = $_GET['message'];
$headers = "From:". $_GET['email'] . "\r\n" .
"CC: milicemuhate@gmail.com";

mail($to,$subject,$mensagem,$headers);
?>