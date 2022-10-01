import { projectList } from "./Project"
import { INBOX } from "./Inbox"

const localStorageLogic = (() => {
    const addToStorageList = function(project) {
        projectList.push(project)
        localStorage.projectList = JSON.stringify(projectList)
    }
    const removeFromStorageList = function(project) {
        for (const key in projectList) {
            if (Object.hasOwnProperty.call(projectList, key)) {
                const element = projectList[key];
                if(element == project) {
                    projectList.splice(key, 1)
                    localStorage.projectList = JSON.stringify(projectList)
                }
            }
        }
    }

    const updateLocalStorageList = function() {
        localStorage.INBOX = JSON.stringify(INBOX)
        localStorage.projectList = JSON.stringify(projectList)
    }

    return {addToStorageList, removeFromStorageList, updateLocalStorageList}
})()


export {localStorageLogic}