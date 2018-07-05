import React from 'react';

import SignUpFormContainer from '../containers/SignUpFormContainer';
import NavBarMainContainer from '../containers/NavBarMainContainer';
import MainLayout from '../components/MainLayout';

export default function LoginPage() {
  return (
    <React.Fragment>
      <NavBarMainContainer />
      <MainLayout>
        <SignUpFormContainer />
      </MainLayout>
    </React.Fragment>
  );
}
