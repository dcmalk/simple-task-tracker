interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

function TaskItem({ task, onDelete, onToggleComplete }: TaskItemProps) {
  return (
    <div className={`border p-4 mb-2 rounded ${task.completed ? 'bg-gray-100' : 'bg-white'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
            className="h-5 w-5"
          />
          <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-500' : ''}`}>
            {task.title}
          </h3>
        </div>
        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
      {task.description && (
        <p className={`mt-2 text-gray-600 ${task.completed ? 'line-through' : ''}`}>
          {task.description}
        </p>
      )}
    </div>
  );
}

export default TaskItem; 