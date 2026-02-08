import React, { useState } from "react";

export function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAdd = () => {
    if (!inputText.trim()) return;
    const newTodo = { id: Date.now(), text: inputText };
    setTodos([...todos, newTodo]);
    setInputText("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <div className="input-box">
        <input type="text" placeholder="할 일을 입력하세요..." value={inputText} onChange={handleInputChange} />
        <button onClick={handleAdd} className="add-btn">
          추가
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>

            <button onClick={() => handleDelete(todo.id)} className="delete-btn">
              🗑️
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && <p className="none">할 일이 없습니다.</p>}
    </div>
  );
}
