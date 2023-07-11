import { useState, useEffect } from "react";
import "./App.css";
import { Wrapper } from "./components/wrapper";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);

  function clearCompleted() {
    const newTodos = todos.filter((todo) => todo.completed === false);
    setTodos(newTodos);
  }

  function completeTodoFunction(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  function addTodoFunction(e, input) {
    e.preventDefault();
    if (input) {
      const newTodo = { id: uuidv4(), title: input, completed: false };
      setTodos([...todos, newTodo]);
    }
  }

  function editTodoFunction(id, newTitle) {
    if (newTitle) {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.title = newTitle;
        }
        return todo;
      });
      setTodos(newTodos);
    } else return;
  }

  function removeTodo(id) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  }
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("tasks"));
    if (savedTodos && savedTodos.length) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="appContainer">
      <Wrapper
        todos={todos}
        setTodos={setTodos}
        onRemove={removeTodo}
        addTodoFunction={addTodoFunction}
        editTodoFunction={editTodoFunction}
        completeTodoFunction={completeTodoFunction}
        clearTodos={clearCompleted}
      />
    </div>
  );
}

export default App;
