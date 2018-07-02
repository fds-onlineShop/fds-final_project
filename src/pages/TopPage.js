import React from 'react';

import NavBarContainer from '../containers/NavBarContainer';
import MainLayout from '../components/MainLayout';

export default function TopPage() {
  return (
    <React.Fragment>
      <NavBarContainer />
      <MainLayout>
        <p>top page 입니다.</p>
      </MainLayout>
    </React.Fragment>
  );
}
