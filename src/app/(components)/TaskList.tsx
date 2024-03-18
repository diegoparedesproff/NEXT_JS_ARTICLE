import TaskListItem from "./TaskListItem";

const fetchTasks = async () => {
  //const response = await fetch('http://localhost:3000/api/tasks');
  let data = [];
  try {
    //works in browser, for some reason not here
    const baseUrl = `https://${process.env.VERCEL_URL}`;
    const response = await fetch(
      `https://next-js-article.vercel.app/api/tasks`
    );
    data = await response.json();
    parsed = data;
  } catch (err) {
    console.log("error en el fetch: ", err);
  }
  return data;
};

const TaskList = async () => {
  const tasks = await fetchTasks();
  return (
    <ul className="taskList">
      {tasks?.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
