import { DndContext, DragEndEvent } from "@dnd-kit/core";
import React from "react";
import { useTaskContext } from "../contexts/TaskContext";
import { TaskStatus } from "../types/task";
import Column from "./Column";
import ColumnLabel from "./ColumnLabel";
import Logo from "./Logo";
import NewTask from "./NewTask";
import TaskControls from "./TaskControls";

const TaskManager: React.FC = () => {
  const { tasks, addTask, updateTask } = useTaskContext();

  const onDragEnd = (e: DragEndEvent) => {
    const { over, active } = e;
    const updatedTask = tasks.find((task) => task.id === active.id);
    if (updatedTask && over) {
      updateTask({ ...updatedTask, status: over.id as TaskStatus });
    }
  };

  const todoCount = tasks.filter((task) => task.status === "todo").length;
  const inProgressCount = tasks.filter(
    (task) => task.status === "in-progress"
  ).length;
  const doneCount = tasks.filter((task) => task.status === "done").length;

  return (
    <DndContext onDragEnd={onDragEnd}>
      <NewTask onAddTask={addTask} />
      <Logo />
      <TaskControls />
      <ColumnLabel
        label="To do"
        backgroundColor="bg-green-500"
        count={todoCount}
      />
      <ColumnLabel
        label="In progress"
        backgroundColor="bg-yellow-500"
        count={inProgressCount}
      />
      <ColumnLabel
        label="Done!"
        backgroundColor="bg-blue-500"
        count={doneCount}
      />
      <Column status="todo" />
      <Column status="in-progress" />
      <Column status="done" />
    </DndContext>
  );
};

export default TaskManager;
