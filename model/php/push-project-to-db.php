<?php
    require_once __DIR__ . '/Classes/Database.php';

    $projectName = $db->escapeString($_POST['project_name']);
    $projectDateCreated = $db->escapeString($_POST['project_date_created']);
    $projectDateEnd = $db->escapeString($_POST['project_date_end']);

    $db->queryExecute("INSERT INTO projects VALUES (NULL, '$projectName', '$projectDateCreated', '$projectDateEnd')");
?>