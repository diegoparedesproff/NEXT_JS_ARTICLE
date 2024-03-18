import TaskList from "@/app/(components)/TaskList";
import { Suspense } from "react";
//import CreateTaskForm from "../(components)/CreateTaskForm";

const Tasks = () => {
  return (
    <Suspense fallback={"Loading... This could be a component"}>
      <TaskList />
    </Suspense>
  );
};

export default Tasks;
