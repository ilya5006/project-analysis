let projectAnalysis = new ProjectAnalysis();

let taskCreatingForm = document.querySelector('#task_creating_form');
let toShowTaskCreating = document.querySelector('#to_show_task_creating');
let toCloseTaskCreating = document.querySelector('#to_close_task_creating');
let toSendTask = document.querySelector('#to_send_task');
let taskTotal = document.querySelector('#task_total');
let project = document.querySelector('#project');
let tasks = document.querySelector('.tasks');
let targets = document.querySelector('#targets');
let allProjectsDiv = document.querySelector('#all-projects');
let allTargetsDiv = document.querySelector('#all-targets');
let allWorksDiv = document.querySelector('#all-works'); 

let tasksDuration = 0.0;
let tasksRisks = 0.0;
let tasksLaborInputs = 0.0;

projectAnalysis.showProjects();

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
    projectAnalysis.showTasks();
});

allProjectsDiv.addEventListener('click', (event) =>
{
    let isProjectButton = event.target.tagName.toLowerCase() == 'span';

    if (isProjectButton)
    {
        let infoDiv = event.target.parentElement;

        projectAnalysis.projectId = infoDiv.dataset.id;
        projectAnalysis.projectName = infoDiv.dataset.name;
        projectAnalysis.projectDateCreated = infoDiv.dataset.datecreated;
        projectAnalysis.projectDateEnd = infoDiv.dataset.dateend;

        projectAnalysis.showTargets();

        document.querySelector('#targets').style.display = 'flex';
        // document.querySelector('#works').style.display = 'flex';

    }
});

allTargetsDiv.addEventListener('click', (event) =>
{
    let isProjectButton = event.target.tagName.toLowerCase() == 'span';

    if (isProjectButton)
    {
        let infoDiv = event.target.parentElement;

        projectAnalysis.targetId = infoDiv.dataset.id;
        projectAnalysis.targetName = infoDiv.dataset.name;
        projectAnalysis.targetDateCreate = infoDiv.dataset.datecreated;
        projectAnalysis.targetDateEnd = infoDiv.dataset.dateend;

        projectAnalysis.showWorks();

        document.querySelector('#works').style.display = 'flex';

    }
});