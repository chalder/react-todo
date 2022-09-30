import React from "react";

const Todo = ({ todo, todos, setTodos }) => {
  const deleteHandler = (e) => {
    e.preventDefault();
    setTodos(todos.filter((item) => item.id !== todo.id));
  };
  const completeHandler = (e) => {
    e.preventDefault();
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        √
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        x
      </button>
    </div>
  );
};
export default Todo;
