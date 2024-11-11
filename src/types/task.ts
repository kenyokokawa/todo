export type TaskStatus = "todo" | "in-progress" | "done";

export const Priorities: Priority[] = ["low", "medium", "high"] as const;

export type Priority = "low" | "medium" | "high";

export type Task = {
  id: string;
  title: string;
  subtitle?: string;
  status: TaskStatus;
  priority?: Priority;
  dueDate?: Date;
  createdAt: Date;
  updatedAt?: Date;
  tags?: string[];
};
