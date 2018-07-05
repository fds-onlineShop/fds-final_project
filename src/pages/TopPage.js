import React from 'react';

import NavBarMainContainer from '../containers/NavBarMainContainer';

import TopListContainer from '../containers/TopListContainer';
import { TopListProvider } from '../contexts/TopListContext';
import MainLayout from '../components/MainLayout';

export default function TopPage() {
  return (
    <TopListProvider>
      <NavBarMainContainer />
      <MainLayout>
        <TopListContainer />
      </MainLayout>
    </TopListProvider>
  );
}
