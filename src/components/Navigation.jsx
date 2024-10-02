import React from "react";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";

export default function Navigation({ onOpenRules }) {
  const totalPoints = useSelector((state) => state.tasks.points);
  return (
    <motion.div
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", bounce: 0.75, duration: 0.8 }}
      className="max-h-32 py-4 px-6 flex flex-wrap justify-between  mb-4 text-base font-bold border-2  border-pine-tree shadow-primary"
    >
      <h1 className="text-4xl font-extrabold tracking-wider">
        Task<span className="text-light-cobalt-blue">i</span>e
        <span className="text-light-cobalt-blue">.</span>
      </h1>

      <div className="flex items-center gap-8 py-2">
        <button
          onClick={onOpenRules}
          className="hover:text-pale-magenta border-b-2 border-b-pale-magenta"
        >
          Rules
        </button>
        <div> Points: {totalPoints}</div>
      </div>
    </motion.div>
  );
}
