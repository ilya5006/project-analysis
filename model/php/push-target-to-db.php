<?php
    require_once __DIR__ . '/Classes/Database.php';

    $targetName = $db->escapeString($_POST['target_name']);
    $targetDateCreated = $db->escapeString($_POST['target_date_created']);
    $targetDateEnd = $db->escapeString($_POST['target_date_end']);
    $targetProjectId = $db->escapeString($_POST['project_id']);

    $db->queryExecute("INSERT INTO projects VALUES (NULL, '$targetName', '$targetDateCreated', '$targetDateEnd', '$targetProjectId')");
?>