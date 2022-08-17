// Set Variables
const form = document.querySelector("#input-form");
const taskItems = document.querySelector(".task-items");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task-input");

// DOM Load event - Get tasks from Ls
document.addEventListener("DOMContentLoaded", () => {
  let tasks;
  if (!localStorage.getItem("tasks")) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  // For each task
  tasks.forEach((task) => {
    // Create li element
    const li = document.createElement("li");
    // Add class
    li.className = "task-item";
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement("a");
    // Add class
    link.className = "delete-item";
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append li to ul
    taskItems.appendChild(li);
  });
});

// Add task event
form.addEventListener("submit", (e) => {
  if (taskInput.value === "") {
    alert("Please insert a task");
  } else {
    // Create li element
    const li = document.createElement("li");
    // Add class
    li.className = "task-item";
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement("a");
    // Add class
    link.className = "delete-item";
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append li to ul
    taskItems.appendChild(li);
    // Store in LS
    if (localStorage.getItem("tasks") === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(taskInput.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // Clear input
    taskInput.value = "";
    e.preventDefault();
  }
});

// Remove task event
taskItems.addEventListener("click", (e) => {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Delete this item?")) {
      e.target.parentElement.parentElement.remove();
      // Remove from LS
      if (localStorage.getItem("tasks") === null) {
        tasks = [];
      } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
      }

      tasks.forEach(function (task, index) {
        if (e.target.parentElement.parentElement.textContent === task) {
          tasks.splice(index, 1);
        }
      });

      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }
});

// Clear task event
clearBtn.addEventListener("click", () => {
  if (confirm("Clear the list?")) {
    taskItems.innerHTML = "";
    // Clear from LS
    localStorage.clear();
  }
});

// Filter tasks event
filter.addEventListener("keyup", (e) => {
  const text = filter.value.toLowerCase();
  document.querySelectorAll(".task-item").forEach((task) => {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
});
