let tasks = [];

// Add a new task
function addTask() {

    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });

    input.value = "";

    displayTasks();
}


// Display tasks
function displayTasks(filter = "all") {

    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        if (filter === "completed" && !task.completed)
            return;

        if (filter === "pending" && task.completed)
            return;

        let div = document.createElement("div");
        div.className = "task";

        div.innerHTML = `
            <input type="checkbox"
                ${task.completed ? "checked" : ""}
                onchange="toggleTask(${index})">

            <span class="${task.completed ? "completed" : ""}">
                ${task.text}
            </span>
        `;

        taskList.appendChild(div);
    });

    updateCounts();
}


// Mark task as completed/pending
function toggleTask(index) {

    tasks[index].completed = !tasks[index].completed;

    displayTasks();
}


// Update task counters
function updateCounts() {

    let total = tasks.length;

    let completed = tasks.filter(
        task => task.completed
    ).length;

    let pending = total - completed;

    document.getElementById("total").innerText = total;
    document.getElementById("completed").innerText = completed;
    document.getElementById("pending").innerText = pending;
}


// Filter tasks
function showTasks(filter) {
    displayTasks(filter);
}