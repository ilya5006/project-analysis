class ProjectAnalysis
{
    async pushTaskToJSON()
    {
        let taskName = document.querySelector('#task_creating_name').value;
        let taskDuration = parseFloat(document.querySelector('#task_creating_duration').value);
        let taskLaborInput = parseFloat(document.querySelector('#task_creating_labor_input').value);
        let taskRisk = parseFloat(document.querySelector('#task_creating_risk').value);

        let task = 
        {
            name: taskName,
            duration: ! isNaN(taskDuration) ? taskDuration : 0,
            laborInput: ! isNaN(taskLaborInput) ? taskLaborInput : 0,
            risk: ! isNaN(taskRisk) ? taskRisk : 0
        }

        let formData = new FormData();
        formData.append('task', JSON.stringify(task));

        fetch('./model/php/push-task-to-JSON.php',  // Такой путь потому что путь почему-то начинается с корня, а не с пути данного файла
        {
            method: 'POST',
            body: formData
        });

        this.getTasksFromJSON();
    }

    async getTasksFromJSON ()
    {
        tasks.innerHTML = '';

        tasksDuration = 0.0;
        tasksRisks = 0.0;
        tasksLaborInputs = 0.0;

        let tasksFetch = await fetch('./model/php/get-tasks-from-JSON.php'); // Такой путь потому что путь почему-то начинается с корня, а не с пути данного файла
        let tasksJSONArray = await tasksFetch.json();

        tasksJSONArray.forEach((taskJSON) =>
        {
            let name = taskJSON.name;
            let duration = taskJSON.duration;
            let laborInput = taskJSON.laborInput;
            let risk = taskJSON.risk;

            tasksDuration += parseFloat(duration);
            tasksRisks += parseFloat(risk);
            tasksLaborInputs += parseFloat(laborInput);

            tasks.insertAdjacentHTML('beforeEnd', `
            <div class="task">
                <p class="task_name"><span>Имя задачи:</span> ${name}</p>
                <p class="task_durataion"><span>Время для выполнения задачи (часы):</span> ${duration}</p>
                <p class="task_labor_input"><span>Трудозатраты на выполнение задачи (человеко-часов):</span> ${laborInput}</p>
                <p class="task_risk"><span>Риски задачи:</span> ${risk}</p>
            </div>
            `);
        });

        taskTotal.querySelector('.task_total_duration').textContent = `Время выполнения: ${tasksDuration + tasksRisks}`;
        taskTotal.querySelector('.task_total_labor_input').textContent = `Трудозатраты: ${tasksLaborInputs}`;
    }
}