import React from 'react';

import NavBarContainer from '../containers/NavBarContainer';
import MainLayout from '../components/MainLayout';

export default function MainPage() {
  return (
    <React.Fragment>
      <NavBarContainer />
      <MainLayout>메인 페이지 입니다.</MainLayout>
    </React.Fragment>
  );
}
