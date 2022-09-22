
let totalProjects = []
if(localStorage.getItem("totalProjectList") != null) {
    totalProjects = JSON.parse(localStorage.getItem("totalProjectList"))
}

/**
 * Create Project object
 * (contains list with their todo items)
 */
const Project = class {
    constructor(name) {
        this.name = name
    }
    list = []
}


/**
 * general logic for project related stuff
 */

const projectLogic = (() => {

    /**
     * create new Project with name
     * add to list with every project
     */
    const createProject = function(name) {
        let currentProject = new Project(name)
        totalProjects.push(currentProject)
        localSave.saveProject()
    }

    const editProjectName = function(oldName, newName) {
        totalProjects.forEach(object => {
            if(object.name == oldName) {
                object.name = newName
            }
        })
    }

    const assignToProject = function(project, todo) {
        project.list.push(todo)
        localSave.saveProject()
    }

    const checkProjectNameViability = function(name) {
        for (let object of totalProjects) {
            if(name == object.name){
                return(false)
            }
        }
            return(true)
    }

    return {
        createProject, editProjectName, checkProjectNameViability, assignToProject
    }
    
})()

let totalTodoItems = []

const TodoItem = class {
    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
}

const todoLogic = (() => {
    const createTodoItem = function(title, description, dueDate, priority) {
        let currentTodoItem = new TodoItem(title, description, dueDate, priority)
        totalTodoItems.push(currentTodoItem)
        
    }

    const editProperty = function(selectedTodoItem, property, updatedVersion) {
        totalTodoItems[selectedTodoItem][property] = updatedVersion
        
    }

    const removeTodo = function(todo) {
        for (const key in totalProjects) {
            if (Object.hasOwnProperty.call(totalProjects, key)) {
                const project = totalProjects[key];
                if(project.list.includes(todo)) {
                    for(let i = 0; i < project.list.length; i++) {
                        if(project.list[i] === todo) {
                            project.list.splice(i, 1)
                            console.log(project)
                            localSave.saveProject()
                        }
                    }
                }
            }
        }
    }

    return {
        createTodoItem, editProperty, removeTodo
    }
})()

const localSave = (() => {
    function saveProject() {
        localStorage.setItem("totalProjectList", JSON.stringify(totalProjects))
    }

    return {
        saveProject
    }
})()




export {projectLogic, totalProjects, totalTodoItems, todoLogic, TodoItem, Project, localSave}

