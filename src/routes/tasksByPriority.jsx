import { useState } from "react";
import { useContext } from "react";
import Task from "../components/task";
import { TasksContext } from "../contexts/TasksContext";
export default function TasksByPriority() {
  const [selectedPriority, setSelectedPriority] = useState("all");
  const tasks = useContext(TasksContext);

  return (
    <div>
      <div className=" h-10 text-sm gap-2 py-3 -ml-4 flex items-center bg-slate-900">
        <div className="flex items-center ml-24 gap-4 text-white">
         
          <label htmlFor="selectedPriority" className="uppercase">
            filter by priority
          </label>
          <select
            name="selectedPriority"
            className="h-8 w-30 border-0 py-1.5 pl-7 bg-white  text-gray-500 uppercase outline-none "
            value={selectedPriority}
            onChange={(e) => setSelectedPriority(e.target.value)}
          >
            <option value="all">all</option>
            <option value="high">high</option>
            <option value="medium">medium</option>
            <option value="low">low</option>
          </select>
        </div>
      </div>
      {selectedPriority && selectedPriority !== "all" ? (
        <div >
          <div className="ml-24">
            <ul>
              {tasks
                .filter((task) => task.priority.includes(selectedPriority))
                .map((task, id) => (
                  <li key={id} className="mt-8">
                    <Task task={task} />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <div className="ml-24">
            <ul>
              {tasks.map((task, id) => (
                <li key={id} >
                  <Task task={task} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
