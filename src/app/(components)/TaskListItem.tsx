"use client";

import { deleteTask, updateTask } from "../(actions)";

const TaskListItem = ({ task }) => {
  console.log("task = ", task);
  return (
    <li className={task.completed ? "completed" : ""}>
      <span>{task.content}</span>
      <div>
        <input
          type="checkbox"
          defaultChecked={task.completed}
          onClick={() => updateTask(task)}
        />
        <button onClick={() => deleteTask(task.id)}>x</button>
      </div>
    </li>
  );
};

export default TaskListItem;
