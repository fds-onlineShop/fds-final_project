import React from 'react';

import NavBarContainer from '../containers/NavBarContainer';
import MainLayout from '../components/MainLayout';

export default function BottomPage() {
  return (
    <React.Fragment>
      <NavBarContainer />
      <MainLayout>
        <div className="content_dummy-box" />
        <p>bottom page 입니다.</p>
      </MainLayout>
    </React.Fragment>
  );
}
