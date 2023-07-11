import { useState } from "react";
import RemoveTodo from "./RemoveTodo";
import styles from "./todo.module.css";
import EditButton from "./EditButton";
import EditTodoInput from "./EditTodoInput";
import { TiTick } from "react-icons/ti";

function Todo({
  title,
  onRemove,
  id,
  editTodoFunction,
  completed,
  completeTodoFunction,
}) {
  const [edit, setEdit] = useState(false);

  return (
    <div className={styles.todoContainer}>
      {edit ? (
        <EditTodoInput
          editTodoFunction={editTodoFunction}
          id={id}
          title={title}
          setEdit={setEdit}
          edit={edit}
        />
      ) : (
        <div className={styles.titleAndButtonContainer}>
          <div className={styles.completeButtonContainer}>
            <button
              className={styles.completeButton}
              onClick={() => completeTodoFunction(id)}
            >
              <TiTick size="20px" color={completed ? "white" : "transparent"} />
            </button>
          </div>
          <p className={completed ? styles.completedTitle : styles.normalTitle}>
            {title}
          </p>
        </div>
      )}
      {!edit ? (
        <div className={styles.buttonsContainer}>
          <RemoveTodo onRemove={() => onRemove(id)} />
          <EditButton setEdit={() => setEdit(true)} />
        </div>
      ) : null}
    </div>
  );
}

export default Todo;
