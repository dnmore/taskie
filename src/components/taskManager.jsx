import { useState } from "react";
import TaskList from "./taskList";
import { MdFilterList } from "react-icons/md";

export default function TaskManager(tasks, onDeleteTask, onChangeTask) {
  const [selectedPriority, setSelectedPriority] = useState("all");

  return (
    <div>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
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
          <div>
            <TaskList
              tasks={tasks.filter((task) =>
                task.priority.includes(selectedPriority)
              )}
              onDeleteTask={onDeleteTask}
              onChangeTask={onChangeTask}
            />
          </div>
        ) : (
          <div>
            <TaskList
              tasks={tasks}
              onDeleteTask={onDeleteTask}
              onChangeTask={onChangeTask}
            />
          </div>
        )}
      </div>
    </div>
  );
}
