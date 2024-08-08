import { useState } from "react";
import { useContext } from "react";
import { TasksDispatchContext } from "../contexts/TasksContext";

export default function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TasksDispatchContext);

  let content;

  if (isEditing) {
    content = (
      <div className="flex flex-col gap-2">
        <input
          type="text"
          name="text"
          required
          className="max-w-80 border border-gray-300 py-1.5 px-7 text-gray-900 text-base sm:text-sm sm:leading-6"
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />

        <select
          name="priority"
          className="max-w-80 border border-gray-300 py-1.5 pl-7 pr-20 uppercase  text-gray-500 text-base sm:text-sm"
          value={task.priority}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                priority: e.target.value,
              },
            });
          }}
        >
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>

        <input
          type="date"
          name="date"
          required
          className="max-w-80 border border-gray-300 py-1.5 pl-7 pr-20 text-gray-900  sm:text-sm sm:leading-6"
          value={task.date}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                date: e.target.value,
              },
            });
          }}
        />

        <button
          onClick={() => setIsEditing(false)}
          className="w-28 h-8 uppercase font-medium tracking-wider bg-slate-500 text-white hover:opacity-80 "
        >
          Save
        </button>
      </div>
    );
  } else {
    content = (
      <div className="flex flex-col gap-2">
        <p className="text-slate-700 capitalize text-sm"> {task.text}</p>

        <p className="capitalize text-sm text-slate-700    ">
          <span>priority: </span>
          {task.priority}
        </p>
        <p className="text-sm text-slate-700 capitalize">
          <span>due date: </span>

          {task.date}
        </p>

        <button
          type="button"
          className="w-28 h-8 uppercase font-medium tracking-wider bg-yellow-500 text-white hover:opacity-80"
          onClick={() => setIsEditing(true)}
        >
          Update
        </button>
      </div>
    );
  }
  return (
    <div className="py-4">
      <label>
        <input
          type="checkbox"
          name="done"
          className="h-4 w-4 accent-indigo-600"
          checked={task.done}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                done: e.target.checked,
              },
            });
          }}
        />
      </label>

      {content}

      <button
        type="button"
        className="w-28 h-8 mt-2 uppercase font-medium tracking-wider bg-red-500 text-white hover:opacity-80"
        onClick={() =>
          dispatch({
            type: "deleted",
            id: task.id,
          })
        }
      >
        Delete
      </button>
    </div>
  );
}
