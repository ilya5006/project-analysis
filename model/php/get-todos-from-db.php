<?php
    require_once __DIR__ . '/Classes/Database.php';

    $todos = $db->queryAll("SELECT * FROM `todos`");
    
    echo json_encode($todos);
?>