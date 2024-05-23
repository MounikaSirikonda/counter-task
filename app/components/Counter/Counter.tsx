"use client";

/* Core */
import { useState } from "react";

/* Instruments */
import { useSelector, selectCount, useDispatch } from "@/lib/redux";

/* Actions */
import { counterSlice } from "@/lib/redux/slices/counterSlice";
import { incrementIfOddAsync } from "@/lib/redux/slices/counterSlice/thunks";

/* Styles */
import styles from "./counter.module.css";

export const Counter = () => {
  const count: number = useSelector(selectCount);
  const dispatch = useDispatch();

  // state variables
  const [incrementAmount, setIncrementAmount] = useState<string>("");

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {
            dispatch(counterSlice.actions.decrement());
          }}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => {
            dispatch(counterSlice.actions.increment());
          }}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          value={incrementAmount}
          onChange={(ev) => {
            setIncrementAmount(ev.target.value);
          }}
          aria-label="Set increment amount"
        />
        <button
          className={styles.button}
          onClick={() => {
            dispatch(
              counterSlice.actions.incrementByAmount(
                Number(incrementAmount || 0)
              )
            );
          }}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => {
            dispatch(incrementIfOddAsync(Number(incrementAmount || 0)));
          }}
        >
          Add If Odd
        </button>
        <button
          className={styles.button}
          onClick={() => {
            setIncrementAmount("");
            dispatch(counterSlice.actions.reset());
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
