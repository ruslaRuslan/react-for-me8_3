import React, { useReducer } from "react";

const counterReducer = (count, action) => {};

const CounterWithReducer = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);
  return (
    <>
      <h1>{count}</h1>
    </>
  );
};

export default CounterWithReducer;
