// Function to set the minimum date for the due date input
function setMinDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = today.getFullYear();
    const minDate = `${year}-${month}-${day}`;

    document.getElementById('dueDate').setAttribute('min', minDate);
}

// Initialize the minimum date when the page loads
window.onload = function() {
    setMinDate();
};

// Task constructor function
function Task(description, dueDate) {
    this.description = description;
    this.dueDate = dueDate;
}

// Method to display task information
Task.prototype.displayTask = function() {
    return `${this.description} (Due: ${this.dueDate})`;
};

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

    if (new Date(dueDate) < new Date()) {
        alert('Please select a future date.');
        return;
    }

    addTask(description, dueDate);

    // Clear the form
    document.getElementById('taskForm').reset();
});
