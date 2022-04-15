import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import count from '../features/counter/counterSlice';
import fruit from '../features/fruitStand/fruitSlice';
import posts from '../features/posts/postSlice';

const reducer = {
  count,
  fruit,
  posts,
};
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
