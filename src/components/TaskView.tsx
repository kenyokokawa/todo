import React, { useEffect, useState } from "react";
import { Task } from "../types/task";
import XIcon from "../assets/icons/XIcon";
import CheckIcon from "../assets/icons/CheckIcon";
import { formatDate } from "../utils/date";

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
  useEffect(() => {
    if (isEditing) {
      setEditedTask(task);
    }
  }, [isEditing]);

  const handleSubmit = () => {
    onSave(editedTask);
  };
  return (
    <div className="w-100 rounded-xl p-4 bg-white brand-shadow " onClick={onEdit}>
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
                setEditedTask((prev) => ({ ...prev, subtitle: e.target.value }))
              }
              placeholder="Add notes"
              className="text-m text-left border focus:outline-none  py-0.5 px-2 w-full"
            />
          </div>
          <input type="submit" style={{ display: "none" }} />
        </form>
      ) : (
        <>
          <h2 className="text-xl font-bold text-left m-[9px]">{task.title}</h2>
          <p className="text-m text-left m-[9px]">{task.subtitle || <br />}</p>
        </>
      )}
      <div className="flex justify-end gap-1 h-6.5">
        {isEditing && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCancelEditing();
              }}
              className="p-1 rounded-md bg-red-500"
            >
              <XIcon size={16} />
            </button>
            <button
              onClick={(e) => {
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
  );
};

export default TaskView;
