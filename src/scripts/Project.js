import { localStorageLogic } from "./localStorage";

// Project creation with all tasks inside the project
export default class Project {
    tasklist = []
    constructor(title) {
        this.title = title
    }
}


//create default list of all projects and save to localStorage - check if localstorage is already
let projectList;

if(localStorage.projectList == undefined) {
    projectList = []
    localStorage.projectList = JSON.stringify(projectList)
} else {
    projectList = JSON.parse(localStorage.projectList)
}


//just for testing:
/**
let projectList = []
localStorage.projectList = JSON.stringify(projectList)
 */



//load projects in sidebar via localstorage
const projectDOM = (() => {
    const loadProjectListing = function() {
        const projectListing = document.querySelector('.project-list')
        projectListing.innerHTML = ""
        for (const key in projectList) {
            if (Object.hasOwnProperty.call(projectList, key)) {
                const project = projectList[key];
    
                const projectDiv = document.createElement('div')
                projectDiv.classList.add('project')
                projectDiv.dataset.number = key
                projectListing.appendChild(projectDiv)
    
                const box = document.createElement('div')
                box.classList.add('colored-box')
                projectDiv.appendChild(box)
    
                box.addEventListener('click', (e) => {
                    console.log(key)
                    projectLogic.removeProject(project)

                })
    
                const title = document.createElement('p')
                title.innerText = project.title
                projectDiv.appendChild(title)

                title.addEventListener('click', (e) => {
                    viewProjectTab(project, projectDiv.dataset.number)
                })
            }
        }
    }

    //view specific project Tabs with every Task inside a project
    const viewProjectTab = function(project, dataNumber) {

        const title = document.querySelector('h1')
        title.innerText = project.title

        const taskListing = document.querySelector('.task-list')
        taskListing.innerHTML = ""
        taskListing.dataset.project = dataNumber
        for (const key in project.tasklist) {
            if (Object.hasOwnProperty.call(project.tasklist, key)) {
                const task = project.tasklist[key];

                const taskDiv = document.createElement('div')
                taskDiv.classList.add(`task-${key}`)
                taskListing.appendChild(taskDiv)

                const checkBox = document.createElement('input')
                checkBox.type = "checkbox"
                taskDiv.appendChild(checkBox)

                const taskTitle = document.createElement('p')
                taskTitle.innerText = task.title
                taskDiv.appendChild(taskTitle)

                const taskDate = document.createElement('p')
                taskDate.innerText = task.dueDate
                taskDate.classList.add('date')
                taskDiv.appendChild(taskDate)


                checkBox.addEventListener('change', (e) => {
                    taskDiv.remove()
                    project.tasklist.splice(key, 1)
                    localStorageLogic.updateLocalStorageList()
                    viewProjectTab(project, dataNumber)
                })

            }
        }
    }

    //Create Project + -> Input (press enter to create new Project)
    const toggleProjectCreateButton = function(state) {
        const projectListHead = document.querySelector('.project-list-head')
        console.log(projectListHead.lastElementChild)
        projectListHead.lastElementChild.remove()

        if(state == "input") {
            const projectInput = document.createElement('input')
            projectInput.type = "text"

            projectListHead.append(projectInput)

            projectInput.focus()

            projectInput.addEventListener('focusout', (e) => {
                toggleProjectCreateButton("text")
            })

            projectInput.addEventListener('keypress', (e) => {
                if(e.key == "Enter") {
                    projectLogic.addProject(projectInput.value)
                    projectInput.blur()
                }
                
            })
        } else {
            const projectCreateText = document.createElement('p')
            projectCreateText.classList.add("light-text")
            projectCreateText.classList.add("creation")
            projectCreateText.innerText = "Create Project +"

            projectListHead.append(projectCreateText)

            const createProjectButton = document.querySelector('.creation')
            createProjectButton.addEventListener('click', (e) => {
                projectDOM.toggleProjectCreateButton("input")
            })
        }
        
    }

    
    return {loadProjectListing, viewProjectTab, toggleProjectCreateButton}
})()


//updated in local storage and array list
const projectLogic = (() => {
    const removeProject = function(project) {
        localStorageLogic.removeFromStorageList(project)
        projectDOM.loadProjectListing()
    }
    const addProject = function(title) {
        localStorageLogic.addToStorageList(new Project(title))
        projectDOM.loadProjectListing()
    }

    return {removeProject, addProject}
})()

export {projectDOM, projectList}