import React, { createContext, useContext, useState, ReactNode } from "react";
import { Priority } from "../types/task";

type SortBy = "dueDate" | "priority" | "createdAt" | "";
type FilterBy = Priority | "";

interface UIContextType {
  sortBy: SortBy;
  setSortBy: (value: SortBy) => void;
  filterBy: FilterBy;
  setFilterBy: (value: FilterBy) => void;
  defaultPriority: Priority;
  setDefaultPriority: (value: Priority) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useUIContext = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUIContext must be used within a UIProvider");
  }
  return context;
};

interface UIProviderProps {
  children: ReactNode;
}

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
  const [sortBy, setSortBy] = useState<SortBy>("");
  const [filterBy, setFilterBy] = useState<FilterBy>("");
  const [defaultPriority, setDefaultPriority] = useState<Priority>("low");

  const value = {
    sortBy,
    setSortBy,
    filterBy,
    setFilterBy,
    defaultPriority,
    setDefaultPriority,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
