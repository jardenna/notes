import React from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route
} from 'react-router-dom';


import Navbar from './layout/Navbar';
import AuthState from '../state/auth/AuthState';
import Home from './pages/Home';
import Register from '@components/auth/Register';
import Login from '@components/auth/Login';
import Protected from '@components/pages/Protected';
import PrivateRoute from '@components/routing/PrivateRoute';
function App() {

   return (
      <React.StrictMode>
         <AuthState>
            <Router>

               <Navbar
                  title='Contact'
               />
               <div className="container">

                  <Switch>
                     <Route exact path='/' component={Home} />
                     <Route path='/register' component={Register} />
                     <Route path='/login' component={Login} />
                     <PrivateRoute path='/protected' component={Protected} />
                  </Switch>
               </div>
            </Router>
         </AuthState>
      </React.StrictMode>

   );
}

export default App;
