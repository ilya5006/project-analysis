<?php
    require_once __DIR__ . '/Classes/Database.php';

    $projectId = (int)$_POST['project_id'];

    $projects = $db->queryAll("SELECT * FROM `targets` WHERE `project_id` = '$projectId'");

    echo json_encode($projects);
?>