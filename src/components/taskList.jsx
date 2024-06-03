import Task from "./task";

export default function TaskList({ tasks, onDeleteTask, onChangeTask }) {
  return (
    <>
      <ul className="py-6">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 shadow-lg my-5 bg-indigo-100 rounded-md"
          >
            <Task
              task={task}
              onChange={onChangeTask}
              onDelete={onDeleteTask}
              index={index}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
