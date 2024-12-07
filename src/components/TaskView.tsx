import React, { useEffect, useState } from "react";
import { Task } from "../types/task";
import XIcon from "../assets/icons/XIcon";
import CheckIcon from "../assets/icons/CheckIcon";
import { formatDate } from "../utils/date";
import { useDraggable } from "@dnd-kit/core";
import PriorityControl from "./PriorityControl";
import EditableField from "./EditableField";
import { Button } from "@/components/ui/button";

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
    const pressDuration = Date.now() - (pressStart ?? 0);
    if (pressDuration < 100) {
      onEdit();
    }
  };

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  useEffect(() => {
    setEditedTask(task);
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

        <div className="flex flex-col items-start gap-0.5">
          <EditableField
            value={editedTask.title}
            onChange={(value) =>
              setEditedTask((prev) => ({ ...prev, title: value }))
            }
            isEditing={isEditing}
            size="xl"
          />
          <EditableField
            value={editedTask.subtitle ?? ""}
            onChange={(value) =>
              setEditedTask((prev) => ({ ...prev, subtitle: value }))
            }
            isEditing={isEditing}
            size="m"
          />
        </div>
        <div className="flex justify-between pt-2">
          <PriorityControl
            priority={editedTask.priority || task.priority || "low"}
            isEditing={isEditing}
            onChange={(priority) => {
              setEditedTask((prev) => ({ ...prev, priority }));
            }}
          />

          <div className="flex justify-end gap-1 ">
            {isEditing && (
              <>
                <button
                  onPointerDown={(e) => {
                    e.stopPropagation();
                    onCancelEditing();
                  }}
                  className="px-2 py-1.5 rounded-md bg-red-500 w-8"
                >
                  <XIcon size={16} />
                </button>
                <button
                  onPointerDown={(e) => {
                    e.stopPropagation();
                    handleSubmit();
                  }}
                  className="p-2 py-1.5 rounded-md bg-blue-500 w-8"
                >
                  <CheckIcon size={18} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskView;
