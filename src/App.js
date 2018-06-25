import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';

import { AuthProvider } from './contexts/AuthContext';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AuthProvider>
          <Route path="/login" component={LoginPage} />
          <Route
            exact
            path="/"
            render={() =>
              localStorage.getItem('token') ? (
                <Redirect to="/login" />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </AuthProvider>
      </BrowserRouter>
    );
  }
}

export default App;
