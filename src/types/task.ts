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
