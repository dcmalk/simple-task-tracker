import { useState } from "react";

interface TaskFormProps {
  onAddTask: (task: { title: string; description: string }) => void;
}

function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) return alert("Title is required!");
    onAddTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mb-2"
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 mb-2"
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
