class ProjectAnalysis
{
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

        projectsJSONArray.forEach((project) =>
        {
            allProjectsDiv.insertAdjacentHTML('beforeEnd', `
            <div class="item project" data-projectId="${project.project_id}, data-"> 
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

        fetch('./model/php/push-todos-to-db.php',  // Такой путь потому что путь почему-то начинается с корня, а не с пути данного файла
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

        let tasksFetch = await fetch('./model/php/get-todos-from-db.php'); // Такой путь потому что путь почему-то начинается с корня, а не с пути данного файла
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