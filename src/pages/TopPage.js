import React from 'react';

import NavBarMainContainer from '../containers/NavBarMainContainer';

import TopPreContainer from '../containers/TopPreContainer';
import TopListContainer from '../containers/TopListContainer';
import { TopListProvider } from '../contexts/TopListContext';
import MainLayout from '../components/MainLayout';

export default function TopPage() {
  return (
    <TopListProvider>
      <NavBarMainContainer />
      <TopPreContainer />
      <MainLayout>
        <TopListContainer />
      </MainLayout>
    </TopListProvider>
  );
}
