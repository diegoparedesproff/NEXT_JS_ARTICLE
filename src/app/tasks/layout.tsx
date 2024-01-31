import CreateTaskForm from "@/app/(components)/CreateTaskForm";

const TaskRootLayout = ({ children }) => {
  return (
    <>
      <CreateTaskForm />
      <div className="mainContainer">{children}</div>
      
    </>
  );
};
export default TaskRootLayout;
