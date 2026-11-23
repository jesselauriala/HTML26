// main.js
// Kaikki sovelluksen toiminnallisuus samassa tiedostossa

const STORAGE_KEY = "todo-tasks";

let tasks = [];

// Tehtävien lataaminen localStoragesta
function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    tasks = saved ? JSON.parse(saved) : [];

    if (!Array.isArray(tasks)) {
      tasks = [];
    }
  } catch (error) {
    console.error("Lataus epäonnistui:", error);
    tasks = [];
  }
}

// Tehtävien tallentaminen localStorageen
function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Uuden tehtävän lisääminen
function addTask(text) {
  const task = {
    id: crypto.randomUUID(),
    text: text,
    completed: false,
  };

  tasks.push(task);
  saveTasks();
}

// Tehtävän tilan vaihtaminen
function toggleTask(id) {
  const task = tasks.find((task) => task.id === id);

  if (task) {
    task.completed = !task.completed;
    saveTasks();
  }
}

// Tehtävän poistaminen
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
}

// Tehtävien näyttäminen HTML-sivulla
function renderTasks() {
  const list = document.getElementById("task-list");
  const count = document.getElementById("task-count");

  list.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    checkbox.addEventListener("change", () => {
      toggleTask(task.id);
      renderTasks();
    });

    const span = document.createElement("span");
    span.textContent = task.text;

    if (task.completed) {
      span.style.textDecoration = "line-through";
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Poista";

    deleteButton.addEventListener("click", () => {
      deleteTask(task.id);
      renderTasks();
    });

    li.append(checkbox, span, deleteButton);
    list.appendChild(li);
  });

  const completed = tasks.filter((task) => task.completed).length;

  count.textContent = `Tehtäviä ${tasks.length}, valmiita ${completed}`;
}

// Sovelluksen käynnistys
function init() {
  loadTasks();
  renderTasks();

  const form = document.getElementById("task-form");
  const input = document.getElementById("task-input");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = input.value.trim();

    if (text === "") {
      return;
    }

    addTask(text);
    renderTasks();

    input.value = "";
    input.focus();
  });
}

init();
