import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  points: JSON.parse(localStorage.getItem("points")) || 0,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = { id: uuidv4(), ...action.payload };
      state.tasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...action.payload };
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id != action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    toggleStatus: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.done = !task.done;

        if (task.done) {
          let pointsEarned = 0;
          if (task.priority === "🌿 low") pointsEarned = 10;
          else if (task.priority === "🕒 medium") pointsEarned = 20;
          else if (task.priority === "🔥 high") pointsEarned = 30;

          state.points += pointsEarned;
        } else {
          let pointsDeducted = 0;
          if (task.priority === "🌿 low") pointsDeducted = 10;
          else if (task.priority === "🕒 medium") pointsDeducted = 20;
          else if (task.priority === "🔥 high") pointsDeducted = 30;

          state.points -= pointsDeducted;
        }
      }
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
      localStorage.setItem("points", JSON.stringify(state.points));
    },
  },
});

export const { addTask, updateTask, deleteTask, toggleStatus } =
  tasksSlice.actions;
export default tasksSlice.reducer;
