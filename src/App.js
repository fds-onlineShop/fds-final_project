import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';

import { UserProvider } from './contexts/UserContext';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <Route path="/login" component={LoginPage} />
        </UserProvider>
      </BrowserRouter>
    );
  }
}

export default App;
