<?php 

header("Content-Type: text/html; charset=utf-8");

include "jwt.php";

$hash = jwt_gen(['alg' => 'sha256'], ['user_id' => 1], 'secret_key');

echo $hash."<br>";

$content = jwt_verify($hash, 'secret_key');

var_dump($content);