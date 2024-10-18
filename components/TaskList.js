// components/TaskList.js

"use client"; // Is line ko add karein

import TaskForm from './TaskForm'; // Ensure path is correct
import { useEffect } from 'react';

const TaskList = ({ tasks, setTasks }) => {
  
  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleEditTask = (id, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? updatedTask : task))
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleToggleCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const sortedTasks = tasks.sort((a, b) => {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <div>
      <h2>Add a New Task</h2>
      <TaskForm onAddTask={handleAddTask} />
      <h2>Task List</h2>
      <ul>
        {sortedTasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : (task.priority === 'high' ? 'task-high' : (task.priority === 'medium' ? 'task-medium' : 'task-low'))}>
            <h3>{task.title} ({task.priority})</h3>
            <p>{task.description}</p>
            <button onClick={() => handleToggleCompletion(task.id)}>
              {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
            </button>
            <button onClick={() => handleEditTask(task.id, { ...task, title: 'Updated Task' })}>
              Edit
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
