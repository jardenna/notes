import { useReducer } from 'react';

import AuthContext from './AuthContext';
import authReducer from './authReducer';
import { loginUrl, userUrl, logoutUrl } from '../../utils/endpoints';
import fetchApi from '../../utils/fetchApi';

import {
   LOGIN_SUCCESS,
   LOGIN_FAIL,
   USER_LOADED,
   LOGOUT,
   REGISTER_SUCCESS,
   REGISTER_FAIL
} from './types';

const AuthState = (props) => {

   const initialState = {
      isAuthenticated: false,
      loading: false,
      user: null,
      error: null
   };

   const [state, dispatch] = useReducer(authReducer, initialState);

   //Load user
   const loadUser = async () => {
      try {
         const res = await fetch(userUrl, {
            method: 'GET',
            credentials: 'include'
         });
         const data = await res.json();

         dispatch({
            type: USER_LOADED,
            payload: data
         });
      } catch (err) {
         dispatch({ type: LOGIN_FAIL, payload: err.message });
      }
   };


   // Login User
   const login = async (formData) => {
      const data = await fetchApi('post', loginUrl, formData);
      if (data.errors) {
         dispatch({
            type: LOGIN_FAIL,
            payload: data.errors
         });

      }
      dispatch({
         type: LOGIN_SUCCESS,
         payload: data
      });

   };

   //Logout
   const logout = async () => {
      try {
         const res = await fetch(logoutUrl,
            {
               method: 'GET',
               credentials: 'include'

            });

         const data = await res.json();
         dispatch({
            type: LOGOUT,
            payload: data
         });

      } catch (err) {
         dispatch({
            type: LOGOUT,
            payload: err.message
         });
      }

   };
   const { isAuthenticated, loading, user } = state;
   const initialValue = {

      isAuthenticated,
      loading,
      user,
      loadUser,
      login,
      logout
   };

   return (
      <AuthContext.Provider value={initialValue}>
         {props.children}
      </AuthContext.Provider>
   );
};

export default AuthState;
