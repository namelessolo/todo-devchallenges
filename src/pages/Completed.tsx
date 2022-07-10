import React from "react";
import TaskList from "../components/TaskList/TaskList";
import DeleteButton from "../components/DeleteButton/DeleteButton";

const Completed = () => {
  return (
    <div>
      <TaskList completed />
      <DeleteButton />
    </div>
  );
};

export default Completed;
