document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');


    addTaskBtn.addEventListener('click', () => {
      const taskText = taskInput.value.trim();

      if (taskText === '') {
        alert('Please enter a task!');
        return;
      }

      const newTask = document.createElement('li');
      newTask.className = 'task-item bg-violet-100 text-violet-700 px-4 py-2 rounded flex justify-between items-center';

      newTask.innerHTML = `
        <div class="flex items-center space-x-2">
          <input type="checkbox" class="checkbox">
          <span>${taskText}</span>
        </div>
        <button class="text-red-500 hover:underline" onclick="this.parentElement.remove()">Remove Task</button>
      `;

      taskList.appendChild(newTask);

      taskInput.value = '';
    });

    taskList.addEventListener("change", function (event) {
      if (event.target.type === "checkbox") {
        const taskText = event.target.nextElementSibling;
  
        if (event.target.checked) {
          taskText.classList.add("line-through", "text-gray-500"); 
        } else {
          taskText.classList.remove("line-through", "text-gray-500"); 
        }
      }
    });
  });
  

  const toggleButtons = document.querySelectorAll('.toggle-button');
  const toggleContents = document.querySelectorAll('.toggle-content');

  toggleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      toggleContents[index].classList.toggle('open');

    });
  });

  function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => addTask(task.text, task.completed, task.tag, task.tagColor));
  }

  function saveTasks() {
    const tasks = [];
    document.querySelectorAll(".task-item").forEach(taskItem => {
      tasks.push({
        text: taskItem.querySelector(".task-text").textContent,
        completed: taskItem.querySelector("input[type='checkbox']").checked,
        tag: taskItem.querySelector(".tag-display").textContent,
        tagColor: taskItem.querySelector(".tag-display").classList[3] || ""
      });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
