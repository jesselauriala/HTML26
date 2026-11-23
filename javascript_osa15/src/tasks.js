let tasks = [];

export function setTasks(initialTasks) {
  tasks = initialTasks;
}

export function getTasks() {
  return tasks;
}

export function addTask(text) {
  tasks.push({
    id: crypto.randomUUID(),
    text,
    completed: false,
  });
}

export function toggleTask(id) {
  const task = tasks.find((item) => item.id === id);

  if (task) {
    task.completed = !task.completed;
  }
}

export function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
}
