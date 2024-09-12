import React, { useEffect, useState } from "react";
import { Task } from "../types/task";
import XIcon from "../assets/icons/XIcon";
import CheckIcon from "../assets/icons/CheckIcon";
import { formatDate } from "../utils/date";
import { useDraggable } from "@dnd-kit/core";

interface TaskViewProps {
  task: Task;
  onEdit: () => void;
  isEditing: boolean;
  onSave: (t: Task) => void;
  onCancelEditing: () => void;
}

const TaskView: React.FC<TaskViewProps> = ({
  task,
  onEdit,
  isEditing,
  onSave,
  onCancelEditing,
}) => {
  const [editedTask, setEditedTask] = useState<Task>(task);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
    disabled: isEditing,
  });

  const [pressStart, setPressStart] = useState<number | null>(null);

  const handlePointerDown = () => {
    setPressStart(Date.now());
  };

  const handlePointerUp = () => {
    const pressDuration = Date.now() - pressStart;
    if (pressDuration < 100) {
      console.log("editing!");
      onEdit();
    }
  };

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  useEffect(() => {
    if (isEditing) {
      setEditedTask(task);
    }
  }, [isEditing]);

  const handleSubmit = () => {
    onSave(editedTask);
  };

  return (
    <div onPointerDown={handlePointerDown} onPointerUp={handlePointerUp}>
      <div
        className="w-100 rounded-xl p-4 bg-white brand-shadow "
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
      >
        {
          <p className="text-sm text-left m-[9px] text-neutral-400">
            {formatDate(task.createdAt)}
          </p>
        }
        {isEditing ? (
          <form onSubmit={handleSubmit} className="w-full flex">
            <div className="flex flex-col items-start">
              <input
                type="text"
                value={editedTask.title}
                onChange={(e) =>
                  setEditedTask((prev) => ({ ...prev, title: e.target.value }))
                }
                className="text-xl font-bold text-left border  focus:outline-none py-0.5 px-2"
              />
              <input
                type="text"
                value={editedTask.subtitle}
                onChange={(e) =>
                  setEditedTask((prev) => ({
                    ...prev,
                    subtitle: e.target.value,
                  }))
                }
                placeholder="Add notes"
                className="text-m text-left border focus:outline-none  py-0.5 px-2 w-full"
              />
            </div>
            <input type="submit" style={{ display: "none" }} />
          </form>
        ) : (
          <>
            <h2 className="text-xl font-bold text-left m-[9px]">
              {task.title}
            </h2>
            <p className="text-m text-left m-[9px]">
              {task.subtitle || <br />}
            </p>
          </>
        )}
        <div className="flex justify-end gap-1 h-6.5">
          {isEditing && (
            <>
              <button
                onPointerDown={(e) => {
                  e.stopPropagation();
                  onCancelEditing();
                }}
                className="p-1 rounded-md bg-red-500"
              >
                <XIcon size={16} />
              </button>
              <button
                onPointerDown={(e) => {
                  e.stopPropagation();
                  handleSubmit();
                }}
                className="p-1 rounded-md bg-blue-500"
              >
                <CheckIcon size={18} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskView;
