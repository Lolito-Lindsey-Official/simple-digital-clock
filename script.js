// Set up the the function for the clock
function cycleClock() {
        // Call for current time
        const nowTime = new Date();
        // Set up the hours, minutes, and seconds
        const hourTime = String(nowTime.getHours()).padStart(2, '0');
        const minuteTime = String(nowTime.getMinutes()).padStart(2, '0');
        const secondTime =String(nowTime.getSeconds()).padStart(2, '0');
        // Make a string to display the HH:MM:SS model
        const timeString = `The current time is:  ${hourTime}:${minuteTime}:${secondTime}`;
        // Bring the 'todo-clock' id here to display the time
        document.getElementById('todo-clock').innerText = timeString;
}

// 1000ms = 1 second
setInterval(cycleClock, 1000);

// When the user clicks on "Add New Task", get the button id to add the task
const addTask = document.getElementById('add-todo');

addTask.addEventListener('click', function() {
        const inputField = document.getElementById('todo-input');
        const makeNewTask =inputField.value;

        if (makeNewTask.trim() !== ' ') {
                const listItem = document.createElement('li');
                // Connects the created element with the input field, adds new task to the list
                listItem.innerText = makeNewTask;
                /* 
                        adds a new task = adds a node to the end of the list of children of a specified parent node

                        node = listItem;
                        parent node = todo-items;

                        Reference: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
                */
                document.getElementById('todo-items').appendChild(listItem);
        }
})
