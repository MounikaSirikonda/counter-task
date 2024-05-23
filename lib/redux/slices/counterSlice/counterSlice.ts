/* Core */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CounterSliceState = {
  value: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // increment counter value by 1
      state.value += 1;
    },
    decrement: (state) => {
      // decrement counter value by 1
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // increment counter value by provided number
      state.value += action.payload;
    },
    reset: (state) => {
      // reset counter value to initial state
      state.value = initialState.value;
    },
  },
});

/* Types */
export interface CounterSliceState {
  value: number;
  status: "idle" | "loading" | "failed";
}
