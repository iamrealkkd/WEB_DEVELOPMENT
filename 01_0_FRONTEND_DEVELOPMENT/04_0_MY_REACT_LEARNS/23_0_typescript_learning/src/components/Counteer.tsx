import React, { useReducer } from "react";
import counterReducer from "../reducers/counterReducer";
import type { CounterState } from "../reducers/counterReducer";

const initialState: CounterState = {
  count: 0,
};

const Counteer = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>

      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Counteer;
