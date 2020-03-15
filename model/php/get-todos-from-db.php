<?php
    require_once __DIR__ . '/Classes/Database.php';

    $targetId = (int)$_POST['target_id'];

    $todos = $db->queryAll("SELECT * FROM `todos` WHERE `target_id` = '$targetId'");
    
    echo json_encode($todos);
?>