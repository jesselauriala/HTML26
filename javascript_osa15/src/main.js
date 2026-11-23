import {
  addTask,
  deleteTask,
  getTasks,
  setTasks,
  toggleTask,
} from "./tasks.js";
import { loadTasks, saveTasks } from "./storage.js";
import { renderTasks } from "./taskView.js";

function refreshTasks() {
  renderTasks(getTasks(), handleToggle, handleDelete);
}

function handleToggle(id) {
  toggleTask(id);
  saveTasks(getTasks());
  refreshTasks();
}

function handleDelete(id) {
  deleteTask(id);
  saveTasks(getTasks());
  refreshTasks();
}

function init() {
  setTasks(loadTasks());
  refreshTasks();

  const form = document.getElementById("task-form");
  const input = document.getElementById("task-input");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = input.value.trim();

    if (text === "") {
      return;
    }

    addTask(text);
    saveTasks(getTasks());
    refreshTasks();

    input.value = "";
    input.focus();
  });
}

document.addEventListener("DOMContentLoaded", init);
