import { useState } from "react";
import styles from "../components/AddTodo.module.css";
import { AiOutlinePlus } from "react-icons/ai";

export const AddTodo = ({ addTodoFunction }) => {
  const [input, setInput] = useState("");
  return (
    <form
      onSubmit={(e) => {
        addTodoFunction(e, input);
        setInput("");
      }}
      className={styles.form}
    >
      <input
        type="text"
        placeholder="What are you going to do?..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.addButton}>
        <AiOutlinePlus size="16px" />
      </button>
    </form>
  );
};
