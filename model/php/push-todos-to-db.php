<?php
    require_once __DIR__ . '/Classes/Database.php';

    $taskName = $db->escape_string($_POST['taskName']);
    $taskDuration = $db->escape_string($_POST['taskDuration']);
    $taskLaborInput = $db->escape_string($_POST['taskLaborInput']);
    $taskRisk = $db->escape_string($_POST['taskRisk']);
?>