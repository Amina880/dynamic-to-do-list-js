document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    function addTask(){
        taskText = taskInput.value.trim();
        // Check if the input is not empty
        if(taskText.textcontent = ''){
            alert('Please enter a task')
        } else{
            // Create a new <li> element
            const list1 = document.createElement('li');
            list1.textcontent = taskText;
            // Create a new button element for removing the task
            const button1 = document.createElement('button');
            button1.textcontent = 'Remove';
            button1.classList.add ('remove-btn');
            button1.addEventListener('click', () => {
                taskList.removeChild(list1);
                updateLocalStorage(); // Update Local Storage after removing a task
            });
            // Append the remove button to the <li>
            list1.appendChild(button1);
            // Append the <li> to the taskList
            taskList.appendChild(list1);
            taskInput.value = "";
        }
        // Add an event listener to the add task button
        addButton.addEventListener('click', addTask)
        // Add an event listener to task input for the 'keypress' event
        taskInput.addEventListener('keypress', function(event){
        if(event.key === 'Enter'){
            addTask();
        }
    })
    function loadTasksFromLocalStorage() {
        // Retrieve tasks from Local Storage
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
         // Iterate through the tasks and add them to the list
         tasks.forEach(task => {
         // Create a new <li> element for each task
        const list1 = document.createElement('li');
        list1.textcontent = taskText;
        // Create a new button element for removing the task
        const button1 = document.createElement('button');
        button1.textcontent = 'Remove';
        button1.classList.add ('remove-btn');
        button1.addEventListener('click', () => {
                taskList.removeChild(list1);
                tasks = tasks.filter(t => t !== task);
                updateLocalStorage(); // Update Local Storage after removing a task
            });
        // Append the remove button to the <li>
        list1.appendChild(button1);
        // Append the <li> to the taskList
        taskList.appendChild(list1);
        });
    }
    // Function to update Local Storage with the current list of tasks
    function updateLocalStorage() {
        // Get all task text content from the list
        const tasks = [];
        taskList.querySelectorAll('li').forEach(list1 => {
            tasks.push(list1.textContent);
        });

        // Store the tasks in Local Storage
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    loadTasksFromLocalStorage();

    }
    addTask()
})