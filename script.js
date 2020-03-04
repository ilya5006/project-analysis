let pushTaskToJSON = async () =>
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

    fetch('./push-task-to-JSON.php', 
    {
        method: 'POST',
        body: formData
    });

    getTasksFromJSON();
}

let getTasksFromJSON = async () =>
{
    tasksDuration = 0.0;
    tasksRisks = 0.0;
    tasksLaborInputs = 0.0;

    let tasksFetch = await fetch('./get-tasks-from-JSON.php');
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

        taskTotal.insertAdjacentHTML('beforeBegin', `
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

let taskCreatingForm = document.querySelector('#task_creating_form');
let toShowTaskCreating = document.querySelector('#to_show_task_creating');
let toCloseTaskCreating = document.querySelector('#to_close_task_creating');
let toSendTask = document.querySelector('#to_send_task');
let taskTotal = document.querySelector('#task_total');
let tasksDuration = 0.0;
let tasksRisks = 0.0;
let tasksLaborInputs = 0.0;

getTasksFromJSON();

toShowTaskCreating.addEventListener('click', () =>
{
    toShowTaskCreating.style.display = 'none';
    taskCreatingForm.style.display = 'flex';
});

toCloseTaskCreating.addEventListener('click', () =>
{
    taskCreatingForm.style.display = 'none';
    toShowTaskCreating.style.display = 'block';
});

toSendTask.addEventListener('click', () =>
{
    pushTaskToJSON();
});