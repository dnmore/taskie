import Task from "../components/task";

export default function TaskList({ tasks, onDeleteTask, onChangeTask }) {
  return (
    <div className="mt-24 ml-24 py-1">
      {tasks.length === 0 ? (
        <p>
          No tasks here yet</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="my-8">
              <Task
                task={task}
                onChange={onChangeTask}
                onDelete={onDeleteTask}
                index={index}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
