/* Instruments */
import { counterSlice, type ReduxThunkAction } from "@/lib/redux";

export const incrementIfOddAsync =
  (amount: number): ReduxThunkAction =>
  (dispatch, getState) => {
    const state = getState();
    const currentValue: number = state.counter.value;
    // increment counter value if currentValue is odd
    if (currentValue % 2 !== 0) {
      dispatch(counterSlice.actions.incrementByAmount(amount));
    }
  };
