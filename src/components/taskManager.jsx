import { useState } from "react";
import TaskList from "./taskList";
import AddTask from "./addTask";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [selectedPriority, setSelectedPriority] = useState("all");

  function handleAddTask({ text, priority, date }) {
    setTasks([
      ...tasks,
      {
        text: text,
        priority: priority,
        date: date,
        done: false,
      },
    ]);
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((el, i) => i !== id));
  }

  function handleChangeTask(task, id) {
    setTasks(
      tasks.map((t, i) => {
        if (i === id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  return (
    <div className="min-h-full">
      <header className="bg-indigo-600 shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <AddTask onAddTask={handleAddTask} />

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <label htmlFor="selectedPriority">Filter by priority</label>
              <select
                name="selectedPriority"
                className="h-full rounded-md border-0 py-1.5 pl-7 pr-20 bg-transparent  text-gray-500 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
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
                onDeleteTask={handleDeleteTask}
                onChangeTask={handleChangeTask}
              />
            </div>
          ) : (
            <div>
              <TaskList
                tasks={tasks}
                onDeleteTask={handleDeleteTask}
                onChangeTask={handleChangeTask}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
