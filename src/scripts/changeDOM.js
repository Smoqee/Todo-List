export default (() => {

    const updateSidebar = function(totalProjects) {
        console.log('vjdsnv')
        const lower = document.querySelector('.lower')
        lower.innerHTML = `
        <div class="project-creation">
            <input type="text" class="create-project-field" placeholder="Create Project">
        </div>
        `
        for (let index = 0; index < totalProjects.length; index++) {
            const project = totalProjects[index];
            addProject(project.name)
            for (let i = 0; i < project.list.length; i++) {
                const todo = project.list[i];
                addTodo(project, todo)
                
            }
            
        }
    }


    const displayHomepage = function(totalProjects)  {

        const mainContent = document.querySelector('.main-content')
        mainContent.innerHTML = ''

        let cardList = document.createElement('div')
        cardList.classList.add('card-list')
        cardList.innerHTML = ''
        mainContent.append(cardList)

        for(let i= 0; i<totalProjects.length; i++) {
            const project = totalProjects[i]
            for(let x = 0; x<project.list.length; x++) {
                const todo = project.list[x]
                const cardItem = document.createElement('div')
                cardItem.classList.add('card-item')
                cardList.append(cardItem)
        
                const todoTitle = document.createElement('h1')
                todoTitle.innerText = todo.title
                cardItem.append(todoTitle)
        
                const projectTag = document.createElement('h2')
                projectTag.innerText = '#' + project.name.toLowerCase()
                cardItem.append(projectTag)

                const descriptionParagraph = document.createElement('p')
                descriptionParagraph.innerText = todo.description
                cardItem.append(descriptionParagraph)

                const progressBar = document.createElement('div')
                progressBar.classList.add('progress-bar')
                cardItem.append(progressBar)

                const progressOfProgressBar = document.createElement('div')
                progressOfProgressBar.setAttribute("data-progress", "70")
                progressBar.append(progressOfProgressBar)

                const markComplete = document.createElement('h4')
                markComplete.innerText = "mark as complete."
                cardItem.append(markComplete)


                const todoDueDate = document.createElement('h3')
                todoDueDate.innerText = todo.dueDate
                cardItem.append(todoDueDate)

                cardItem.addEventListener('mouseover', (e) => {
                    if(markComplete.style.visibility != "visible") {
                        markComplete.style.visibility = "visible"
                    }
                })
                cardItem.addEventListener('mouseout', (e) => {
                    if(markComplete.style.visibility != "hidden") {
                        markComplete.style.visibility = "hidden"
                    }
                })
            }

        }
    }

    /**
     * Project DOM stuff
     */

    const addProject = function(name) {
        const lower = document.querySelector('.lower')

        const projectList = document.createElement('div')
        projectList.classList.add('project-list')
        projectList.dataset.project = name
        lower.append(projectList)

        const projectTitle = document.createElement('div')
        projectTitle.classList.add('project-title')
        projectList.append(projectTitle)

        const titleDot = document.createElement('span')
        titleDot.classList.add('dot')
        titleDot.classList.add('title-dot')
        projectTitle.append(titleDot)

        const titleParagraph = document.createElement('p')
        titleParagraph.innerText = name
        projectTitle.append(titleParagraph)

        const addTodoButton = document.createElement('button')
        addTodoButton.classList.add('add-todo-button')
        addTodoButton.innerText = 'Add'
        projectTitle.append(addTodoButton)

        
    }

    

    const cancelProjectField = function() {
        document.querySelector('.create-project-field').classList.add('canceled')
    }

    const activateProjectField = function() {
        document.querySelector('.create-project-field').classList.remove('canceled')
    }

    /**
     * TODO DOM stuff
     */

    const addTodo = function(project, todo) {
        const list = document.querySelector(`[data-project="${project.name}"]`)

        const projectItem = document.createElement('div')
        projectItem.classList.add('project-item')
        list.append(projectItem)
        
        const todoItemDot = document.createElement('span')
        todoItemDot.classList.add('dot')  
        todoItemDot.classList.add('todo-dot')
        todoItemDot.dataset.todo = JSON.stringify(todo)
        projectItem.append(todoItemDot)

        const todoItemParagraph = document.createElement('p')
        todoItemParagraph.innerText = todo.title
        projectItem.append(todoItemParagraph)
    }


    const displayTodoEntry = function(projectName) {
        const mainContent = document.querySelector('.main-content')
        mainContent.innerHTML = ''

        const todoItemPage = document.createElement('div')
        todoItemPage.classList.add('todo-item-page')
        mainContent.append(todoItemPage)

        const form = document.createElement('form')
        todoItemPage.append(form)

        const title = document.createElement('div')
        title.classList.add('title')
        form.append(title)

        const titleInput = document.createElement('input')
        titleInput.type = 'text'
        titleInput.placeholder = 'Title..'
        titleInput.name = 'title'
        titleInput.id = 'title'
        titleInput.required = true
        title.append(titleInput)
        console.log(title)

        const projectTag = document.createElement('span')
        projectTag.innerText = `#${projectName}`
        projectTag.classList.add('project-tag')
        title.append(projectTag)

        const priority = document.createElement('div')
        priority.classList.add('priority')
        form.append(priority)

        const priorityLabel = document.createElement('label')
        priorityLabel.innerText = 'Priority:'
        priorityLabel.setAttribute('for', 'priority')
        priority.append(priorityLabel)

        const priorityInput = document.createElement('input')
        priorityInput.placeholder = 1
        priorityInput.type  = 'number'
        priorityInput.name = 'priority'
        priorityInput.id = 'priority'
        priorityInput.required = true
        priority.append(priorityInput)

        const description = document.createElement('textarea')
        description.name = 'description'
        description.id = 'description'
        description.placeholder = 'Description..'
        description.required = true
        form.append(description)

        const buttonFields = document.createElement('div')
        buttonFields.classList.add('button-fields')
        form.append(buttonFields)
    
        const dueDate = document.createElement('input')
        dueDate.type = 'date'
        dueDate.name = 'dueDate'
        dueDate.id = 'dueDate'
        dueDate.required = true;
        buttonFields.append(dueDate)

        const submitButton = document.createElement('button')
        submitButton.type = 'submit'
        submitButton.innerText = 'Submit'
        buttonFields.append(submitButton)

        var input = document.querySelector('#title'); // get the input element
        input.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event

        function resizeInput() {
            this.style.width = this.value.length + "ch";
            this.style.minWidth = "6ch"
        }

        
    }

    const deleteTodo = function(todo) {
        document.querySelector(`[data-todo="${JSONG.stringify(todo)}"]`).parentElement.remove()
    } 

    const displayTodoPage = function() {
        
    }
 
    return {
        updateSidebar, addProject, cancelProjectField, activateProjectField, addTodo, displayHomepage, displayTodoEntry, deleteTodo
    }
})()