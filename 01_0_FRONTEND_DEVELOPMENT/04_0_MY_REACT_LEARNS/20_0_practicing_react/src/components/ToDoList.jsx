import { useState } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <h1>ToDo List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder="Add a new ToDo"
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button type="submit">Add ToDo</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
