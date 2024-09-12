import "./App.css";
import TaskManager from "./components/TaskManager";
import { TaskProvider } from "./contexts/TaskContext";

function App() {

  return (
    <div className="grid grid-flow-row grid-cols-3 w-full gap-x-4 gap-y-8">
      <TaskProvider>
        <TaskManager />
      </TaskProvider>
    </div>
  );
}

export default App;
