import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  getFromLocalStorage,
  LocalStorageKeys,
  saveToLocalStorage,
} from "../utils/localStorage";
import { Priority } from "../types/task";

export type Task = {
  id: string;
  title: string;
  subtitle?: string;
  status: "todo" | "in-progress" | "done";
  priority?: Priority;
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
  const [tasks, setTasks] = useState<Task[]>(() => {
    const tasksJson = getFromLocalStorage(LocalStorageKeys.TASKS) as Task[];
    return tasksJson.map((task) => ({
      ...task,
      dueDate: task.dueDate ? new Date(task.dueDate) : undefined,
      createdAt: new Date(task.createdAt || new Date()),
      updatedAt: task.updatedAt ? new Date(task.updatedAt) : undefined,
    }));
  });
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);

  useEffect(() => {
    saveToLocalStorage(tasks, LocalStorageKeys.TASKS);
  }, [tasks]);

  const addTask = (task: Task) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks, task];
      return newTasks;
    });
  };

  const updateTask = (updatedTask: Task) => {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
      return newTasks;
    });
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

// eslint-disable-next-line react-refresh/only-export-components
export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
