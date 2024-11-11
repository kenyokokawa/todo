import React from "react";
import { useUIContext } from "../contexts/UIContext";
import SettingsIcon from "../assets/icons/SettingsIcon";

const SORT_OPTIONS = [
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



const FILTER_OPTIONS = [
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

const TaskControls: React.FC = () => {
  const { sortBy, setSortBy, filterBy, setFilterBy, setIsSettingsModalOpen } =
    useUIContext();

  return (
    <div className="bg-emerald-300 rounded-xl p-2 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 gap-2">
      <div className="flex flex-wrap gap-4">
        <select
          id="sort-select"
          className="bg-white rounded-md px-1 py-1 w-full sm:w-auto flex-grow"
          value={sortBy}
          onChange={(e) =>
            setSortBy(
              e.target.value as "dueDate" | "priority" | "createdAt" | ""
            )
          }
        >
          <option value="">Sort by</option>
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <select
          id="filter-select"
          className="bg-white rounded-md px-1 py-1 w-full sm:w-auto flex-grow"
          value={filterBy}
          onChange={(e) =>
            setFilterBy(e.target.value as "high" | "medium" | "low" | "")
          }
        >
          <option value="">Filter by</option>
          {FILTER_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {/* <button
        className="bg-blue-500 text-white  p-1.5 rounded-lg w-auto"
        onClick={() => setIsSettingsModalOpen(true)}
      >
        <SettingsIcon size={24} />
      </button> */}
    </div>
  );
};

export default TaskControls;
