import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("high");
  const [date, setDate] = useState("");

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
      <div>
        <input
          type="text"
          name="text"
          placeholder="enter task"
          className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 shadow-lg placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>
        <select
          name="priority"
          className="h-full rounded-md border-0 py-1.5 pl-7 pr-20 bg-transparent  text-gray-500 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
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
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button
        onClick={() => {
          onAddTask({ text, priority, date });
          setText("");
        }}
        type="submit"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        ADD
      </button>
      
    </div>
  );
}
