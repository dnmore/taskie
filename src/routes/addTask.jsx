import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { TasksDispatchContext } from "../contexts/TasksContext";

const defaultFormFields = {
  text: "",
  priority: "high",
  date: "",
};

export default function AddTask() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const dispatch = useContext(TasksDispatchContext);
  const { text, priority, date } = formFields;
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text || !date) {
      setError(true);
      return;
    }

    dispatch({
      type: "added",
      id: uuidv4(),
      text: text,
      priority: priority,
      date: date,
    });
    resetFormFields();
    navigate("/");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="px-5 py-8 flex flex-col gap-8 mt-24 ml-24">
      <p className="text-sm leading-none text-slate-900 uppercase">
        Create New Task
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div>
          <input
            type="text"
            name="text"
            placeholder="Enter Task"
            className="max-w-80 border border-gray-300 py-1.5 px-7 text-gray-900   placeholder:text-gray-400 sm:text-sm sm:leading-6"
            value={text}
            onChange={handleChange}
          />
        </div>

        <div>
          <select
            name="priority"
            className="max-w-80 border border-gray-300 py-1.5 pl-7 pr-20 uppercase text-gray-900  placeholder:text-gray-400  sm:text-sm sm:leading-6"
            value={priority}
            onChange={handleChange}
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
            className="max-w-80 border border-gray-300 py-1.5 pl-7 pr-20 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6"
            value={date}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-28 h-8 mt-3 uppercase font-medium tracking-wider bg-blue-500 text-white hover:opacity-80 "
        >
          Add
        </button>
        {error && (
          <p className="text-xs mt-1 text-red-600">
            please fill up all the fields
          </p>
        )}
      </form>
    </div>
  );
}
