import './styles/style.css'
import { projectDOM } from './scripts/Project'
import { inboxDOM } from './scripts/Inbox'
import { createTask } from './scripts/Task'
import { localStorageLogic } from './scripts/localStorage'


//sidebar with projects
projectDOM.loadProjectListing()

//activate "Create Project +" function
projectDOM.toggleProjectCreateButton("text")

//on page load view Inbox
inboxDOM.viewInbox()

