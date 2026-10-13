
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f4f8",
        padding: "40px",
        borderRadius: "15px",
        maxWidth: "350px",
        margin: "100px auto",
        boxShadow: "0 4px 15px rgba(0,0,0,0.15)"
      }}
    >
      <h1 style={{ color: "#2563eb" }}>
        Increment Counter
      </h1>

      <h2 style={{ fontSize: "35px", color: "#333" }}>
        Count: {count}
      </h2>

      <button
        onClick={increment}
        style={{
          backgroundColor: "#22c55e",
          color: "white",
          padding: "10px 18px",
          margin: "5px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Increment +
      </button>

      <button
        onClick={decrement}
        style={{
          backgroundColor: "#ef4444",
          color: "white",
          padding: "10px 18px",
          margin: "5px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Decrement -
      </button>

      <button
        onClick={reset}
        style={{
          backgroundColor: "#64748b",
          color: "white",
          padding: "10px 25px",
          margin: "10px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Reset ↻
      </button>
    </div>
  );
}

export default App;
