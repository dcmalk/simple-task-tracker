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
    <div className={`p-3 sm:p-4 transition-colors duration-200 ${task.completed ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="flex items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-start sm:items-center gap-2 sm:gap-3 flex-1">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
            className="mt-1 sm:mt-0 w-4 h-4 sm:w-5 sm:h-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500 cursor-pointer"
          />
          <div className="flex-1 min-w-0">
            <h3 className={`text-base sm:text-lg font-medium break-words ${
              task.completed ? 'line-through text-gray-400' : 'text-gray-900'
            }`}>
              {task.title}
            </h3>
            {task.description && (
              <p className={`mt-0.5 sm:mt-1 text-xs sm:text-sm break-words ${
                task.completed ? 'line-through text-gray-400' : 'text-gray-600'
              }`}>
                {task.description}
              </p>
            )}
          </div>
        </div>
        <button
          onClick={() => onDelete(task.id)}
          className="shrink-0 inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem; 