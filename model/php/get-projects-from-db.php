<?php
    require_once __DIR__ . '/Classes/Database.php';

    $projects = $db->queryAll("SELECT * FROM `projects`");

    echo json_encode($projects);
?>