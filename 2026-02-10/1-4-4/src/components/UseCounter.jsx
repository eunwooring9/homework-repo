import React, { useState } from "react";

function useCounter(initialValue = 0, options = {}) {
  const { min, max } = options;
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prev) => {
      if (max !== undefined && prev >= max) return prev;
      return prev + 1;
    });
  };

  const decrement = () => {
    setCount((prev) => {
      if (min !== undefined && prev <= min) return prev;
      return prev - 1;
    });
  };

  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

export function Counter() {
  const { count, increment, decrement, reset } = useCounter(0, { min: 0, max: 10 });

  return (
    <div className="container">
      <h1>Count: {count}</h1>
      <div className="btn-wrap">
        <button onClick={increment} className="btn">
          +1
        </button>
        <button onClick={decrement} className="btn">
          -1
        </button>
        <button onClick={reset} className="btn-reset">
          reset
        </button>
      </div>
    </div>
  );
}
