import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './layout/Header';
import AuthState from '../state/auth/AuthState';
import Home from './pages/Home';
import Register from './auth/Register';
import Login from './auth/Login';

function App() {
  return (
    <React.StrictMode>
      <AuthState>
        <Router>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </Router>
      </AuthState>
    </React.StrictMode>
  );
}

export default App;
