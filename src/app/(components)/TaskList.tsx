import TaskListItem from "./TaskListItem";
import path from "path";

let myUrl = "esta";
let myResp = "";
let parsed = "";

const fetchTasks = async () => {
  //const response = await fetch('http://localhost:3000/api/tasks');
  let data = [];
  try {
    const baseUrl = `https://${process.env.VERCEL_URL}`;
    console.log("baseUrl ===== ", baseUrl);
    myUrl = baseUrl;
    const response = await fetch(baseUrl + "/api/tasks");
    console.log("response = ", response);
    myResp = response;
    data = await response.json();
    parsed = data;
  } catch (err) {
    console.log("error en el fetch: ", err);
  }
  return data;
};

const TaskList = async () => {
  const tasks = await fetchTasks();
  console.log({ tasks, myUrl, myResp, parsed });
  return (
    <ul className="taskList">
      <div>{`La url = ${myUrl}, response = ${myResp}, parsed = ${parsed}`}</div>
      {tasks?.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
