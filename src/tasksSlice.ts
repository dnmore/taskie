import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Task } from "./types/definitions";

interface TasksState {
  tasks: Task[];
  points: number;
}

const initialState: TasksState = {
  tasks: JSON.parse(localStorage.getItem("tasks")|| "[]") ,
  points: JSON.parse(localStorage.getItem("points")|| "0") ,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, "id">>) => {
      const newTask: Task = { id: uuidv4(), ...action.payload };
      state.tasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(
        (task: Task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...action.payload };
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(
        (task: Task) => task.id != action.payload
      );
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    toggleStatus: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task: Task) => task.id === action.payload);
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
