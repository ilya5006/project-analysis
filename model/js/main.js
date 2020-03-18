let projectAnalysis = new ProjectAnalysis();

let taskTotal = document.querySelector('#task_total');
let project = document.querySelector('#project');
let tasks = document.querySelector('.tasks');
let targets = document.querySelector('#targets');
let allProjectsDiv = document.querySelector('#all-projects');
let allTargetsDiv = document.querySelector('#all-targets');
let allWorksDiv = document.querySelector('#all-works');

let creatingTargetForm = document.querySelector('#creating-target-form');
let creatingProjectForm = document.querySelector('#creating-project-form');
let creatingWorkForm = document.querySelector('#creating-work-form');

let createProjectButton = document.querySelector('#project-create');
let createTargetButton = document.querySelector('#target-create');
let createWorkButton = document.querySelector('#work-create');

let addProjectButton = document.querySelector('#add-project');
let addTargetButton = document.querySelector('#add-target');
let addWorkButton = document.querySelector('#add-work');

let creatingForms = document.querySelectorAll('.creating-form');

projectAnalysis.showProjects();

addProjectButton.addEventListener('click', () =>
{
    creatingProjectForm.style.display = 'flex';
});

addTargetButton.addEventListener('click', () =>
{
    creatingTargetForm.style.display = 'flex';
});

addWorkButton.addEventListener('click', () =>
{
    creatingWorkForm.style.display = 'flex';
});

creatingForms.forEach((form) =>
{
    form.addEventListener('click', (event) =>
    {
        if (event.target.classList.contains('close-button'))
        {
            event.target.parentElement.style.display = 'none';
        }
    });
});

createProjectButton.addEventListener('click', () =>
{
    projectAnalysis.pushProject();
});

createTargetButton.addEventListener('click', () =>
{
    projectAnalysis.pushTarget();
});

createWorkButton.addEventListener('click', () =>
{
    projectAnalysis.pushWork();
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
    let isTargetButton = event.target.tagName.toLowerCase() == 'span';

    if (isTargetButton)
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