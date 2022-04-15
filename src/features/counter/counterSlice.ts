import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

export const counterSlice = createSlice({
  name: 'count',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

console.log(counterSlice);

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
