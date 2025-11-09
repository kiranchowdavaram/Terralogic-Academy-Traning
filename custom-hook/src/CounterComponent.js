import React from "react";
import useCounter from "./useCounter";

function Counter() {
  const { count, increment, decrement, reset } = useCounter(0, 2);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+ Increment</button>
      <button onClick={decrement}>- Decrement</button>
      <button onClick={reset}>🔁 Reset</button>
    </div>
  );
}

export default Counter;
