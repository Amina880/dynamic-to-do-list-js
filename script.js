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
            button1.className = 'remove-btn';
            button1.addEventListener('click', () => {
                taskList.removeChild(list1);
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
    }
    addTask()
})