import TaskItem from './TaskItem';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

function TaskList({ tasks, onDelete, onToggleComplete }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="p-4 sm:p-6 text-center text-sm sm:text-base text-gray-500">
        No tasks available. Add some tasks to get started!
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-200">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
}

export default TaskList; 