import { useEffect, useRef, useState } from "react";
import { VscSaveAs } from "react-icons/vsc";
import styles from "./editTodoInput.module.css";

export const EditTodoInput = ({ editTodoFunction, id, title, setEdit }) => {
  const [input, setInput] = useState(title);
  const ref = useRef();

  useEffect(() => {
    const checkClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setEdit(false);
      }
    };
    document.addEventListener("mousedown", checkClickOutside);

    return () => {
      document.removeEventListener("mousedown", checkClickOutside);
    };
  }, [setEdit, ref]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodoFunction(id, input);
        setEdit(false);
      }}
      className={styles.form}
      ref={ref}
    >
      <input
        type="text"
        placeholder="Edit task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        <VscSaveAs size="18px" />
      </button>
    </form>
  );
};

export default EditTodoInput;
