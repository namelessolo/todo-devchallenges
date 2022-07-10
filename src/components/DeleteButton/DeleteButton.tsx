import React from "react";
import { IoMdTrash } from "react-icons/io";
import styles from "./DeleteButton.module.scss";
import { useTodoContext } from "../../store/todosContext";

const DeleteButton = () => {
  const { deleteComplete } = useTodoContext();
  return (
    <button className={styles.button} onClick={deleteComplete}>
      <IoMdTrash /> delete all
    </button>
  );
};

export default DeleteButton;
