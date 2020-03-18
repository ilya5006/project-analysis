class ProjectAnalysis
{
    projectId;
    projectName;
    projectDateCreated;
    projectDateEnd;

    targetId;
    targetName;
    targetDateCreated;
    targetDateEnd;

    todoId;
    todoName;
    todoDateCreated;
    todoDateEnd;

    async pushWork()
    {

    }

    async getWorks()
    {
        let formData = new FormData();
        formData.append('target_id', this.targetId);

        let worksFetch = await fetch('./model/php/get-works-from-db.php', 
        {
            method: 'POST',
            body: formData
        });

        let worksJSONArray = await worksFetch.json();

        return worksJSONArray;
    }

    async showWorks()
    {
        let worksJSONArray = await this.getWorks();

        allWorksDiv.innerHTML = '';

        worksJSONArray.forEach((work) =>
        {
            allWorksDiv.insertAdjacentHTML('beforeEnd', `
            <div class="item work" data-id="${work.work_id}", data-name="${work.work_name}", data-dateCreated="${work.work_date_created}", data-dateEnd="${work.target_date_end}"> 
                <span class="item-title">${work.work_name}</span> 
            </div>
            `);
        });
    }

    async pushTarget()
    {
        let projectName = creatingTargetForm.querySelector('#target-name').value;
        let projectDateCreated = creatingTargetForm.querySelector('#target-date-created').value;
        let projectDateEnd = creatingTargetForm.querySelector('#target-date-end').value;

        let formData = new FormData();

        formData.append('target_name', projectName);
        formData.append('target_date_created', projectDateCreated);
        formData.append('target_date_end', projectDateEnd);
        formData.append('project_id', this.projectId);

        fetch('./model/php/push-target-to-db.php',
        {
            method: 'POST',
            body: formData
        })
        .then(() =>
        {
            this.showTargets();
        });
    }
    
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

    async pushProject()
    {
        let projectName = creatingProjectForm.querySelector('#project-name').value;
        let projectDateCreated = creatingProjectForm.querySelector('#project-date-created').value;
        let projectDateEnd = creatingProjectForm.querySelector('#project-date-end').value;

        let formData = new FormData();

        formData.append('project_name', projectName);
        formData.append('project_date_created', projectDateCreated);
        formData.append('project_date_end', projectDateEnd);

        fetch('./model/php/push-project-to-db.php',
        {
            method: 'POST',
            body: formData
        })
        .then(() =>
        {
            this.showProjects();
        });
    }

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
}