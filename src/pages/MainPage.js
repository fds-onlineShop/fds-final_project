import React from 'react';

import NavBarMainContainer from '../containers/NavBarMainContainer';
import MainLayout from '../components/MainLayout';

export default function MainPage() {
  return (
    <React.Fragment>
      <NavBarMainContainer />
      <MainLayout />
    </React.Fragment>
  );
}
