import { RootState } from './../../app/store';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { signupUrl } from '../../utils/endpoints';
import fetchApi from '../../utils/fetchApi';
import { current } from 'immer';

interface AsyncState {
  isAuthenticated: boolean;
  user: string | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

const initialState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  issuccess: false,
  isError: false,
};
//Register user
export const register = createAsyncThunk('auth/register', async (user: any) => {
  try {
    const data = await fetchApi('post', signupUrl, user);

    return data;
  } catch (error: any) {
    console.log(error);
  }
});

export const fetchUserById = createAsyncThunk(
  'auth/register',
  async (user: any, thunkAPI) => {
    const response = await fetchApi('post', signupUrl, user);
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.issuccess = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      });
    // .addCase(register.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.user = action.payload;
    // });
  },
});
export const createPost = (state: RootState) => state.auth;
export const { reset } = authSlice.actions;
export default authSlice.reducer;
