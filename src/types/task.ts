export type TaskStatus = "todo" | "in-progress" | "done";

export type Task = {
  id: string;
  title: string;
  subtitle?: string;
  status: TaskStatus;
  priority?: "low" | "medium" | "high";
  dueDate?: Date;
  createdAt: Date;
  updatedAt?: Date;
  tags?: string[];
};
