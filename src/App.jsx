import { Routes, Route } from "react-router-dom";
import { Navigation } from "./routes/navigation";
import { useState, useEffect } from "react";
import TaskList from "./routes/taskList";
import AddTask from "./routes/addTask";
import TasksByPriority from "./routes/tasksByPriority";

const storedTasks = () => JSON.parse(localStorage.getItem("tasks")) || [];

export default function App() {
  const [tasks, setTasks] = useState(storedTasks());

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route
            index
            element={
              <TaskList
                tasks={tasks}
                onDeleteTask={handleDeleteTask}
                onChangeTask={handleChangeTask}
              />
            }
          />
          <Route
            path="new-task"
            element={<AddTask onAddTask={handleAddTask} />}
          />
          <Route
            path="tasks-priority"
            element={
              <TasksByPriority
                tasks={tasks}
                onDeleteTask={handleDeleteTask}
                onChangeTask={handleChangeTask}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}
