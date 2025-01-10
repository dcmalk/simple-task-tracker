import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Toast from './components/Toast';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface Toast {
  message: string;
  type: 'success' | 'error';
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [toast, setToast] = useState<Toast | null>(null);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleAddTask = (newTask: { title: string; description: string }) => {
    try {
      setTasks(prevTasks => [
        {
          ...newTask,
          id: Date.now(),
          completed: false
        },
        ...prevTasks,
      ]);
      showToast('Task added successfully', 'success');
    } catch (error) {
      showToast('Failed to add task', 'error');
      console.error('Error adding task:', error);
    }
  };

  const handleDeleteTask = (id: number) => {
    try {
      setTasks(prevTasks => {
        const updatedTasks = prevTasks.filter(task => task.id !== id);
        if (updatedTasks.length === prevTasks.length) {
          throw new Error('Task not found');
        }
        return updatedTasks;
      });
      showToast('Task deleted successfully', 'success');
    } catch (error) {
      showToast('Failed to delete task', 'error');
      console.error('Error deleting task:', error);
    }
  };

  const handleToggleComplete = (id: number) => {
    try {
      setTasks(prevTasks => {
        const updatedTasks = prevTasks.map(task =>
          task.id === id ? { ...task, completed: !task.completed } : task
        );
        if (JSON.stringify(updatedTasks) === JSON.stringify(prevTasks)) {
          throw new Error('Task not found');
        }
        return updatedTasks;
      });
      showToast('Task status updated', 'success');
    } catch (error) {
      showToast('Failed to update task', 'error');
      console.error('Error updating task:', error);
    }
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
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default App;
