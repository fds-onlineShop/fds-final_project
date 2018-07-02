import React from 'react';

import SignUpFormContainer from '../containers/SignUpFormContainer';
import NavBarContainer from '../containers/NavBarContainer';
import MainLayout from '../components/MainLayout';

export default function LoginPage() {
  return (
    <React.Fragment>
      <NavBarContainer />
      <MainLayout>
        <SignUpFormContainer />
      </MainLayout>
    </React.Fragment>
  );
}
