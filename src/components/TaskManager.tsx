import { DndContext, DragEndEvent } from "@dnd-kit/core";
import React from "react";
import { useTaskContext } from "../contexts/TaskContext";
import Column from "./Column";
import ColumnLabel from "./ColumnLabel";
import Logo from "./Logo";
import NewTask from "./NewTask";
import { TaskStatus } from "../types/task";

const TaskManager: React.FC = () => {
  const { tasks, addTask, updateTask } = useTaskContext();

  const onDragEnd = (e: DragEndEvent) => {
    const { over, active } = e;
    const updatedTask = tasks.find((task) => task.id === active.id);
    if (updatedTask && over) {
      updateTask({ ...updatedTask, status: over.id as TaskStatus });
    }
  };

  return (
    <DndContext onDragEnd={onDragEnd}>
      <NewTask onAddTask={addTask} />
      <Logo />
      <div className="bg-green-200 rounded-xl "></div>
      <ColumnLabel label="To do" backgroundColor="bg-green-500" />
      <ColumnLabel label="In progress" backgroundColor="bg-yellow-500" />
      <ColumnLabel label="Done!" backgroundColor="bg-blue-500" />
      <Column status="todo" />
      <Column status="in-progress" />
      <Column status="done" />
    </DndContext>
  );
};

export default TaskManager;
