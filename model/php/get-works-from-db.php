<?php
    require_once __DIR__ . '/Classes/Database.php';

    $targetId = (int)$_POST['target_id'];

    $works = $db->queryAll("SELECT * FROM `works` WHERE `target_id` = '$targetId'");
    
    echo json_encode($works);
?>