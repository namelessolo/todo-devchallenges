import React, { useState } from "react";
import styles from "./Task.module.scss";
import { IoMdTrash } from "react-icons/io";
import { useTodoContext } from "../../store/todosContext";

type Props = {
  title: string;
  done: boolean;
  id: string;
  completed: boolean;
};

const Task: React.FC<Props> = ({ title, done, id, completed }) => {
  const [checked, setChecked] = useState(done);
  const { setDone, removeTodo } = useTodoContext();

  return (
    <li className={`${styles.task} ${checked && styles.done}`}>
      <div className={styles.input}>
        <input
          className={styles.checkbox}
          type="checkbox"
          name=""
          id={id}
          defaultChecked={checked}
          onClick={() => {
            setChecked((prev) => !prev);
            setDone(id);
          }}
        />
        <label htmlFor={id}>{title}</label>
      </div>

      {completed && <IoMdTrash onClick={() => removeTodo(id)} />}
    </li>
  );
};

export default Task;
