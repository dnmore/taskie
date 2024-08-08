import { Routes, Route } from "react-router-dom";
import { TasksProvider } from "./contexts/TasksContext";

import { Navigation } from "./routes/navigation";
import TaskList from "./routes/taskList";
import AddTask from "./routes/addTask";
import TasksByPriority from "./routes/tasksByPriority";



export default function App() {
  

  return (
    <TasksProvider>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<TaskList />} />
          <Route path="new-task" element={<AddTask />} />
          <Route path="tasks-priority" element={<TasksByPriority />} />
        </Route>
      </Routes>
    </TasksProvider>
  );
}
