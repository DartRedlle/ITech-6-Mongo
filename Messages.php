<?php
header('Content-Type: application/json');

$Login = $_GET['Login'];

include "db.php";

$collection = $DB->UsersInfo;

$result = $collection->findOne(['Login'=>"$Login"],['projection'=>['_id'=>0, 'Messages'=>1]]);

echo json_encode($result['Messages']);