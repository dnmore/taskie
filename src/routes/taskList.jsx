import { useContext } from "react";
import Task from "../components/task";
import { TasksContext } from "../contexts/TasksContext";

export default function TaskList() {
  const tasks = useContext(TasksContext);
  return (
    <div className="mt-24 ml-24 py-1">
      <div className="fixed w-full top-24 left-0 h-10 text-sm gap-2 px-2 py-3 sm:px-6 lg:px-8 bg-slate-900">
        <p className="text-white uppercase">Tasks List</p>
      </div>
     <div className="mt-8">
       {tasks.length === 0 ? (
        <p>No tasks here yet</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="mt-8">
              <Task task={task} />
            </li>
          ))}
        </ul>
      )}
     </div>
     
    </div>
  );
}
