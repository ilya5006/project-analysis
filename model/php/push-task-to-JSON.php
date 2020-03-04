<?php
    $task = $_POST['task'];

    $task = strlen(file_get_contents('../tasks.json')) > 0 ? (", \n" . $task) : $task;

    $file = fopen('../tasks.json', 'a');

    fwrite($file, $task);

    echo 'Задачи успешно добавлены';
?>