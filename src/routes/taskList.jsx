import { useContext } from "react";
import Task from "../components/task";
import { TasksContext } from "../contexts/TasksContext";

export default function TaskList() {
  const tasks = useContext(TasksContext);
  return (
    <div className="ml-24">
      <div className="h-10 text-sm gap-2 py-3 -ml-4 bg-slate-900">
        <p className="text-white uppercase">Tasks List</p>
      </div>
     <div>
       {tasks.length === 0 ? (
        <p className="mt-10">No tasks here yet</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} >
              <Task task={task} />
            </li>
          ))}
        </ul>
      )}
     </div>
     
    </div>
  );
}
