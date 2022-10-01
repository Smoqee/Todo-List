import {localStorageLogic} from './localStorage'

//save Inbox format
let INBOX;
if(localStorage.INBOX == undefined) {
    INBOX = {title: "Inbox", tasklist: []}
    localStorage.INBOX = JSON.stringify(INBOX)
} else {
    INBOX = JSON.parse(localStorage.INBOX)
}


const inboxDOM = (() => {
    const viewInbox = function() {
        const title = document.querySelector('h1')
        title.innerText = INBOX.title
    
        const taskListing = document.querySelector('.task-list')
        taskListing.dataset.project = 'INBOX'
        taskListing.innerHTML = ""
        for (const key in INBOX.tasklist) {
            if (Object.hasOwnProperty.call(INBOX.tasklist, key)) {
                const task = INBOX.tasklist[key];
    
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
                    INBOX.tasklist.splice(key, 1)
                    localStorageLogic.updateLocalStorageList()
                    viewInbox()
                })
    
            }
        }
    }
    return {viewInbox}
}) ()

//sidebar Inbox button
const inboxButton  = document.querySelector('.inbox')
inboxButton.addEventListener('click', (e) => {
    inboxDOM.viewInbox()
})

export {inboxDOM, INBOX}