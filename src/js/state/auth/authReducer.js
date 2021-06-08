import {
   REGISTER_SUCCESS,
   REGISTER_FAIL,
   USER_LOADED,
   AUTH_ERROR,
   LOGIN_SUCCESS,
   LOGIN_FAIL,
   LOGOUT

} from './types';

export default (state, action) => {
   switch (action.type) {

      case USER_LOADED:
         return {
            ...state,
            loading: false,
            user: action.payload

         };
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:

         return {
            ...state,
            ...action.payload,
            loading: false,
            isAuthenticated: true

         };

      case REGISTER_FAIL:
      case LOGIN_FAIL:
      case AUTH_ERROR:
      case LOGOUT:

         return {
            ...state,
            user: null,
            loading: false,
            error: action.payload,
            isAuthenticated: false

         };


      default: return state;
   }
};