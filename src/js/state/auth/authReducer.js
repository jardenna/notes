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

export default (state, action) => {
   switch (action.type) {
      case INPUT_BLUR:

         return {
            ...state,
            bluredError: action.payload
         };
      case USER_LOADED:

         return {
            ...state,
            loading: false,
            errors: errorObj,
            user: action.payload,
            isAuthenticated: action.payload._id ? true : false

         };
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:

         return {
            ...state,
            ...action.payload,
            errors: errorObj,
            loading: false,
            isAuthenticated: true

         };

      case REGISTER_FAIL:
      case LOGIN_FAIL:
      case LOGOUT:

         return {
            ...state,
            user: null,
            loading: false,
            errors: action.payload,
            isAuthenticated: false

         };

      case CLEAR_ERRORS:
         return {
            ...state,
            errors: errorObj
         };
      default: return state;
   }
};