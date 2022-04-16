import { RootState } from './../../app/store';
import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
export interface IProducts {
  title?: string;
  id?: string;
}

interface TodosState {
  list: IProducts[];
}

const initialState: TodosState = {
  list: [
    { title: 'Escape from Tarkow', id: nanoid(5) },
    { title: 'Hunt: Showdown', id: nanoid(5) },
    { title: 'Hell lets loose', id: nanoid(5) },
    { title: 'New game', id: nanoid(5) },
  ],
};
const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action: PayloadAction<IProducts>) => {
        const newProduct = action.payload;
        state.list = [newProduct, ...state.list];
      },
      prepare: (post: IProducts) => {
        return { payload: { id: nanoid(3), title: post.title } };
      },
    },
  },
});

//Code removed from component
export const createPost = (state: RootState) => state.posts.list;

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
