document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
  const inputField = document.getElementById('todo-input');
  const taskText = inputField.value.trim();

  if (taskText !== '') {
    const todoList = document.getElementById('todo-list');

    // Create task element
    const newTask = document.createElement('div');
    newTask.classList.add('addedtasks');

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    newTask.appendChild(taskContent);

    const updateButton = document.createElement('button');
    updateButton.classList.add('addedtasksbtn');
    updateButton.textContent = "<";
    newTask.appendChild(updateButton);

    const editButton = document.createElement('button');
    editButton.classList.add('edittext');
    const editIcon = document.createElement('img');
    editIcon.src = "https://cdn-icons-png.flaticon.com/128/2740/2740651.png";
    editButton.appendChild(editIcon);
    editButton.style.display = 'none';
    newTask.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deletetext');
    const deleteIcon = document.createElement('img');
    deleteIcon.src = "https://cdn-icons-png.flaticon.com/128/2907/2907762.png";
    deleteButton.appendChild(deleteIcon);
    deleteButton.style.display = 'none';
    newTask.appendChild(deleteButton);

    // Add event listeners
    updateButton.addEventListener('click', function () {
      const isHidden = editButton.style.display === 'none';
      editButton.style.display = isHidden ? 'inline-block' : 'none';
      deleteButton.style.display = isHidden ? 'inline-block' : 'none';
      updateButton.textContent = isHidden ? ">" : "<";
    });

    deleteButton.addEventListener('click', function () {
      todoList.removeChild(newTask); // Remove the task item from the list
      removeTaskFromStorage(taskText); // Remove task from local storage
    });

    editButton.addEventListener('click', function () {
      const newTaskText = prompt("Edit your task:", taskContent.textContent);
      if (newTaskText !== null) {
        updateTaskInStorage(taskContent.textContent, newTaskText.trim() || taskContent.textContent); // Update task in local storage
        taskContent.textContent = newTaskText.trim() || taskContent.textContent;
      }
    });

    // Append task to list and save to local storage
    todoList.appendChild(newTask);
    saveTaskToStorage(taskText);

    // Clear input field
    inputField.value = '';
  } else {
    alert("Please enter a task!");
  }
}

// Local storage functions
function saveTaskToStorage(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => displayTask(task));
}

function displayTask(taskText) {
  const todoList = document.getElementById('todo-list');

  const newTask = document.createElement('div');
  newTask.classList.add('addedtasks');

  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;
  newTask.appendChild(taskContent);

  const updateButton = document.createElement('button');
  updateButton.classList.add('addedtasksbtn');
  updateButton.textContent = "<";
  newTask.appendChild(updateButton);

  const editButton = document.createElement('button');
  editButton.classList.add('edittext');
  const editIcon = document.createElement('img');
  editIcon.src = "https://cdn-icons-png.flaticon.com/128/2740/2740651.png";
  editButton.appendChild(editIcon);
  editButton.style.display = 'none';
  newTask.appendChild(editButton);

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('deletetext');
  const deleteIcon = document.createElement('img');
  deleteIcon.src = "https://cdn-icons-png.flaticon.com/128/2907/2907762.png";
  deleteButton.appendChild(deleteIcon);
  deleteButton.style.display = 'none';
  newTask.appendChild(deleteButton);

  // Add event listeners
  updateButton.addEventListener('click', function () {
    const isHidden = editButton.style.display === 'none';
    editButton.style.display = isHidden ? 'inline-block' : 'none';
    deleteButton.style.display = isHidden ? 'inline-block' : 'none';
    updateButton.textContent = isHidden ? ">" : "<";
  });

  deleteButton.addEventListener('click', function () {
    todoList.removeChild(newTask); // Remove the task item from the list
    removeTaskFromStorage(taskText); // Remove task from local storage
  });

  editButton.addEventListener('click', function () {
    const newTaskText = prompt("Edit your task:", taskContent.textContent);
    if (newTaskText !== null) {
      updateTaskInStorage(taskContent.textContent, newTaskText.trim() || taskContent.textContent); // Update task in local storage
      taskContent.textContent = newTaskText.trim() || taskContent.textContent;
    }
  });

  // Append task to the list
  todoList.appendChild(newTask);
}

function removeTaskFromStorage(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(t => t !== task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateTaskInStorage(oldTask, newTask) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const index = tasks.indexOf(oldTask);
  if (index !== -1) {
    tasks[index] = newTask;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
