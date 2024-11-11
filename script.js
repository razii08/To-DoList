function addTask() {
    const inputField = document.getElementById('todo-input');
    const taskText = inputField.value.trim();
  
    if (taskText !== '') {
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
  
      const todoList = document.getElementById('todo-list');
      todoList.appendChild(newTask);
  
        updateButton.addEventListener('click', function () {
        const isHidden = editButton.style.display === 'none';
        editButton.style.display = isHidden ? 'inline-block' : 'none';
         deleteButton.style.display = isHidden ? 'inline-block' : 'none';
        updation.textContent = isHidden ? ">" : "<";
      });
  
      deleteButton.addEventListener('click', function () {
        todoList.removeChild(newTask); // Remove the task item from the list
      });
  
      editButton.addEventListener('click', function () {
        const newTaskText = prompt("Edit your task:", taskContent.textContent);
        if (newTaskText !== null) {
          taskContent.textContent = newTaskText.trim() || taskContent.textContent;
        }
      });
  
      inputField.value = '';
    } else {
      alert("Please enter a task!");
    }
  }
  