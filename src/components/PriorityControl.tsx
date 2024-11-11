import React, { useEffect, useState } from "react";
import { Priority } from "../types/task";
import PriorityButton from "./PriorityButton";

type PriorityControlProps = {
  priority: Priority;
  isEditing: boolean;
  onChange: (priority: Priority) => void;
};

const PriorityControl = ({
  priority,
  isEditing,
  onChange,
}: PriorityControlProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsExpanded(false);
  }, [isEditing]);

  const onEdit = () => {
    if (isEditing && !isExpanded) {
      setIsExpanded(true);
    }
  };

  const onUpdate = (priority: Priority) => {
    setIsExpanded(false);
    onChange(priority);
  };

  const priorityOptions: Priority[] = ["low", "medium", "high"];

  return (
    <div className="flex items-center" onClick={onEdit}>
      {isExpanded ? (
        <div className="flex gap-1">
          {priorityOptions.map((option) => (
            <div onClick={() => onUpdate(option)}>
              <PriorityButton priority={option} />
            </div>
          ))}
        </div>
      ) : (
        <>
          <PriorityButton priority={priority} />
        </>
      )}
    </div>
  );
};

export default PriorityControl;
