import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  const filterTodoUtil = () => {
    switch (filterStatus) {
      case "completed":
        setFilterTodos(todos.filter((item) => item.completed === true));
        break;
      case "incomplete":
        setFilterTodos(todos.filter((item) => item.completed === false));
        break;
      default:
        setFilterTodos(todos);
    }
  };
  useEffect(() => {
    filterTodoUtil();
  }, [filterStatus, todos]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <header>Todo {inputText}</header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setFilterStatus={setFilterStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
    </div>
  );
}

export default App;
