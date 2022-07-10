import React from "react";
import Input from "../components/Input/Input";
import TaskList from "../components/TaskList/TaskList";

const Active = () => {
  return (
    <div>
      <Input />
      <TaskList active />
    </div>
  );
};

export default Active;
