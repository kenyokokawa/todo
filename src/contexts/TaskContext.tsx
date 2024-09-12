import React, { createContext, useContext, useState, ReactNode } from "react";

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

type TaskContextType = {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (updatedTask: Task) => void;
  editingTaskId: string | null;
  startEditing: (taskId: string) => void;
  stopEditing: () => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
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
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        editingTaskId,
        startEditing,
        stopEditing,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
