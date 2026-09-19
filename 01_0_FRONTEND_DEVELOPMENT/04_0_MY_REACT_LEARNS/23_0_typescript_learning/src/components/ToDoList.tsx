import React, { useState } from "react";

// Define the interface for a single Todo item
interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const addToDoList = (taskName: string) => {
    if (!taskName.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      task: taskName,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputValue("");
  };

  const toggleComplete = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>ToDo List</h2>

      <div>
        <input
          type="text"
          placeholder="Enter a new todo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => addToDoList(inputValue)}>Add Todo</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => toggleComplete(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.task}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
