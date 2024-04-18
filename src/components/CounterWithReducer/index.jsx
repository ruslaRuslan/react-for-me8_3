import React, { useReducer } from "react";

const counterReducer = (count, action) => {

    
};

const CounterWithReducer = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>dispatch({type: 'inc'})}>+</button>
      <button onClick={()=>dispatch({type: 'dec'})}>-</button>
      <button onClick={()=>dispatch({type: 'reset'})}>0</button>
      <button onClick={()=>dispatch({type: 'special'})}>special</button>
      <button onClick={()=> console.log(count)}>console</button>




    </>
  );
};

export default CounterWithReducer;
