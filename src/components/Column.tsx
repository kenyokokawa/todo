import { useDroppable } from "@dnd-kit/core";
import { FC, useMemo } from "react";
import { useTaskContext } from "../contexts/TaskContext";
import { useUIContext } from "../contexts/UIContext";
import TaskView from "./TaskView";
import { TaskStatus } from "../types/task";

type ColumnProps = {
  status: TaskStatus;
};

const Column: FC<ColumnProps> = ({ status }) => {
  const { tasks, editingTaskId, updateTask, startEditing, stopEditing } =
    useTaskContext();
  const { sortBy, filterBy } = useUIContext();

  const tasksInColumn = useMemo(() => {
    let filteredTasks = tasks.filter((task) => task.status === status);

    if (filterBy) {
      filteredTasks = filteredTasks.filter(
        (task) => task.priority === filterBy
      );
    }

    if (sortBy) {
      filteredTasks.sort((a, b) => {
        if (sortBy === "dueDate") {
          return (
            new Date(a.dueDate ?? 0).getTime() -
            new Date(b.dueDate ?? 0).getTime()
          );
        }
        if (sortBy === "priority") {
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          const priorityA = priorityOrder[a.priority ?? "low"];
          const priorityB = priorityOrder[b.priority ?? "low"];
          return priorityB - priorityA;
        }
        if (sortBy === "createdAt") {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        }
        return 0;
      });
    }

    return filteredTasks;
  }, [tasks, status, sortBy, filterBy]);

  const { isOver, setNodeRef } = useDroppable({
    id: status,
  });
  const className = `flex flex-col gap-4 min-h-40 rounded-xl  ${
    isOver ? "border-dashed border-4 border-sky-500 p-2" : "bg-stone-100 p-3"
  }`;

  return (
    <div ref={setNodeRef} className={className}>
      {tasksInColumn.map((task) => {
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

export default Column;
