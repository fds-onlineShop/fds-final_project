import React from 'react';

import LoginFormContainer from '../containers/LoginFormContainer';
import NavBarMainContainer from '../containers/NavBarMainContainer';
import MainLayout from '../components/MainLayout';

export default function LoginPage() {
  return (
    <React.Fragment>
      <NavBarMainContainer />
      <MainLayout>
        <LoginFormContainer />
      </MainLayout>
    </React.Fragment>
  );
}
