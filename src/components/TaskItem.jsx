import React from "react";
import { motion } from "framer-motion";

const variants = {
  visible: {
    opacity: 1,
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
  },
  hidden: { opacity: 0 },
};

export default function TaskItem({ task, editTask, deleteTask, toggleTask }) {
  return (
    <motion.div
      key={task.id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      className="max-w-xs flex flex-col  gap-4 my-2 py-6 px-4 border-2 border-pine-tree shadow-primary rounded-lg"
    >
      <div className="text-sm mb-8">
        <p className="text-base font-semibold uppercase">Task: {task.text}</p>
        <p>Priority: {task.priority}</p>
        <p>Due Date: {task.dueDate}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 place-items-end ">
        <div className="flex flex-wrap gap-2">
          <motion.button
            onClick={() => editTask(task)}
            whileHover={{ scale: 1.1 }}
            className="w-28 h-8 uppercase font-medium tracking-wider bg-maize border-2 border-pine-tree rounded-xl shadow-primary"
          >
            Edit
          </motion.button>
          <motion.button
            onClick={() => deleteTask(task.id)}
            whileHover={{ scale: 1.1 }}
            className="w-28 h-8  uppercase font-medium tracking-wider bg-french-rose  border-2 border-pine-tree rounded-xl shadow-primary"
          >
            Delete
          </motion.button>
          {!task.done ? (
            <motion.button
              onClick={() => toggleTask(task.id)}
              whileHover={{ scale: 1.1 }}
              className="w-28 h-8  uppercase font-medium tracking-wider bg-light-gray border-2 border-pine-tree rounded-xl shadow-primary"
            >
              To Do
            </motion.button>
          ) : (
            <motion.button
              onClick={() => toggleTask(task.id)}
              whileHover={{ scale: 1.1 }}
              className="w-28 h-8  uppercase font-medium tracking-wider bg-jungle-green border-2 border-pine-tree rounded-xl shadow-primary"
            >
              Done
            </motion.button>
          )}
        </div>

        <motion.div
          className="text-2xl h-12 w-12 grid place-content-center  border-2 border-pine-tree bg-pale-magenta"
          animate={task.done ? "visible" : "hidden"}
          variants={variants}
        >
          ✔️
        </motion.div>
      </div>
    </motion.div>
  );
}
