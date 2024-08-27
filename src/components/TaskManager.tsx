import React, { useState } from "react";
import NewTask from "./NewTask";
import TaskView from "./TaskView";
import ColumnLabel from "./ColumnLabel";
import Logo from "./Logo";

export type Task = {
  id: string;
  title: string;
  subtitle?: string;
  status: "todo" | "in-progress" | "done";
  priority?: "low" | "medium" | "high";
  dueDate?: Date;
  createdAt: Date;
  updatedAt?: Date;
  tags?: string[];
};

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask: Task) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const startEditing = (taskId: string) => {
    setEditingTaskId(taskId);
  };

  const stopEditing = () => {
    setEditingTaskId(null);
  };

  return (
    <>
      <NewTask onAddTask={addTask} />
      <Logo />
      <div className="bg-green-200 rounded-xl "></div>
      <ColumnLabel label="To do" backgroundColor="bg-green-500" />
      <ColumnLabel label="In progress" backgroundColor="bg-yellow-500" />
      <ColumnLabel label="Done!" backgroundColor="bg-blue-500" />
      <div className="flex flex-col gap-4 bg-stone-50 rounded-xl p-3">
        {tasks.map((task) => {
          const isEditing = editingTaskId === task.id;
          return (
            <TaskView
              key={task.id}
              task={task}
              onEdit={() => startEditing(task.id)}
              isEditing={isEditing}
              onSave={(t) => {
                updateTask(t);
                stopEditing();
              }}
              onCancelEditing={() => stopEditing()}
            />
          );
        })}
      </div>
      <div className="min-h-36 border-dashed border-4 border-sky-500 rounded-xl"></div>
      <div className="bg-stone-50  rounded-xl"></div>
    </>
  );
};

export default TaskManager;
