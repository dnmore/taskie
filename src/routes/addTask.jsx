import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("high");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  return (
    <div className="px-5 py-8 flex flex-col gap-8 mt-24 ml-24">
      <p className="text-sm leading-none text-slate-900 uppercase">
        Create New Task
      </p>

      <div>
        <input
          type="text"
          name="text"
          placeholder="Enter Task"
          className="w-full max-w-80 rounded-md border border-gray-300 py-1.5 px-7 text-gray-900   placeholder:text-gray-400 sm:text-sm sm:leading-6"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>
        <select
          name="priority"
          className="h-full w-60 rounded-md border border-gray-300 py-1.5 pl-7 pr-20 uppercase text-gray-900  placeholder:text-gray-400  sm:text-sm sm:leading-6"
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
          className="h-full w-60 rounded-md border border-gray-300 py-1.5 pl-7 pr-20 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button
        onClick={() => {
          onAddTask({ text, priority, date });
          setText("");
          navigate("/");
        }}
        type="submit"
        className="w-28 h-8 uppercase font-medium tracking-wider bg-blue-500 text-white hover:opacity-80 "
      >
        Add
      </button>
    </div>
  );
}
