<?php
    require_once __DIR__ . '/Classes/Database.php';

    $workName = $db->escapeString($_POST['work_name']);
    $workDateCreated = $db->escapeString($_POST['work_date_created']);
    $workDateEnd = $db->escapeString($_POST['work_date_end']);
    $workTargetId = $db->escapeString($_POST['target_id']);

    $db->queryExecute("INSERT INTO `works` VALUES (NULL, '$workName', '$workDateCreated', '$workDateEnd', '$workTargetId')");
?>