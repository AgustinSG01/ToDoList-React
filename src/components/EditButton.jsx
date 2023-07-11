import { FiEdit } from "react-icons/fi";
import styles from "./editButton.module.css";

function EditButton({ setEdit }) {
  return (
    <button onClick={setEdit} className={styles.button}>
      <FiEdit size="25px"/>
    </button>
  );
}

export default EditButton;
