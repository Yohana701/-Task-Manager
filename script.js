// Task constructor function
function Task(description, dueDate) {
    this.description = description;
    this.dueDate = dueDate;
}

// Method to display task information
Task.prototype.displayTask = function() {
    return `${this.description} (Due: ${this.dueDate})`;
};

// Closure to manage private properties
function createTask(description, dueDate) {
    let _description = description;
    let _dueDate = dueDate;

    return {
        get description() {
            return _description;
        },
        get dueDate() {
            return _dueDate;
        },
        displayTask() {
            return `${_description} (Due: ${_dueDate})`;
        }
    };
}

// Array to store tasks
const tasks = [];

// Function to add a task to the list
function addTask(description, dueDate) {
    const task = new Task(description, dueDate);
    tasks.push(task);
    displayTasks();
}

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.textContent = task.displayTask();
        taskList.appendChild(taskItem);
    });
}

// Event listener for form submission
document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const description = document.getElementById('taskDescription').value;
    const dueDate = document.getElementById('dueDate').value;

    addTask(description, dueDate);

    // Clear the form
    document.getElementById('taskForm').reset();
});
