import { useReducer } from 'react';

import AuthContext from './AuthContext';
import authReducer from './authReducer';
import { loginUrl, userUrl, logoutUrl, signupUrl } from '../../utils/endpoints';
import fetchApi from '../../utils/fetchApi';

import {
   REGISTER_SUCCESS,
   REGISTER_FAIL,
   LOGIN_SUCCESS,
   LOGIN_FAIL,
   USER_LOADED,
   LOGOUT,
   CLEAR_ERRORS,
   INPUT_BLUR

} from './types';

import { errorObj } from '../utils';
const AuthState = (props) => {
   const initialState = {
      isAuthenticated: false,
      loading: true,
      user: null,
      errors: errorObj,
      bluredError: ''
   };

   const [state, dispatch] = useReducer(authReducer, initialState);

   //Blur error
   const blur = (name) => {
      dispatch({
         type: INPUT_BLUR,
         payload: delete errors[name]
      });
   };

   //Load user
   const loadUser = async () => {

      const data = await fetchApi('get', userUrl);
      if (data) {

         if (data.errors) {
            dispatch({ type: LOGIN_FAIL, payload: data.errors });
         }
         dispatch({
            type: USER_LOADED,
            payload: data
         });
      }
   };

   // Register a user
   const register = async (formData) => {
      const data = await fetchApi('post', signupUrl, formData);

      if (!data.errors) {
         dispatch({
            type: REGISTER_SUCCESS,
            payload: data
         });
         loadUser();

      } else {
         dispatch({
            type: REGISTER_FAIL,
            payload: data.errors
         });
      }

   };

   // Login User
   const login = async (formData) => {
      const data = await fetchApi('post', loginUrl, formData);
      if (!data.errors) {

         dispatch({
            type: LOGIN_SUCCESS,
            payload: data
         });
         loadUser();
      }
      dispatch({
         type: LOGIN_FAIL,
         payload: data.errors
      });
   };

   //Logout
   const logout = async () => {
      const data = await fetchApi('get', logoutUrl);

      if (!data.errors) {
         dispatch({
            type: LOGOUT,
            payload: data
         });
      } else {
         dispatch({
            type: LOGOUT,
            payload: data.errors
         });
      }

   };

   const clearErr = () => {
      dispatch({
         type: CLEAR_ERRORS
      });
   };
   const { isAuthenticated, loading, user, errors } = state;

   const initialValue = {
      register,
      isAuthenticated,
      loading,
      user,
      errors,
      clearErr,
      loadUser,
      login,
      logout,
      blur
   };

   return (
      <AuthContext.Provider value={initialValue}>
         {props.children}
      </AuthContext.Provider>
   );
};

export default AuthState;
