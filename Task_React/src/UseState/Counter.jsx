import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const Increment = (event) => {
    setCount(count + 2);
  };
  const Decrement = (event) => {
    setCount(count - 1);
  };
  return (
    <>
      <p>you clicked the button! {count} times</p>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </>
  );
};

export default Counter;
