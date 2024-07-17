import { useState } from "react";
import { MdFilterList } from "react-icons/md";
import Task from "../components/task";
export default function TasksByPriority({ tasks, onDeleteTask, onChangeTask }) {
  const [selectedPriority, setSelectedPriority] = useState("all");

  return (
    <div>
      <div className="fixed w-full top-24 left-16 h-10 flex items-center text-sm gap-2 px-2 py-3 sm:px-6 lg:px-8 bg-slate-900">
        <div className="flex items-center gap-4 text-white">
          <MdFilterList className="text-lg" />
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
        <div className="pt-6">
          <div className="mt-24 ml-24 py-1">
            <ul>
              {tasks
                .filter((task) => task.priority.includes(selectedPriority))
                .map((task, index) => (
                  <li key={index} className="my-8">
                    <Task
                      task={task}
                      onChange={onChangeTask}
                      onDelete={onDeleteTask}
                      index={index}
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="pt-6">
          <div className="mt-24 ml-24 py-1">
            <ul>
              {tasks.map((task, index) => (
                <li key={index} className="my-8">
                  <Task
                    task={task}
                    onChange={onChangeTask}
                    onDelete={onDeleteTask}
                    index={index}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
