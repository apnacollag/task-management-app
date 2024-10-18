// app/page.js

"use client"; // Is line ko add karein, ye file client component hai

import TaskList from '../components/TaskList';
import { useEffect, useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  // Initial tasks ko load karne ke liye
  useEffect(() => {
    const initialTasks = [
      { id: 1, title: 'Task 1', description: 'Description for Task 1', priority: 'high', completed: false },
      { id: 2, title: 'Task 2', description: 'Description for Task 2', priority: 'medium', completed: false },
      { id: 3, title: 'Task 3', description: 'Description for Task 3', priority: 'low', completed: true },
    ];
    setTasks(initialTasks);
  }, []);

  return (
    <main>
      <h1>Task Management App</h1>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </main>
  );
}
