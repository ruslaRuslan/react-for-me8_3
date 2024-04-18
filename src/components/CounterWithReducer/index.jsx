import React, { useReducer } from "react";

const counterReducer = (count, action) => {
  switch (action.type) {
    case "inc":
      return count + 1;
    case "dec":
      return count + 1;
    case "reset":
      return count - count;
    case "special":
      const newEd = prompt("ededi daxil et");
    default:
      throw new Error("YALNIS!");
  }
};

const CounterWithReducer = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>0</button>
      <button onClick={() => dispatch({ type: "special" })}>special</button>
      <button onClick={() => console.log(count)}>console</button>
    </>
  );
};

export default CounterWithReducer;
