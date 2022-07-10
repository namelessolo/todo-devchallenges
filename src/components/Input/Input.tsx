import AddButton from "../AddButton/AddButton";
import styles from "./Input.module.scss";
import { useState } from "react";
import { useTodoContext } from "../../store/todosContext";

const Input = () => {
  const { addTodo } = useTodoContext();
  const [input, setInput] = useState("");

  return (
    <form
      className={styles.wrapper}
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(input);
        setInput("");
      }}
    >
      <input
        type="text"
        className={styles.input}
        placeholder="add details"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <AddButton />
    </form>
  );
};

export default Input;
