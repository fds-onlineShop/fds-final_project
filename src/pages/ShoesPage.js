import React from 'react';

import NavBarContainer from '../containers/NavBarContainer';
import MainLayout from '../components/MainLayout';

export default function ShoesPage() {
  return (
    <React.Fragment>
      <NavBarContainer />
      <MainLayout>
        <p>shoes page 입니다.</p>
      </MainLayout>
    </React.Fragment>
  );
}
