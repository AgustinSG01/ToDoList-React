import Todo from "./Todo";
import styles from "./todos.module.css";

function Todos({ todos, onRemove, editTodoFunction, completeTodoFunction }) {
  return (
    <div className={styles.todosContainer}>
      {todos?.map((todo) => {
        return (
          <Todo
            title={todo.title}
            key={todo.id}
            id={todo.id}
            onRemove={onRemove}
            editTodoFunction={editTodoFunction}
            completed={todo.completed}
            completeTodoFunction={completeTodoFunction}
          />
        );
      })}
    </div>
  );
}

export default Todos;
