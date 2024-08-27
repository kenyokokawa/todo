import "./App.css";
import TaskManager from "./components/TaskManager";

function App() {
  return (
    <div className="grid grid-flow-row grid-cols-3 w-full gap-x-4 gap-y-8">
      <TaskManager />
    </div>
  );
}

export default App;
