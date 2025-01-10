import { useState } from "react";

interface TaskFormProps {
  onAddTask: (task: { title: string; description: string }) => void;
}

function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState("");

  const validateForm = () => {
    let isValid = true;
    setTitleError("");

    if (!title.trim()) {
      setTitleError("Title is required");
      isValid = false;
    } else if (title.trim().length > 100) {
      setTitleError("Title must be less than 100 characters");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      onAddTask({ 
        title: title.trim(), 
        description: description.trim() 
      });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 sm:p-6 border-b border-gray-200">
      <div className="space-y-3 sm:space-y-4">
        <div>
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (titleError) setTitleError("");
            }}
            className={`w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              titleError ? 'border-red-500' : 'border-gray-300'
            }`}
            aria-invalid={!!titleError}
            aria-describedby={titleError ? "title-error" : undefined}
          />
          {titleError && (
            <p id="title-error" className="mt-1 text-xs text-red-500">
              {titleError}
            </p>
          )}
        </div>
        <div>
          <textarea
            placeholder="Task Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-20 sm:h-24 resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 sm:py-2.5 text-sm sm:text-base bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
