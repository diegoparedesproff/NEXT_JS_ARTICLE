import TaskListItem from "./TaskListItem";
import path from "path";

let myUrl = "esta";

const fetchTasks = async () => {
  //const response = await fetch('http://localhost:3000/api/tasks');
  let data = [];
  try {
    const baseUrl = `https://${process.env.VERCEL_URL}`;
    console.log("baseUrl ===== ", baseUrl);
    myUrl = baseUrl;
    const response = await fetch(baseUrl + "/api/tasks");
    console.log("response = ", response);
    data = await response.json();
  } catch (err) {
    console.log("error en el fetch: ", err);
  }
  return data;
};

const TaskList = async () => {
  const tasks = await fetchTasks();
  return (
    <ul className="taskList">
      <div>{`La url = ${myUrl}`}</div>
      {tasks?.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
