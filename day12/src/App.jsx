import { useEffect, useState } from 'react';

function getSavedTasks() {
  try {
    return JSON.parse(localStorage.getItem('my-tasks')) || [];
  } catch {
    return [];
  }
}

function App() {
  const [tasks, setTasks] = useState(getSavedTasks);
  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    localStorage.setItem('my-tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask(event) {
    event.preventDefault();

    const name = taskName.trim();
    if (!name) return;

    setTasks([...tasks, { id: Date.now(), name, done: false }]);
    setTaskName('');
  }

  function toggleTask(taskId) {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    ));
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <main>
      <h1>My To-Do List</h1>

      <form onSubmit={addTask}>
        <label htmlFor="task-input">What do you need to do?</label>{' '}
        <input
          id="task-input"
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
          required
        />{' '}
        <button type="submit">Add task</button>
      </form>

      {tasks.length === 0 ? (
        <p>No tasks yet. Add one above.</p>
      ) : (
        <ul aria-label="Your tasks">
          {tasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
                aria-label={`Mark ${task.name} as complete`}
              />{' '}
              {task.done ? <del>{task.name}</del> : task.name}{' '}
              <button type="button" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;