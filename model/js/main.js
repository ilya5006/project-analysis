let projectAnalysis = new ProjectAnalysis();

let taskCreatingForm = document.querySelector('#task_creating_form');
let toShowTaskCreating = document.querySelector('#to_show_task_creating');
let toCloseTaskCreating = document.querySelector('#to_close_task_creating');
let toSendTask = document.querySelector('#to_send_task');
let taskTotal = document.querySelector('#task_total');
let project = document.querySelector('#project');
let tasks = document.querySelector('.tasks');

let tasksDuration = 0.0;
let tasksRisks = 0.0;
let tasksLaborInputs = 0.0;

projectAnalysis.getTasksFromJSON();

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
    projectAnalysis.pushTaskToJSON();
});