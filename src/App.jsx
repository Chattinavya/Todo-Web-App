import React, { useState } from 'react';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import CompletedList from './Components/CompletedList'; 
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, ...updatedTask } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const markComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: true } : task));
  };

  return (
    <div className="container">
      <h1>📝 To-Do App with Date & Time</h1>
      <TaskForm onAdd={addTask} />
      <TaskList
        tasks={tasks.filter(t => !t.completed)}
        onUpdate={updateTask}
        onDelete={deleteTask}
        onComplete={markComplete}
      />
      <CompletedList tasks={tasks.filter(t => t.completed)} />
    </div>
  );
}

export default App;
