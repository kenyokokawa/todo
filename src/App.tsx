import { useState } from "react";
import "./App.css";
import TaskManager from "./components/TaskManager";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <div className="bg-slate-100 rounded-xl p-2 mb-4 shadow-inner">
        <h1 className="text-3xl font-bold">@todo</h1>
      </div>
      <div className="flex flex-col w-96">
        <TaskManager />
      </div>
    </div>
  );
}

export default App;
