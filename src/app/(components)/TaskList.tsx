import TaskListItem from './TaskListItem';

const fetchTasks = async ()=>{
  const response = await fetch('http://localhost:3000/api/tasks');
  const data = await response.json();
  return data;
}

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
