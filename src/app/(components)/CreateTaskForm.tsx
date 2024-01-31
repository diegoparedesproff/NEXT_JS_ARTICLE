import { addTask } from "../(actions)";


const CreateTaskForm = () => {
    return (
      <>
      <form action={addTask} className="createTaskForm">
        <input name="task" type="text" placeholder="insert new task" />
        <input type="submit" value="create" />
      </form>
      </>
    );
  };
  export default CreateTaskForm;
  