import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './layout/Header';
import Home from './pages/Home';

import Login from './auth/Login';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { PageId } from '../types/types';
import Protected from './pages/Protected';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home id="home" />} />
              <Route path="/protected" element={<Protected />} />
              <Route
                path="/register"
                element={<Login id={PageId.Register} title="Register" />}
              />
              <Route
                path="/login"
                element={<Login id={PageId.Login} title="Login" />}
              />
            </Routes>
          </div>
        </Router>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
