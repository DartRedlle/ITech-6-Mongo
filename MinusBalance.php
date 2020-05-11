<?php
include "db.php";

$collection = $DB->UsersInfo;



$res = $collection->find(
    ['Balance' => ['$lt' => 0]],
    ['projection' =>
        ['_id'=>0, 'Login'=>1,'Balance'=>1]
    ]
)->toArray();
echo json_encode($res);
?>