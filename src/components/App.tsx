import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './layout/Header';
import AuthState from '../state/auth/AuthState';
import Home from './pages/Home';
import Register from './auth/Register';
import Login from './auth/Login';
import { Provider } from 'react-redux';
import { store } from '../app/store';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <AuthState>
          <Router>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" render={() => <Home id="home" />} />
                <Route
                  path="/register"
                  render={() => <Register id="register" />}
                />
                <Route path="/login" render={() => <Login id="login" />} />
              </Switch>
            </div>
          </Router>
        </AuthState>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
