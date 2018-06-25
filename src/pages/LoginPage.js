import React from 'react';

import LoginFormContainer from '../containers/LoginFormContainer';
import MainLayout from '../components/MainLayout';
import NavBar from '../components/NavBar';

export default class LoginPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <MainLayout>
          <LoginFormContainer />;
        </MainLayout>
      </React.Fragment>
    );
  }
}
