const taskInput = document.getElementById('taskInput')
const addBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearBtn = document.getElementById('clearCompletedBtn')
const clearAll = document.getElementById('clearAllTasks')

let tasks = [];

function addTask() {
    const taskText = taskInput.value.trim();
    if(taskText !== ""){
        tasks.push({text: taskText});
        taskInput.value = "";
        displayTasks();
    }
} 

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task,index) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
        <label for="task-${index}">${task.text}</label> 
        `;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompltTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

function clearAllTasks() {
    tasks = [];
    displayTasks();
}

addBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", clearCompltTasks);
clearAll.addEventListener("click", clearAllTasks);