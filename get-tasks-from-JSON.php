<?php
    $tasksJSON = file_get_contents('./tasks.json');

    echo "[ \n" . $tasksJSON . "\n ]";
?>