<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project analysis</title>

    <link rel="stylesheet" href="./view/css/style.css">
    <script src="./model/js/Classes/ProjectAnalysis.js" defer></script>
    <script src="./model/js/main.js" defer></script>

</head>
<body>
    <button id="to_show_task_creating">Создать задачу</button>

    <div id="task_creating_form">
        <button id="to_close_task_creating">Закрыть</button>
        <input type="text" placeholder="Введите имя задачи" id="task_creating_name">
        <input type="text" placeholder="Введите продолжительность задачи (часы): " id="task_creating_duration">
        <input type="text" placeholder="Введите трудозатратность задачи (человеко-часов): " id="task_creating_labor_input">
        <input type="text" placeholder="Введите вероятность риска задачи" id="task_creating_risk">
        <button id="to_send_task">Готово</button>
    </div>

    <div id="project">
        <div class="tasks">
            <!-- <div class="task">
                <p class="task_name"></p>
                <p class="task_durataion"></p>
                <p class="task_labor_input"></p>
                <p class="task_risk"></p>
            </div> -->
        </div>

        <div id="task_total">
            <p class="task_total_duration"></p>
            <p class="task_total_labor_input"></p>
            <p class="task_total_risks"></p>
        </div>
    </div>
</body>
</html>