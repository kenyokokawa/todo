import "./App.css";
import TaskManager from "./components/TaskManager";
import { TaskProvider } from "./contexts/TaskContext";
import { UIProvider } from "./contexts/UIContext";

function App() {
  return (
    <div className="grid grid-flow-row grid-cols-3 w-full gap-x-4 gap-y-8">
      <TaskProvider>
        <UIProvider>
          <TaskManager />
        </UIProvider>
      </TaskProvider>
    </div>
  );
}

export default App;
