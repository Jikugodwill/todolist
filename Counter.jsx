import React, { useState } from "react";

function Counter() {
  // State to hold the counter value
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        width: "fit-content",
      }}
    >
      <h3>Counter Component</h3>
      {/* Display the current count */}
      <p>Counter: {count}</p>
      <button
        onClick={function () {
          // Increment the count by 1 when the button is clicked
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
