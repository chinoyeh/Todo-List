import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [style, setStyle] = useState("");
  const onStyleChange = (id) => {
    setStyle(id);
  };
  const onAddTask = (e) => {
    e.preventDefault();
    if (todo) {
      const todos = { id: new Date().getTime().toString(), todo };
      setTodoList((todo) => {
        return [...todo, todos];
      });
      
      setTodo("");
      setError("");
    }
    if (!error && !todo) {
      setError("Field cannot be empty!!");
    }
  };
  const onRemoveItem = (id) => {
    let newTodoList = todoList.filter((todos) => todos.id !== id);
    setTodoList(newTodoList);
  };
  return (
    <>
      <div className="container">
        <header>
          <h1>To Do</h1>
        </header>

        <form className="form">
          <div className="form-control">
            <p className="error">{error}</p>
            <label htmlFor="todo">New Task:</label>
            <input
              type="text"
              id="todo"
              name="todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" onClick={onAddTask}>
              +
            </button>
          </div>
        </form>

        {todoList.map((todos) => {
          const { id, todo } = todos;
          return (
            <div className="item" key={id}>
              <ul>
                <li
                  className={style && style === id ? "listItem" : ""}
                  onClick={() => onStyleChange(id)}
                >
                  {todo}
                </li>
              </ul>
              <button onClick={() => onRemoveItem(id)} className="x">
                x
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
