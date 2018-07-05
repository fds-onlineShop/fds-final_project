import React from 'react';

import NavBarContainer from '../containers/NavBarContainer';
import TopPreContainer from '../containers/TopPreContainer';
import TopListContainer from '../containers/TopListContainer';
import { TopListProvider } from '../contexts/TopListContext';
import MainLayout from '../components/MainLayout';

export default function TopPage() {
  return (
    <TopListProvider>
      <NavBarContainer />
      <TopPreContainer />
      <MainLayout>
        <TopListContainer />
      </MainLayout>
    </TopListProvider>
  );
}
