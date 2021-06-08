import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../state/auth/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
   const authContext = useContext(AuthContext);
   // console.log(authContext);
   const { isAuthenticated, loading } = authContext;


   if (loading) {
      return 'loading...';
   }

   if (isAuthenticated) {
      return (<Route {...rest} render={(props) => (<Component {...props} />)} />);
   } else {
      return <Redirect to='/login' />;
   }
};





export default PrivateRoute;