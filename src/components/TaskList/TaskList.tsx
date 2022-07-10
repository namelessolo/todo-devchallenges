import React from "react";
import Task from "../Task/Task";
import { useTodoContext } from "../../store/todosContext";

type Props = {
  active?: boolean;
  completed?: boolean;
};

type Todos = {
  title: string;
  done: boolean;
  id: string;
};

const TaskList: React.FC<Props> = ({ active, completed }) => {
  const { todos } = useTodoContext();

  let filteredTodos: Todos[];

  if (active) {
    filteredTodos = todos.filter((todo) => todo.done === false);
  } else if (completed) {
    filteredTodos = todos.filter((todo) => todo.done === true);
  } else {
    filteredTodos = todos;
  }

  return (
    <ul>
      {filteredTodos.map((todo) => {
        return <Task {...todo} key={todo.id} completed={!!completed} />;
      })}
    </ul>
  );
};

export default TaskList;
