import { useState } from "react";
import "./TodoContainer.css"; // Assuming you have a CSS file for styling

function TodoContainer() {
  // This component will manage the todo list state and display todos
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);

  // Function to handle adding a new todo
  const handleAddTodo = () => {
    // Check if the new todo (from input) is not empty before adding it
    if (newTodo.trim() !== "") {
      // If it's not empty, we can add it to the list
      // Using unshift to add the new todo at the beginning of the list
      // This way, the most recent todo appears at the top
      // We also trim the input to remove any leading or trailing whitespace
      // and ensure that we don't add empty todos
      // Note: unshift modifies the original array, so we need to create a new array to update the state
      todos.unshift(newTodo.trim());
      setTodos([...todos]); // Update the state with the new todo list
      setNewTodo(""); // Clear the input field after adding
    }
  };

  const handleDelete = (index) => {
    // This function will handle the deletion of a todo item
    // It takes the index of the todo to be deleted
    // We need to update the todos state to remove the item at the given index
    setTodos((prevTodos) => {
      // Create a new array excluding the todo at the specified index
      return prevTodos.filter((_, i) => i !== index);
    });
    // If the deleted todo was in the completedTodos, we also need to remove it from there
    setCompletedTodos((prevCompleted) =>
      prevCompleted.filter((todo) => todo !== todos[index])
    );
  };

  const handleToggleDone = (index, checked) => {
    // This function will handle toggling the done state of a todo item
    // It takes the index of the todo to be toggled
    // We will check if the todo is already in the completedTodos array
    if (checked) {
      // If the checkbox is checked, we add the todo to completedTodos
      setCompletedTodos((prevCompleted) => [...prevCompleted, todos[index]]);
    } else {
      // If the checkbox is unchecked, we remove the todo from completedTodos
      setCompletedTodos((prevCompleted) =>
        prevCompleted.filter((todo) => todo !== todos[index])
      );
    }
  };

  return (
    <section>
      <h2>Your Todos</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent the default form submission behavior
          handleAddTodo(); // Call the function to add a new todo
          setNewTodo(""); // Clear the input field after adding
        }}
      >
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <input type="submit" value={"Add Todo"} />
      </form>
      <ul>
        {todos.length ? (
          todos.map((todo, index) => (
            <li
              key={index}
              style={{
                textDecoration: completedTodos.includes(todo)
                  ? "line-through"
                  : "none",
                color: completedTodos.includes(todo) ? "gray" : "black",
              }}
            >
              <div className="item-main">
                <input
                  type="checkbox"
                  name="done"
                  id="done"
                  onChange={(e) => handleToggleDone(index, e.target.checked)}
                />
                <span>{todo}</span>
              </div>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))
        ) : (
          <div>There's nothing to do yet</div>
        )}
        {completedTodos.length > 0 && (
          <div>
            <h3>Completed Todos:</h3>
            <ul>
              {completedTodos.map((todo, index) => (
                <li key={index}>{todo}</li>
              ))}
            </ul>
          </div>
        )}
      </ul>
    </section>
  );
}

export default TodoContainer;
