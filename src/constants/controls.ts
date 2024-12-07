import { Priority } from "../types/task";

export const PRIORITY_OPTIONS: { label: string; value: Priority }[] = [
  {
    label: "Low",
    value: "low",
  },
  {
    label: "Medium",
    value: "medium",
  },
  {
    label: "High",
    value: "high",
  },
];

export const SORT_OPTIONS = [
  {
    label: "Due Date",
    value: "dueDate",
  },
  {
    label: "Priority",
    value: "priority",
  },
  {
    label: "Created Date",
    value: "createdAt",
  },
];

export const FILTER_OPTIONS = [
  {
    label: "High Priority",
    value: "high",
  },
  {
    label: "Medium Priority",
    value: "medium",
  },
  {
    label: "Low Priority",
    value: "low",
  },
];
