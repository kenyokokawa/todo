import { useDroppable } from "@dnd-kit/core";
import { FC, useMemo } from "react";
import { useTaskContext } from "../contexts/TaskContext";
import TaskView from "./TaskView";
import { TaskStatus } from "../types/task";

type ColumnProps = {
  status: TaskStatus;
};

const Column: FC<ColumnProps> = ({ status }) => {
  const { tasks, editingTaskId, updateTask, startEditing, stopEditing } =
    useTaskContext();

  const tasksInColumn = useMemo(() => {
    return tasks.filter((task) => task.status === status);
  }, [tasks, status]);

  const { isOver, setNodeRef } = useDroppable({
    id: status,
  });
  const className = `flex flex-col gap-4 min-h-40 rounded-xl ${
    isOver ? "border-dashed border-4 border-sky-500 p-2" : "bg-stone-50 p-3"
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
