import React from "react";

const Form = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  setFilterStatus,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  const filterChangeHandler = (e) => {
    setFilterStatus(e.target.value);
  };
  return (
    <form>
      <input
        value={inputText}
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
      />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        +
      </button>
      {/* <div className="select">
        <select
          name="todos"
          className="filter-todo"
          onChange={filterChangeHandler}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">incomplete</option>
        </select>
      </div> */}
    </form>
  );
};

export default Form;
