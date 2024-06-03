import { useState } from "react";

export default function Task({ task, onChange, onDelete, index }) {
  const [isEditing, setIsEditing] = useState(false);
  let content;
  if (isEditing) {
    content = (
      <>
        <div>
          <input
            type="text"
            name="text"
            className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 shadow-lg placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            className="h-full rounded-md border-0 py-1.5 pl-7 pr-20  text-gray-500 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
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
            className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 shadow-lg placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          SAVE
        </button>
      </>
    );
  } else {
    content = (
      <>
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
        <h3 className="font-bold text-indigo-600"> {task.text}</h3>

        <p>
          <strong className="text-indigo-600">Priority: </strong>
          {task.priority}
        </p>

        <p>
          <strong className="text-indigo-600">Due Date: </strong>
          {task.date}
        </p>
        <button
          type="button"
          className="rounded-md bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          onClick={() => onDelete(index)}
        >
          DELETE
        </button>
        <button
          type="button"
          className="rounded-md bg-yellow-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          onClick={() => setIsEditing(true)}
        >
          UPDATE
        </button>
      </>
    );
  }
  return <>{content}</>;
}
