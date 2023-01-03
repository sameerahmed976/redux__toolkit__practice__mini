import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
} from "../features/counter/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  //   console.log(`* ~ file: Counter.jsx:7 ~ Counter ~ counter`, count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <>
      <section>
        <p className="counter">{count}</p>

        <div className="btn__group">
          <button
            className="btn btn--increment"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="btn btn--decrement"
            onClick={() => dispatch(decrement())}
          >
            decrement
          </button>
          <button className="btn btn--reset" onClick={() => dispatch(reset())}>
            reset
          </button>
        </div>
        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />

        <div className="btn__group">
          <button
            onClick={() => dispatch(incrementByAmount(addValue))}
            className="btn"
          >
            Add Amount
          </button>
          <button onClick={resetAll} className="btn">
            reset amount
          </button>
        </div>
      </section>
    </>
  );
};

export default Counter;
