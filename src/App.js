import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import TopPage from './pages/TopPage';
import BottomPage from './pages/BottomPage';
import ShoesPage from './pages/ShoesPage';

import { AuthProvider } from './contexts/AuthContext';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                localStorage.getItem('token') ? (
                  <Redirect to="/main" />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          </Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/main" component={MainPage} />
          <Route path="/top" component={TopPage} />
          <Route path="/bottom" component={BottomPage} />
          <Route path="/shoes" component={ShoesPage} />
        </AuthProvider>
      </BrowserRouter>
    );
  }
}

export default App;
