import React from "react";
import {
  LowPriorityIcon,
  MediumPriorityIcon,
  HighPriorityIcon,
} from "../assets/icons/PriorityIcons";
import { Priority } from "../types/task";

const PriorityButton = ({ priority }: { priority: Priority }) => {
  const priorityIcon = {
    low: LowPriorityIcon,
    medium: MediumPriorityIcon,
    high: HighPriorityIcon,
  };
  return (
    <div className="p-1 rounded-md bg-gray-200">
      {priorityIcon[priority]({ size: 24 })}
    </div>
  );
};

export default PriorityButton;
