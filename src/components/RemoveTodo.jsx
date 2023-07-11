import { BsFillTrashFill } from "react-icons/bs";
import styles from "./removeTodo.module.css";

function RemoveTodo({ onRemove }) {
  return (
    <button onClick={onRemove} className={styles.button}>
      <BsFillTrashFill size="25px" />
    </button>
  );
}

export default RemoveTodo;
