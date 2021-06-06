import React, { useState } from "react";

const Test: React.FC = () => {
  let arr = [1, 2, 3, 4, 5, 6];
  const [state, setState] = useState(arr);
  const updateState = () => {
    console.log("state before", state);
    setState(state => [...state, Math.floor(Math.random() * 100)]);
  };
  return (
    <div>
      {state.map((item) => (
        <h1>{item}</h1>
      ))}
      <button onClick={() => updateState()}>Update State</button>
    </div>
  );
};

export default Test;
