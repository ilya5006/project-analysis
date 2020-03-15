class ProjectAnalysis
{
    projectId;
    projectName;
    projectDateCreate;
    projectDateEnd;

    targetId;
    targetName;
    targetDateCreated;
    targetDateEnd;

    todoId;
    todoName;
    todoDateCreated;
    todoDateEnd;

    async getTargets()
    {
        let formData = new FormData();
        formData.append('project_id', this.projectId);

        let targetsFetch = await fetch('./model/php/get-targets-from-db.php', 
        {
            method: 'POST',
            body: formData
        });

        let targetsJSONArray = await targetsFetch.json();

        return targetsJSONArray;
    }

    async showTargets()
    {
        let targetsJSONArray = await this.getTargets();

        allTargetsDiv.innerHTML = '';

        targetsJSONArray.forEach((target) =>
        {
            allTargetsDiv.insertAdjacentHTML('beforeEnd', `
            <div class="item target" data-id="${target.target_id}", data-name="${target.target_name}", data-dateCreated="${target.target_date_created}", data-dateEnd="${target.target_date_end}"> 
                <span class="item-title">${target.target_name}</span> 
            </div>
            `);
        });
    }

    async pushProject() { }

    async getProjects()
    {
        let projectsFetch = await fetch('./model/php/get-projects-from-db.php');
        let projectsJSONArray = await projectsFetch.json();

        return projectsJSONArray;
    }

    async showProjects()
    {
        let projectsJSONArray = await this.getProjects();
        allProjectsDiv.innerHTML = '';

        projectsJSONArray.forEach((project) =>
        {
            allProjectsDiv.insertAdjacentHTML('beforeEnd', `
            <div class="item project" data-id="${project.project_id}", data-name="${project.project_name}", data-dateCreated="${project.project_date_created}", data-dateEnd="${project.project_date_end}"> 
                <span class="item-title">${project.project_name}</span> 
            </div>
            `);
        });
    }

    async pushTask()
    {
        let taskName = document.querySelector('#task_creating_name').value;
        let taskDuration = parseFloat(document.querySelector('#task_creating_duration').value);
        let taskLaborInput = parseFloat(document.querySelector('#task_creating_labor_input').value);
        let taskRisk = parseFloat(document.querySelector('#task_creating_risk').value);

        let formData = new FormData();

        formData.append('taskName', taskName);
        formData.append('taskDuration', ! isNaN(taskDuration) ? taskDuration : 0);
        formData.append('taskLaborInput', ! isNaN(taskLaborInput) ? taskLaborInput : 0);
        formData.append('taskRisk', ! isNaN(taskRisk) ? taskRisk : 0);

        fetch('./model/php/push-todos-to-db.php',  // Такой путь потому что он почему-то начинается с корня, а не с пути данного файла
        {
            method: 'POST',
            body: formData
        });

        this.showTasks();
    }

    async getTasks()
    {
        tasks.innerHTML = '';

        tasksDuration = 0.0;
        tasksRisks = 0.0;
        tasksLaborInputs = 0.0;

        let tasksFetch = await fetch('./model/php/get-todos-from-db.php'); // Такой путь потому что он почему-то начинается с корня, а не с пути данного файла
        let tasksJSONArray = await tasksFetch.json();

        return tasksJSONArray;
    }

    async showTasks()
    {
        let tasksJSONArray = await this.getTasks();

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

        this.initProjectsButtons();
    }
}