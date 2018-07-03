import React from 'react';

import NavBarContainer from '../containers/NavBarContainer';

import TopListContainer from '../containers/TopListContainer';
import { TopListProvider } from '../contexts/TopListContext';
import MainLayout from '../components/MainLayout';

export default function TopPage() {
  return (
    <TopListProvider>
      <NavBarContainer />
      <MainLayout>
        <TopListContainer />
      </MainLayout>
    </TopListProvider>
  );
}
