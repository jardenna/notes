import { RootState } from './../../app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProductProps {}

const initialState: any = [];

export const fruitSlice = createSlice({
  name: 'fruit',
  initialState,
  reducers: {
    addFruit: (state, action: PayloadAction<ProductProps>) => {
      state.unshift(action.payload);
    },
    clearFruits: (state) => {
      state = () => [];
    },
  },
});

export const addedFruit = (state: RootState) => state.fruit;
export const { addFruit, clearFruits } = fruitSlice.actions;

export default fruitSlice.reducer;
