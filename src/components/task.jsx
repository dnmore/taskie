import { useState } from "react";

export default function Task({ task, onChange, onDelete, index }) {
  const [isEditing, setIsEditing] = useState(false);
  let content;
  if (isEditing) {
    content = (
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-2">
        <div>
          <input
            type="text"
            name="text"
            className="w-full max-w-80 rounded-md border border-gray-300 py-1.5 px-7 text-gray-900 text-base sm:text-sm sm:leading-6"
            value={task.text}
            onChange={(e) => {
              onChange(
                {
                  ...task,
                  text: e.target.value,
                },
                index
              );
            }}
          />
        </div>

        <div>
          <select
            name="priority"
            className="h-full w-60 rounded-md border border-gray-300 py-1.5 pl-7 pr-20 uppercase  text-gray-500 text-base sm:text-sm"
            value={task.priority}
            onChange={(e) => {
              onChange(
                {
                  ...task,
                  priority: e.target.value,
                },
                index
              );
            }}
          >
            <option value="high">high</option>
            <option value="medium">medium</option>
            <option value="low">low</option>
          </select>
        </div>

        <div>
          <input
            type="date"
            name="date"
            className="h-full w-60 rounded-md border border-gray-300 py-1.5 pl-7 pr-20 text-gray-900  sm:text-sm sm:leading-6"
            value={task.date}
            onChange={(e) => {
              onChange(
                {
                  ...task,
                  date: e.target.value,
                },
                index
              );
            }}
          />
        </div>
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
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-2">
        <div className="flex gap-6 items-center">
          <input
            type="checkbox"
            name="done"
            className="h-4 w-4 accent-indigo-600"
            checked={task.done}
            onChange={(e) => {
              onChange(
                {
                  ...task,
                  done: e.target.checked,
                },
                index
              );
            }}
          />
          <p className="text-slate-700 capitalize"> {task.text}</p>
        </div>

        <p className="uppercase text-green-500 ">
          <span className="text-slate-700   text-sm uppercase">priority: </span>{" "}
          {task.priority}
        </p>

        <p className=" text-green-500">
          <span className="  text-slate-700 text-sm uppercase">due date: </span>

          {task.date}
        </p>
        <div className="flex gap-2">
           <button
          type="button"
          className="w-28 h-8 uppercase font-medium tracking-wider bg-yellow-500 text-white hover:opacity-80"
          onClick={() => setIsEditing(true)}
        >
          Update
        </button>
        <button
          type="button"
          className="w-28 h-8 uppercase font-medium tracking-wider bg-red-500 text-white hover:opacity-80"
          onClick={() => onDelete(index)}
        >
          Delete
        </button>
        </div>
       
      </div>
    );
  }
  return <>{content}</>;
}
