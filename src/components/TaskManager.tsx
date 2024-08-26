import React, { useState } from "react";
import NewTask from "./NewTask";
import TaskView from "./TaskView";
import ColumnLabel from "./ColumnLabel";

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
    <div className="flex flex-col gap-4">
      <NewTask onAddTask={addTask} />
      <ColumnLabel label="To do " color="green-500" />
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
  );
};

export default TaskManager;
