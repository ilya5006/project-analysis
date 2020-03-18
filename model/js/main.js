let projectAnalysis = new ProjectAnalysis();

let taskTotal = document.querySelector('#task_total');
let project = document.querySelector('#project');
let tasks = document.querySelector('.tasks');
let targets = document.querySelector('#targets');
let allProjectsDiv = document.querySelector('#all-projects');
let allTargetsDiv = document.querySelector('#all-targets');
let allWorksDiv = document.querySelector('#all-works');
let targetCreateButton = document.querySelector('');

let tasksDuration = 0.0;
let tasksRisks = 0.0;
let tasksLaborInputs = 0.0;

projectAnalysis.showProjects();

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
        document.querySelector('#works').style.display = 'none';
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