import './styles/style.css'
import './styles/card-list.css'
import './styles/todo-entry.css'

import {totalProjects, projectLogic, totalTodoItems, todoLogic, TodoItem, Project} from './scripts/logic.js'
import changeDOM from './scripts/changeDOM.js'

console.log('Testing')

changeDOM.displayHomepage(totalProjects)
changeDOM.updateSidebar(totalProjects)


/**
 * Create new project via field inside sidebar
*/


document.querySelector('.upper').addEventListener('click', (e) => {
    console.log('hi')
    changeDOM.displayHomepage(totalProjects)
})

const projectCreation = (() => {
    const newProjectField = document.querySelector('.create-project-field')
    newProjectField.addEventListener('keydown', (e) => {
    setTimeout(createProjectViaViability, 1, e)
    })

    function createProjectViaViability(e) {
        if(projectLogic.checkProjectNameViability(newProjectField.value) == true) {
            changeDOM.activateProjectField()
            
            if(e.key == 'Enter') {
                createNewProjectSidebar()

            }

        } else if(projectLogic.checkProjectNameViability(newProjectField.value) == false) {
            changeDOM.cancelProjectField()
        }
    }

    function createNewProjectSidebar() {
        //create Project
        projectLogic.createProject(newProjectField.value)
        //add Project to sidebar
        changeDOM.addProject(newProjectField.value)
        todoCreation.activateTodoCreation(newProjectField.value)

        console.log(totalProjects)
        newProjectField.value = ''
    }
})()

const todoCreation = (() => {
    function activateTodoCreation(projectName) {
        const button = document.querySelector(`[data-project="${projectName}"]`).firstChild.lastChild
        console.log(button)
        
        button.addEventListener('click', (e) => {
            changeDOM.displayTodoEntry(projectName)
            _addTodoOnButtonPress(projectName)
        })
    }

    for (const key in totalProjects) {
        if (Object.hasOwnProperty.call(totalProjects, key)) {
            const element = totalProjects[key];
            activateTodoCreation(element.name)
        }
    }


    function _addTodoOnButtonPress(projectName) {
        const submitButton = document.querySelector('[type="submit"]')

        submitButton.addEventListener("click", (e) => {
            if(document.querySelector('form').checkValidity() == true) {
                e.preventDefault()
                
                const title = document.querySelector('#title').value
                const priority = document.querySelector('#priority').value
                const description = document.querySelector('#description').value
                const dueDate = document.querySelector('#dueDate').value

                for (const index in totalProjects) {
                    const project = totalProjects[index];
                    if(project.name == projectName) {
                        projectLogic.assignToProject(project, new TodoItem(title, description, dueDate, priority))
                        console.log(project.list)
                        changeDOM.displayHomepage(totalProjects)
                        changeDOM.updateSidebar(totalProjects)
                    }
                }

            }
        })
        
    }

    function todoComplition(todo) {
        const circle = document.querySelector(`[data-todo="${JSON.stringify(todo)}"]`)
        circle.style.backgroundColor = "black"
        removeTodo()
        function removeTodo() {
            todoLogic.removeTodo(todo)
            changeDOM.deleteTodo(todo)
        }
    }

    document.querySelectorAll('.todo-dot').forEach(circle => {
        console.log(circle.dataset)
    })

    return{activateTodoCreation}
})()


