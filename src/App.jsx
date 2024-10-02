import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTask, updateTask, deleteTask, toggleStatus } from "./tasksSlice";
import Modal from "./components/Modal";
import Navigation from "./components/Navigation";
import Task from "./components/Task"

import { motion } from "framer-motion";


export default function App() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const totalPoints = useSelector((state) => state.tasks.points);
  const dispatch = useDispatch();

  const [modalIsOpen, setIsModalOpen] = useState(false);
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("🌿 low");
  const [dueDate, setDueDate] = useState("");
  const [filterPriority, setFilterPriority] = useState("");
  const [taskIdToUpdate, setTaskIdToUpdate] = useState(null);
  const [errorText, setErrorText] = useState(false);
  const [errorDate, setErrorDate] = useState(false);

  const variants = {
    error: {
      borderColor: "#E94A8A",
      x: [-10, 0, 10, 0],
    },
    valid: { borderColor: "#282925" },
  };

  // Open and close task modal functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  // Open and close rules modal functions
  const openRulesModal = () => setIsRulesModalOpen(true);
  const closeRulesModal = () => setIsRulesModalOpen(false);

  // Helper function to reset the form
  const resetForm = () => {
    setTaskText(""), setPriority("🌿 low"), setDueDate("");
    setTaskIdToUpdate(null);
    setErrorText(false);
    setErrorDate(false);
  };

  // Handle creating a new task
  const handleCreateTask = () => {
    if (!taskText) {
      setErrorText(true);
      return;
    } else if(!dueDate){
      setErrorDate(true);
      return;
    }
    const newTask = {
      text: taskText,
      priority: priority,
      dueDate: dueDate,
      done: false,
    };
    dispatch(addTask(newTask));
    closeModal();
  };

  // Handle editing a task (loads task details into the form)
  const handleEditTask = (task) => {
    setTaskIdToUpdate(task.id);
    setTaskText(task.text);
    setPriority(task.priority);
    setDueDate(task.dueDate);
    openModal();
  };

  // Handle updating an existing task
  const handleUpdateTask = () => {
    if (taskIdToUpdate) {
      if (!taskText) {
        setErrorText(true);
        return;
      } else if(!dueDate){
        setErrorDate(true);
        return;
      }
      const updatedTask = {
        id: taskIdToUpdate,
        text: taskText,
        priority: priority,
        dueDate: dueDate,
      };
      dispatch(updateTask(updatedTask));
      closeModal();
    }
  };

  // Handle deleting a task
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  // Handle marking a task as completed
  const handleToggleTask = (taskId) => {
    dispatch(toggleStatus(taskId));
  };

  return (
    <div className="flex flex-col py-7 px-6 mb-10">
      <Navigation onOpenRules={openRulesModal} />
      <Modal isOpen={isRulesModalOpen} onClose={closeRulesModal}>
        <h3 className="text-xl font-bold mb-2">Game Rules</h3>
        <p className="text-base">Here are the rules for the game:</p>
        <ul className="mt-2 list-disc list-inside text-sm ">
          <li className="my-2">Complete tasks to earn points.</li>
          <li className="my-2">
            Reach different levels based on points: 🐴 Taskie Novice,🦓 Taskie
            Pro, 🦄 Taskie Guru.
          </li>
          <li className="my-2">Higher priority tasks give you more points.</li>
        </ul>
      </Modal>

      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <h3 className="mt-4 text-xl font-semibold">
          {taskIdToUpdate ? "Update Task" : "Create Task"}
        </h3>
        <motion.input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="task description"
          className="w-72 md:w-80 border py-1.5 pl-1 my-2     placeholder:text-gray-400 sm:text-sm sm:leading-6"
          animate={errorText ? "error" : "valid"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.75, duration: 0.8 }}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-72 md:w-80  border border-pine-tree py-1.5 pl-1 pr-20 my-2  uppercase   placeholder:text-gray-400  sm:text-sm sm:leading-6"
        >
          <option value="🌿 low">🌿 Low Priority</option>
          <option value="🕒 medium">🕒 Medium Priority</option>
          <option value="🔥 high">🔥 High Priority</option>
        </select>
        <motion.input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-72 md:w-80  border border-pine-tree py-1.5 pl-1 pr-20 my-2  placeholder:text-gray-400 sm:text-sm sm:leading-6"
          animate={errorDate ? "error" : "valid"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.75, duration: 0.8 }}
        />
        {taskIdToUpdate ? (
          <motion.button
            onClick={handleUpdateTask}
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 1 },
            }}
            whileInView={{ opacity: 1 }}
            className="w-72 md:w-80 rounded-xl shadow-primary py-2 uppercase font-medium tracking-wider  bg-maize  border-2 border-pine-tree"
          >
            Update
          </motion.button>
        ) : (
          <motion.button
            onClick={handleCreateTask}
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 1 },
            }}
            whileInView={{ opacity: 1 }}
            className="w-72 md:w-80 py-2 rounded-xl shadow-primary mt-3 uppercase font-medium tracking-wider bg-light-cobalt-blue  border-2 border-pine-tree"
          >
            Save
          </motion.button>
        )}
        
      </Modal>
      <div className="flex items-center gap-4 my-4 px-6">
        <div className="flex-1 bg-gray-400 rounded-full h-6 shadow-primary">
          <div
            className="bg-jungle-green h-6 rounded-full shadow-primary"
            style={{
              width: `${Math.min(((totalPoints % 100) / 100) * 100, 100)}%`,
            }}
          ></div>
        </div>
        <p className="sm:text-sm md:text-xl tracking-tighter">
          {totalPoints < 100
            ? "🐴 Taskie Novice"
            : totalPoints < 300
            ? "🦓 Taskie Pro"
            : "🦄 Taskie Guru"}
        </p>
      </div>
      <div className="mt-3 px-6">
        <motion.button
          onClick={openModal}
          initial={{ opacity: 0.6 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 1 },
          }}
          whileInView={{ opacity: 1 }}
          className="w-full max-w-80 rounded-xl h-16  uppercase tracking-wider bg-light-cobalt-blue border-2 border-pine-tree text-pine-tree text-3xl font-extrabold shadow-primary"
        >
          Create Task
        </motion.button>
      </div>

      <div className="mt-12 grid px-6">
        <h3 className="text-lg  uppercase">Filter Tasks by Priority</h3>
        <select
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
          className="w-full max-w-80 rounded-lg border border-pine-tree shadow-primary py-1.5 pl-1 pr-20 mb-2 uppercase outline-none cursor-pointer  placeholder:text-gray-400  sm:text-sm sm:leading-6"
        >
          <option value="all">All</option>
          <option value="🌿 low"> 🌿 Low Priority</option>
          <option value="🕒 medium">🕒 Medium Priority</option>
          <option value="🔥 high">🔥 High Priority</option>
        </select>
      </div>

      <div className="mt-2 flex flex-wrap px-6 gap-4">
        {filterPriority && filterPriority !== "all"
          ? tasks
              .filter((task) => task.priority.includes(filterPriority))
              .map((task) => (
                <Task
                  task={task}
                  key={task.id}
                  editTask={handleEditTask}
                  deleteTask={handleDeleteTask}
                  toggleTask={handleToggleTask}
                />
              ))
          : tasks.map((task) => (
              <Task
                task={task}
                key={task.id}
                editTask={handleEditTask}
                deleteTask={handleDeleteTask}
                toggleTask={handleToggleTask}
              />
            ))}
      </div>
    </div>
  );
}
