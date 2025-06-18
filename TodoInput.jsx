import React, { useState } from "react";

const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Add a new todo"
    />
  );
};

export default TodoInput;
