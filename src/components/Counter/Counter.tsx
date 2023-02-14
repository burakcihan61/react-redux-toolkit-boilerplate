import React from "react";
import type { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/counter/counterSlice";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          style={{ border: "3px solid red" }}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          style={{ border: "3px solid red" }}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
