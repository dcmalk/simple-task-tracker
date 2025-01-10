import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (newTask: { title: string; description: string }) => {
    setTasks(prevTasks => [
      ...prevTasks,
      {
        ...newTask,
        id: Date.now(),
        completed: false
      }
    ]);
  };

  const handleDeleteTask = (id: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const handleToggleComplete = (id: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="max-w-2xl mx-auto px-2 sm:px-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-center text-gray-800">
          Task Manager
        </h1>
        <div className="bg-white rounded-lg shadow-md">
          <TaskForm onAddTask={handleAddTask} />
          <TaskList
            tasks={tasks}
            onDelete={handleDeleteTask}
            onToggleComplete={handleToggleComplete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
