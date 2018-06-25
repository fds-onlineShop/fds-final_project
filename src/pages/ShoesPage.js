import React from 'react';

import NavBarContainer from '../containers/NavBarContainer';
import MainLayout from '../components/MainLayout';

export default function ShoesPage() {
  return (
    <React.Fragment>
      <NavBarContainer />
      <MainLayout>shoes 페이지입니다.</MainLayout>
    </React.Fragment>
  );
}
