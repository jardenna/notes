import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../state/auth/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
   const authContext = useContext(AuthContext);
   const { isAuthenticated, loading } = authContext;

   if (loading) {
      return 'Loading...';
   }

   if (isAuthenticated) {
      return (
         <Route {...rest} render={(props) => (<Component {...props} />)} />
      );
   } else {
      if (!loading) {
         return <Redirect to='/login' />;
      }
   }
};

export default PrivateRoute;