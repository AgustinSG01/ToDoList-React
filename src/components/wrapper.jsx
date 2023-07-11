import { AddTodo } from "./AddTodo";
import Todos from "./Todos";
import styles from "./wrapper.module.css";

export const Wrapper = ({
  todos,
  onRemove,
  addTodoFunction,
  editTodoFunction,
  completeTodoFunction,
  clearTodos,
}) => {
  return (
    <div className={styles.wrapper}>
      <AddTodo addTodoFunction={addTodoFunction} />
      <Todos
        todos={todos}
        onRemove={onRemove}
        editTodoFunction={editTodoFunction}
        completeTodoFunction={completeTodoFunction}
      />
      <div className={styles.clearButtonContainer}>
        <button onClick={clearTodos} className={styles.clearButton}>
          Clear Completed Tasks
        </button>
      </div>
    </div>
  );
};
