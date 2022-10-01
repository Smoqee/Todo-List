import { inboxDOM, INBOX } from "./Inbox"
import { projectList, projectDOM } from "./Project"
import { localStorageLogic } from "./localStorage"

//task creation with description and due date
export default class Task {
    constructor(title, dueDate) {
        this.title = title
        this.dueDate = dueDate
    }
}

//Create Task -> popup window
const createTaskButton = document.querySelector('.main-content').lastElementChild

createTaskButton.addEventListener('click', (e) => {
    taskDOM.viewTaskPopUp()
    document.querySelector('#task-description').focus()
})


//submit to create new task (saved in storage)
const submitButton = document.querySelector('[type="button"]')
submitButton.addEventListener('click', (e) => {
    const title = document.querySelector('#task-description').value
    const date = document.querySelector('#task-date').value
    console.log(date)
    taskLogic.addTask(title, date)
    taskDOM.closeTaskPopUp()
    localStorageLogic.updateLocalStorageList()
    document.querySelector('#task-description').value = ""
    document.querySelector('#task-date').value = ""

})



const taskDOM = (() => {
    const viewTaskPopUp = function() {
        const content = document.querySelector('.content')
        content.classList.add('blur')

        const taskField = document.querySelector('.new-task')
        taskField.classList.remove('hidden')
    }

    const closeTaskPopUp = function() {
        const content = document.querySelector('.content')
        content.classList.remove('blur')

        const taskField = document.querySelector('.new-task')
        taskField.classList.add('hidden')
    }

    return { viewTaskPopUp, closeTaskPopUp}
})()

//updated in local storage
const taskLogic = (() => {
    const addTask = function(title, date) {
        const dataProject = document.querySelector('.task-list').dataset.project
        //Inbox and other projects stored differently because INBOX is permanant
        if(dataProject == "INBOX") {
            INBOX.tasklist.push(new Task(title, date))
            inboxDOM.viewInbox()
        } else {
            projectList[dataProject].tasklist.push(new Task(title, date))
            projectDOM.viewProjectTab(projectList[dataProject], dataProject)
        }
    }
    return {addTask}
})()