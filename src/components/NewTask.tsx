import React, { useState } from "react";
import PlusIcon from "../assets/icons/PlusIcon";
import { Task } from "../contexts/TaskContext";

interface NewTaskProps {
  onAddTask: (task: Task) => void;
}

const NewTask: React.FC<NewTaskProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") return;

    const newTask: Task = {
      id: new Date().toISOString(),
      title,
      status: "todo",
      createdAt: new Date(),
    };

    onAddTask(newTask);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col justify-center"
    >
      <div className="w-full flex items-center h-max border-2 border-blue-400 rounded-xl overflow-hidden brand-shadow">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Make a new task"
          className="flex-grow p-2 pl-4 outline-none"
        />
        {title && (
          <button
            type="submit"
            className="bg-blue-500 text-white p-1.5 mr-1.5 rounded-lg "
          >
            <PlusIcon size={18} />
          </button>
        )}
      </div>
    </form>
  );
};

export default NewTask;
