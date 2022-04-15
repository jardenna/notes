import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './layout/Header';
import AuthState from '../state/auth/AuthState';
import Home from './pages/Home';

import Login from './auth/Login';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { PageId } from '../types/types';

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
                  render={() => <Login id={PageId.Register} title="Register" />}
                />
                <Route
                  path="/login"
                  render={() => <Login id={PageId.Login} title="Login" />}
                />
              </Switch>
            </div>
          </Router>
        </AuthState>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
