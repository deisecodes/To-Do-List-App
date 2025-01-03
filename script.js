document.addEventListener('DOMContentLoaded', () => {
    // Select the button, input, and task list
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');


    addTaskBtn.addEventListener('click', () => {
      // Get the task text from the input field
      const taskText = taskInput.value.trim();

      // Check if the input is empty
      if (taskText === '') {
        alert('Please enter a task!');
        return;
      }

      // Create a new task item
      const newTask = document.createElement('li');
      newTask.className = 'task-item bg-violet-100 text-violet-700 px-4 py-2 rounded flex justify-between items-center';

      // Add task content
      newTask.innerHTML = `
        <div class="flex items-center space-x-2">
          <input type="checkbox" class="checkbox">
          <span>${taskText}</span>
        </div>
        <button class="text-red-500 hover:underline" onclick="this.parentElement.remove()">Remove Task </button>
      `;

      // Append the new task to the task list
      taskList.appendChild(newTask);

      // Clear the input field
      taskInput.value = '';
    });

    // Event listener for marking tasks as completed
    taskList.addEventListener('change', (event) => {
      if (event.target.classList.contains('checkbox')) {
        const taskText = event.target.nextElementSibling;
        if (event.target.checked) {
          taskText.classList.add('completed');
        } else {
          return
        }
      }
    });
  });