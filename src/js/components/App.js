import React from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route
} from 'react-router-dom';


import Navbar from './layout/Navbar';


import About from './pages/About';
import Register from '@components/auth/Register';
import Login from '@components/auth/Login';
function App() {

   return (
      <React.StrictMode>
         <Router>
            <Navbar
               title='Contact'
            />
            <div className="container">

               <Switch>

                  <Route path='/about' component={About} />
                  <Route path='/register' component={Register} />
                  <Route path='/login' component={Login} />
               </Switch>
            </div>
         </Router>
      </React.StrictMode>

   );
}

export default App;
