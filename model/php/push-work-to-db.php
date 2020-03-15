<?php
    require_once __DIR__ . '/Classes/Database.php';

    $taskName = $db->escapeString($_POST['taskName']);
    $taskDuration = $db->escapeString($_POST['taskDuration']);
    $taskLaborInput = $db->escapeString($_POST['taskLaborInput']);
    $taskRisk = $db->escapeString($_POST['taskRisk']);
?>