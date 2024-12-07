import React from "react";
import { useUIContext } from "../contexts/UIContext";
import SettingsIcon from "../assets/icons/SettingsIcon";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Priority } from "@/types/task";
import PriorityButton from "./PriorityButton";
import {
  SORT_OPTIONS,
  FILTER_OPTIONS,
  PRIORITY_OPTIONS,
} from "@/constants/controls";
import { Button } from "./ui/button";
import XIcon from "@/assets/icons/XIcon";

const TaskControls: React.FC = () => {
  const {
    sortBy,
    setSortBy,
    filterBy,
    setFilterBy,
    defaultPriority,
    setDefaultPriority,
  } = useUIContext();

  return (
    <div className="bg-emerald-300 rounded-xl p-2 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 gap-4">
      <div className="flex gap-2 flex-grow">
        <div className="flex gap-1 flex-grow items-center">
          <Select
            value={sortBy}
            onValueChange={(value) =>
              setSortBy(value as "dueDate" | "priority" | "createdAt" | "")
            }
          >
            <SelectTrigger id="sort-select">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sort by</SelectLabel>
                {SORT_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {sortBy && (
            <div
              onClick={() => setSortBy("")}
              className="bg-red-500 text-white  p-2 rounded-md w-auto flex items-center justify-center"
            >
              <XIcon size={10} />
            </div>
          )}
        </div>

        <div className="flex gap-2 flex-grow">
          <div className="flex gap-1 flex-grow items-center">
            <Select
              value={filterBy}
              onValueChange={(value) =>
                setFilterBy(value as "high" | "medium" | "low")
              }
            >
              <SelectTrigger id="filter-select">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Filter by</SelectLabel>
                  {FILTER_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {filterBy && (
              <div
                onClick={() => setFilterBy("")}
                className="bg-red-500 text-white  p-2 rounded-md w-auto flex items-center justify-center"
              >
                <XIcon size={10} />
              </div>
            )}
          </div>
        </div>
      </div>

      <Dialog>
        <DialogTrigger className="bg-blue-500 text-white  p-1 rounded-lg w-auto">
          <SettingsIcon size={24} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
          </DialogHeader>
          <div className="flex flex-row gap-2 justify-between items-center">
            <p>New Task Default Priority</p>
            <div className="flex flex-row gap-2 items-center">
              <PriorityButton priority={defaultPriority} />

              <Select
                value={defaultPriority}
                onValueChange={(value) => setDefaultPriority(value as Priority)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Priorities</SelectLabel>
                    {PRIORITY_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TaskControls;
